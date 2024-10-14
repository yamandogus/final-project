import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { useAddressesStore } from "./Address";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import useSnackbar from "../../../hooks/alert";
import { base_url } from "../../Bestseller/BestSellers";
import { CityProps, DistrictProps } from "../../../services/city-district";

const Addresses: React.FC = () => {
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
    removeAddress,
    addresses,
  } = useAddressesStore();

  const [isAddressSaved, setIsAddressSaved] = useState(addAddress.length > 0);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [cities, setCities] = useState<CityProps[]>([]);
  const [districts, setDistricts] = useState<DistrictProps[]>([]);

  useEffect(() => {
    fetchCity();
  }, []);

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      setPhone(value);
    }
  };

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
      setIsAddressSaved(true);
      showSnackbar("Adres Güncellendi", "success");
      setAddress("");
      setCity("");
      setDistrict("");
      setFirstName("");
      setLastName("");
      setTitle("");
      setPhone("");
      setCities([]);
      setDistricts([]);
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
      setIsAddressSaved(true);
      showSnackbar("Adres Kaydedildi", "success");
      setAddress("");
      setCity("");
      setDistrict("");
      setFirstName("");
      setLastName("");
      setTitle("");
      setPhone("");
      setCities([]);
      setDistricts([]);
    }
  };

  const handleDeleteAddress = (index: number) => {
    removeAddress(index);
    if (addresses.length === 1) {
      setIsAddressSaved(false);
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

  return (
    <Box>
      {isAddressSaved && addresses.length > 0 ? (
        <Box mb={30}>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography sx={{ textTransform: "none" }} variant="subtitle1">
                ADRESLERİM(
                <strong style={{ color: "red" }}>{addresses.length}</strong>)
              </Typography>
              <Button
                sx={{ textTransform: "none", fontWeight: "bolder" }}
                onClick={() => setIsAddressSaved(false)}
              >
                Adres Ekle
              </Button>
            </Box>
            <Grid container spacing={3}>
              {addresses.map((address, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid black",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      height: "100%",
                    }}
                  >
                    <Typography component="div" fontWeight="bold">
                      {address.title}
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1,
                      }}
                    >
                      <HomeIcon /> {address.address} {address.district}/{" "}
                      {address.city}
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1,
                      }}
                    >
                      <PersonIcon /> {address.firstName} {address.lastName}
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1,
                      }}
                    >
                      <PhoneAndroidIcon /> {address.phone}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="text"
                        onClick={() => handleDeleteAddress(index)}
                        sx={{
                          textTransform: "none",
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        <DeleteIcon />
                        Sil
                      </Button>
                      <Button
                        sx={{ textTransform: "none" }}
                        onClick={() => {
                          setEditIndex(index);
                          setTitle(address.title);
                          setAddress(address.address);
                          setCity(address.city);
                          setDistrict(address.district);
                          setFirstName(address.firstName);
                          setLastName(address.lastName);
                          setPhone(address.phone);
                          setIsAddressSaved(false);
                        }}
                      >
                        Adresi Düzenle
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box mb={10}>
          <Box mb={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography fontWeight="bolder" variant="subtitle1">
                {editIndex !== null ? "Adresi Düzenle" : "Adres Oluştur"}
              </Typography>
              <Button
                onClick={() => setIsAddressSaved(true)}
                sx={{ textTransform: "none" }}
              >
                Adreslerim ➝
              </Button>
            </Box>
            {addresses.length === 0 && (
              <Stack
                sx={{
                  backgroundColor: "rgba(33, 38, 171, 0.1)",
                  border: "1px solid rgba(33, 38, 171, 1)",
                  borderRadius: 1,
                  px: 3,
                  py: 2,
                  mt: 1,
                }}
              >
                <Typography variant="subtitle2">
                  Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres
                  oluşturunuz.
                </Typography>
              </Stack>
            )}
          </Box>
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
                    MenuProps: 
                    {
                      PaperProps:{
                        style:{
                          maxHeight:140
                        }
                      },
                      disableScrollLock:true
                    }
                  }}
                  onChange={(e) => {
                    setCity(e.target.value);
                    fetchDistrict(e.target.value);
                  }}
                  required
                  label="İl"
                >
                  {cities.map((option) => (
                    <MenuItem
                    key={option.id} value={option.name}>
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
                    MenuProps:{
                      PaperProps:{
                        style:{
                          maxHeight:140
                        }
                      },
                      disableScrollLock: true
                    }
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
                  {editIndex !== null ? "Güncelle" : "Kaydet"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
      <SnackbarComponent />
    </Box>
  );
};

export default Addresses;
