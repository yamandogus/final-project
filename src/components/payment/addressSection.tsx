import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Button,
  FormControlLabel,
  Radio,
  Drawer,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import CustomAccordion from "./customAccordion";
import { Link, useLoaderData } from "react-router-dom";
import {
  AddedAddress,
  Address,
  CityProps,
  DistrictProps,
} from "../../services/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { base_url } from "../Bestseller/Bestseller";
import MuiPhoneNumber from "material-ui-phone-number";
import useSnackbar from "../../hooks/alert";
import { AccountProps } from "../Account/Informations/MyAccount";
interface AddressSectionProps {
  expanded: string | false;
  handleChangePanel: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  setSelectedAddress: (address: string) => void;
}
const style = {
  left: "50%",
  width: "100%",
  px: 4,
  pb: 3,
};

interface LoaderData{
datas: AddedAddress[],
user: AccountProps
}

const AddressSection: React.FC<AddressSectionProps> = ({
  handleChangePanel,
  expanded,
  setSelectedAddress,
}) => {
  const { datas, user} = useLoaderData() as LoaderData;
  const [title, setTitle] = useState("");
  const [addres, setAddres] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [phone, setPhone] = useState("");
  const [addresssNew, setAddresssNew] = useState<AddedAddress[]>(datas);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setİd] = useState("");
  const [editIndex, setEditIndex] = useState(false);
  const [selectedAddressValue, setSelectedAddressValue] = useState<string>("");

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      const cleanValue = value.replace(/\s+/g, "");
      setPhone(cleanValue);
    }
  };

  const handleAddressSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData.entries()) as unknown as Address;
    const newData = {
      title: title,
      country_id: 226,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${addres}${city}/${district}`,
      phone_number: data.phone,
    };
    try {
      const response = await fetch(base_url + "/users/addresses", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      setAddresssNew((prev) => [...prev, responseJson.data]);
      resetForm();
      showSnackbar("Adres Eklendi", "success");
    } catch (error) {
      console.log(error);
      showSnackbar("Adres eklenemedi", "error");
    }
  };

  async function fetchCity() {
    try {
      const responseCity = await fetch(
        base_url + "/world/region?limit=81&offset=0&country-name=turkey"
      );
      const dataCity = await responseCity.json();
      setCities(dataCity.data.results);
    } catch (error) {
      console.error("Şehirler yüklenirken hata oluştu:", error);
    }
  }

  async function fetchDistrict(selectedCity: string) {
    try {
      const responseDistrict = await fetch(
        base_url +
          `/world/subregion?limit=30&offset=0&region-name=${selectedCity}`
      );
      const dataDistrict = await responseDistrict.json();
      setDistricts(dataDistrict.data.results);
    } catch (error) {
      console.error("İlçeler yüklenirken hata oluştu:", error);
    }
  }
  const resetForm = () => {
    setTitle("");
    setAddres("");
    setCity("");
    setDistrict("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setCities([]);
    setDistricts([]);
    setİd("");
  };
  const upadeteAddress = async (id: string) => {
    const updateData = {
      title: title,
      country_id: 226,
      region_id: cities.find((c) => c.name === city)?.id,
      subregion_id: districts.find((d) => d.name === district)?.id,
      full_address: `${addres}, ${city ? city.split("Province")[0] : ""}/${
        district ? district.split("İlçesi")[0] : ""
      }`,
      phone_number: phone,
    };

    try {
      const response = await fetch(base_url + `/users/addresses/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseJson = await response.json();
        setAddresssNew((prev) =>
          prev.map((add) =>
            add.id === id ? { ...add, ...responseJson.data } : add
          )
        );
        showSnackbar("Adres güncellendi", "success");
        handleClose();
        resetForm();
      } else {
        showSnackbar("Adres güncellenemedi", "error");
      }
    } catch (error) {
      console.log(error);
      showSnackbar("Adres güncellenemedi", "error");
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Link to={"/Home"}>
          <img
            style={{ position: "relative", left: -20, top: 0 }}
            width={180}
            src="/images/Logo/Logo1.png"
            alt="Logo"
          />
        </Link>
        <Box>
          <strong>{user.first_name+ " " + user.last_name}</strong> <br />
          {user.email}
        </Box>
      </Box>
      <CustomAccordion
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
        title="Adres"
        panelNumber={1}
      >
        <Typography variant="subtitle1">Teslimat Adresi</Typography>
        <Box px={2}>
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Ev"
              name="radio-buttons-group"
            >
              {addresssNew.map((address) => (
                <Box
                  key={address.id}
                  sx={{
                    px: 2,
                    borderRadius: 3,
                    border: "1px solid black",
                    my: 2,
                  }}
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <FormControlLabel
                      control={
                        <Radio
                          value={address.full_address}
                          onChange={(e) => {
                            setSelectedAddress(e.target.value)
                            setSelectedAddressValue(e.target.value)
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontWeight: "bolder",
                            ":hover": {
                              color: '#0a5f05',
                            },
                          }}
                        >
                          {address.title}
                        </Typography>
                      }
                    />
                    <Button
                      onClick={() => {
                        setTitle(address.title);
                        setAddres(address.full_address.split(",")[0]);
                        setPhone(address.phone_number);
                        handleOpen();
                        setİd(address.id);
                      }}
                      sx={{ textTransform: "none" }}
                    >
                      Düzenle
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">
                      {address.full_address}
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
                }}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <FormControlLabel
                    control={
                      <Radio
                        onClick={() => {
                          handleOpen();
                          setEditIndex(true);
                        }}
                        value={""}
                        onChange={(e) => {
                          setSelectedAddress(e.target.value)
                          setSelectedAddressValue(e.target.value)
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          ":hover": {
                            color: "green",
                          },
                        }}
                      >
                        Yeni Adres
                      </Typography>
                    }
                  />
                </Box>
              </Box>
            </RadioGroup>
          </FormControl>
          <Button
          onClick={()=>{
            if(selectedAddressValue){
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              handleChangePanel("panel2")(null as any, true)
            }else{
              showSnackbar("Lütfen bir teslimat adresi seçin", 'error')
            }
          }}
            style={{
              marginLeft: 0,
              display: "block",
              padding: "10px 0",
              width: "100%",
              margin: "0 auto",
              color: "white",
              backgroundColor: "black",
              textTransform: "none",
            }}
          >
            KARGO İLE DEVAM ET
          </Button>
        </Box>
        <SnackbarComponent />
      </CustomAccordion>
      <Drawer
        anchor="top"
        sx={style}
        open={open}
        onClose={() => {
          handleClose();
          resetForm();
        }}
        disableScrollLock
        PaperProps={{
          sx: {
            m: 0,
            borderRadius: 2,
            left: { xs: "0%", md: "20%" },
            transform: "translate(-50%)",
            width: { xs: "100%", md: "60%" },
          },
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            p: 2,
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!editIndex) {
                upadeteAddress(id);
              } else {
                handleAddressSubmit(e);
              }
            }}
          >
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
                  value={addres}
                  onChange={(e) => setAddres(e.target.value)}
                  label="Adres"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  onFocus={() => fetchCity()}
                  value={city}
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
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    py: 1,
                    textTransform: "none",
                    backgroundColor: "black",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  {!editIndex ? "Güncelle" : "Kaydet"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default AddressSection;
