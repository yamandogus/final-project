import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Drawer,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import CustomAccordion from "./customAccordion";
import { Link } from "react-router-dom";
import { Address, useAddressesStore } from "../Account/addresses/Address";
import { CityProps, DistrictProps } from "../../services/city-district";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { ChangeEvent } from "react";
import useSnackbar from "../../hooks/alert";
import { base_url } from "../bestseller/BestSellers";
import { useEffect } from "react";

interface AddressSectionProps {
  addresses: Address[];
  expanded: string | false;
  handleChangePanel: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  setSelectedAddress: (address: string) => void;
  newAddress: boolean;
  setNewAddress: (value: boolean) => void;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  addresses,
  expanded,
  handleChangePanel,
  setSelectedAddress,
  newAddress,
  setNewAddress,
}) => {
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null)
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
    city,
    district,
    lastName,
    firstName,
    phone,
    address,
    setTitle,
    setCity,
    setDistrict,
    setLastName,
    setFirstName,
    setPhone,
    setAddress,
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
     if(editIndex !== null){
        const updateAddress = [...addresses]
        updateAddress[editIndex]={
            title,city,lastName,firstName,phone,district,address
        }
        useAddressesStore.setState({addresses: updateAddress})
        setEditIndex(null)
        setNewAddress(false)
        showSnackbar("Adres Güncellendi","success")
        resetForm()
     }else{
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
     }

    };
 
 useEffect(()=>{
    if(newAddress === false){
        resetForm()
    }
 },[newAddress])

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
  )=>{
    if(typeof  value === "string"){
        setPhone(value)
    }
  }
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Link to={"/Home"}>
          <img style={{position:'relative',left:-20,top:0}} width={180} src="/images/Logo/Logo1.png" alt="Logo" />
        </Link>
        <Box>
          <strong>İsim Soyisim</strong> <br />
          isimsoyisim@mail.com
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
                    <FormControlLabel
                      control={
                        <Radio
                          value={`${address.address} , ${address.district} / ${address.city}`}
                          onChange={(e) => setSelectedAddress(e.target.value)}
                        />
                      }
                      label={address.title}
                    />
                    <Button onClick={() =>{
                            setNewAddress(true)
                            setEditIndex(index)
                            setTitle(address.title)
                            setFirstName(address.firstName)
                            setAddress(address.address)
                            setCities([])
                            setDistrict("")
                            setLastName(address.lastName)
                            setPhone(address.phone)
                        }}>Düzenle</Button>
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
                  anchor="top"
                  open={newAddress}
                  onClose={() => setNewAddress(false)}
                  sx={{
                    "& .MuiPaper-root": {
                      left:{xs:0,md:"25%"},
                      width:{xs:"100%", md:"50%"},
                      padding:2,
                      }
                    }
                  }
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
                        <Button type="submit">{editIndex !==null ?"Ekle":"Güncelle"}</Button>
                      </Grid>
                    </Grid>
                  </form>
                 </Box>
                </Drawer>
              </Box>
            </RadioGroup>
          </FormControl>
          <Button
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => handleChangePanel("panel2")(null as any, true)}
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
      </CustomAccordion>
      <SnackbarComponent/>
    </>
  );
};

export default AddressSection;
