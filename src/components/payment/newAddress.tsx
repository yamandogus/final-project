import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { ChangeEvent, useState } from "react";
import { useAddressesStore } from "../Account/addresses/Address";
import { base_url } from "../bestseller/BestSellers";
import { CityProps, DistrictProps } from "../../services/city-district";
import useSnackbar from "../../hooks/alert";

const CustomAccordion = styled(Accordion)({
  border: "none",
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
});


const AddedAddress = () => {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newAddress, setNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const { addresses } = useAddressesStore();
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const resetForm = () => {
    setTitle("");
    setAddress("");
    setCity("");
    setDistrict("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setCities([]);
    setDistricts([]);
  };
  const {
    title,
    address,
    city,
    district,
    firstName,
    lastName,
    phone,
    setTitle,
    setAddress,
    setCity,
    setDistrict,
    setFirstName,
    setLastName,
    setPhone,
    addAddress,
  } = useAddressesStore();

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !title ||
      !address ||
      !city ||
      !district ||
      !firstName ||
      !lastName ||
      !phone
    ) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    if (editIndex !== null) {
      const updatedAddress = [...addresses];
      updatedAddress[editIndex] = {
        title,
        city,
        firstName,
        lastName,
        district,
        address,
        phone,
      };
      useAddressesStore.setState({ addresses: updatedAddress });
      setEditIndex(null);
      showSnackbar("Adres Güncellendi", "success");
      resetForm();
    } else {
      addAddress({
        title,
        city,
        firstName,
        lastName,
        district,
        address,
        phone,
      });
      showSnackbar("Adres Kaydedildi", "success");
      setNewAddress(false);
      resetForm();
      console.log(selectedAddress);
    }
  };

  async function fetchCity() {
    const responseCity = await fetch(
      base_url + "/world/region?limit=81&offset=0&country-name=turkey"
    );
    const dataCity = await responseCity.json();
    console.log(dataCity.data.results);
    setCities(dataCity.data.results);
  }

  async function fetchDistrict(selectedCity: string) {
    const responseDistrict = await fetch(
      base_url +
        `/world/subregion?limit=30&offset=0&region-name=${selectedCity}`
    );
    const dataDistrict = await responseDistrict.json();
    console.log(dataDistrict.data.results);
    setDistricts(dataDistrict.data.results);
  }
  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      setPhone(value);
    }
  };
  const handleChangePanel =
  (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <CustomAccordion
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
        id="section"
        sx={{ border: "none" }}
        defaultExpanded
      >
        <AccordionSummary
          style={{
            borderBottom: "1px solid rgb(200, 192, 233)",
          }}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong style={{ position: "relative" }}>
            Adres
            <strong
              style={{
                position: "absolute",
                backgroundColor: "black",
                color: "white",
                lineHeight: "20px",
                height: "20px",
                fontSize: 12,
                left: "-30px",
                top: "-1px",
                borderRadius: "50%",
                padding: "2px 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              1
            </strong>
          </strong>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 2 }}>
          <Typography variant="subtitle1">Teslimat Adresi</Typography>
          <Box px={2}>
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Ev"
                name="radio-buttons-group"
              >
                {addresses.map((address, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      borderRadius: 3,
                      border: "1px solid black",
                      my: 2,
                    }}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      {" "}
                      <FormControlLabel
                        control={
                          <Radio
                            value={`${address.address} , ${address.district} / ${address.city}`}
                            onChange={(e) => setSelectedAddress(e.target.value)}
                          />
                        }
                        label={address.title}
                      />{" "}
                      <Button onClick={() => setNewAddress(true)}>
                        Düzenle
                      </Button>
                    </Box>
                    <Box>
                      <Typography>
                        {address.address}, {address.district}, {address.city}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box
                  sx={{
                    px: 2,
                    borderRadius: 3,
                    border: "1px solid black",
                    my: 2,
                    width: "100%",
                  }}
                >
                  <FormControlLabel
                    value="Yeni Adres"
                    control={<Radio />}
                    label="Yeni Adres"
                    onClick={() => setNewAddress(true)}
                  />
                  <Drawer
                    anchor={"top"}
                    open={newAddress}
                    onClose={() => setNewAddress(false)}
                    PaperProps={{
                      sx: {
                        left: { xs: 0, md: "25%" },
                        height: "auto",
                        width: { xs: "100%", md: "50%" },
                        padding: 3,
                      },
                    }}
                  >
                    <Box>
                      <form onSubmit={handleAddressSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6} mb={2}>
                            <TextField
                              fullWidth
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                              label="Adres Başlığı"
                              placeholder="ev, iş vb..."
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              label="Ad"
                              required
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              label="Soyad"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              label="Adres"
                              required
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              select
                              value={city}
                              onFocus={() => fetchCity()}
                              SelectProps={{
                                MenuProps: {
                                  PaperProps: {
                                    style: {
                                      maxHeight: 140,
                                    },
                                  },
                                  disableScrollLock: true,
                                },
                              }}
                              onChange={(e) => {
                                setCity(e.target.value);
                                fetchDistrict(e.target.value);
                              }}
                              required
                              label="İl"
                            >
                              {cities.map((option, index) => (
                                <MenuItem key={index} value={option.name}>
                                  {option.name.split(" ")[0]}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              select
                              value={district}
                              SelectProps={{
                                MenuProps: {
                                  PaperProps: {
                                    style: {
                                      maxHeight: 140,
                                    },
                                  },
                                  disableScrollLock: true,
                                },
                              }}
                              onChange={(e) => setDistrict(e.target.value)}
                              required
                              label="İlçe"
                            >
                              {districts.map((district, index) => (
                                <MenuItem key={index} value={district.name}>
                                  {district.name.split(" ")[0]}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={12}>
                            <MuiPhoneNumber
                              defaultCountry="tr"
                              fullWidth
                              variant="outlined"
                              label="Telefon Numarası"
                              name="phone"
                              value={phone}
                              onChange={handlePhone}
                            />
                          </Grid>
                          <Grid item xs={12} textAlign="end">
                            <Button type="submit">Ekle</Button>
                          </Grid>
                        </Grid>
                      </form>
                      <SnackbarComponent />
                    </Box>
                  </Drawer>
                </Box>
              </RadioGroup>
            </FormControl>
            <Button
              onClick={() => setExpanded("panel2")}
              style={{
                marginLeft: 0,
                display: "block",
                padding: "10px 0",
                width: "100%",
                margin: "0 auto",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Kargo ile Devam Et
            </Button>
          </Box>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion
        expanded={expanded === "panel2"}
        onChange={handleChangePanel("panel2")}
        sx={{ border: "none" }}
      >
        <AccordionSummary
          style={{
            borderBottom: "1px solid rgb(228, 227, 232)",
          }}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <strong style={{ position: "relative" }}>
            Kargo
            <strong
              style={{
                position: "absolute",
                backgroundColor: "black",
                color: "white",
                lineHeight: "20px",
                height: "20px",
                fontSize: 12,
                left: "-30px",
                top: "-1px",
                borderRadius: "50%",
                padding: "2px 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              2
            </strong>
          </strong>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">Teslimat Adresi</Typography>
          {selectedAddress ? (
            <Box px={2}>
              <Box
                sx={{
                  borderRadius: 1,
                  my: 2,
                  padding: "20px 10px",
                  border: "1px solid blue",
                }}
              >
                {selectedAddress}
              </Box>
            </Box>
          ) : (
            ""
          )}
          <Box px={2}>
            <Button
              onClick={() => setExpanded("panel3")}
              style={{
                marginLeft: 0,
                display: "block",
                padding: "10px 0",
                width: "100%",
                margin: "0 auto",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Ödeme ile Devam Et
            </Button>
          </Box>
        </AccordionDetails>
      </CustomAccordion>
    </>
  );
};

export default AddedAddress;
