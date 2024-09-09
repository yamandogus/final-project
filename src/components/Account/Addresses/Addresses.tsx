import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useAddressesStore } from "./Address";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from '@mui/icons-material/Home';

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

  const [isAddressSaved, setIsAddressSaved] = useState(false);

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      setPhone(value);
    }
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress({
      title,
      address,
      city,
      district,
      firstName,
      lastName,
      phone,
    });
    setTitle("");
    setAddress("");
    setCity("");
    setDistrict("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setIsAddressSaved(true);
  };

  const handleDeleteAddress = (index: number) => {
    removeAddress(index);
    if (addresses.length === 0) {
      setIsAddressSaved(false);
    }
  };

  return (
    <Box>
      {addresses.length === 0 || !isAddressSaved ? (
        <Box mb={10}>
          <Box mb={2}>
            <Typography fontWeight="bolder" variant="subtitle1">
              Adres Oluştur
            </Typography>
            {addresses.length === 0 && (
              <Stack
                sx={{
                  backgroundColor: "rgba(33, 38, 171, 0.1)",
                  border: "1px solid rgba(33, 38, 171, 1)",
                  borderRadius: 1,
                  px: 3,
                  py: 2,
                  mt:1
                }}
              >
                <Typography variant="subtitle2">
                  Kayıtlı bir adresiniz yok. Lütfen aşağıdaki kısımdan adres
                  oluşturunuz.
                </Typography>
              </Stack>
            )}
          </Box>
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="Şehir"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                fullWidth
                label="İlçe"
                required
              />
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
                onClick={handleAddressSubmit}
                variant="contained"
                sx={{
                  py: 1,
                  backgroundColor: "black",
                  "&:hover": { backgroundColor: "black" },
                }}
              >
                Kaydet
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
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
              <Typography variant="subtitle1">
                Adreslerim ({addresses.length})
              </Typography>
              <Button onClick={() => setIsAddressSaved(false)}>
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
                      height:"100%"
                    }}
                  >
                    <Typography component="div" fontWeight="bold">
                      {address.title}
                    </Typography>
                    <Typography component="div"
                    sx={{
                      display:'flex',
                      justifyContent:'start',
                      gap:1
                    }}>
                      <HomeIcon /> {address.address}, {address.district}, {address.city}
                    </Typography>
                    <Typography component="div"
                    sx={{
                      display:'flex',
                      justifyContent:'start',
                      gap:1
                    }}
                    >
                      <PersonIcon /> {address.firstName} {address.lastName}
                    </Typography>
                    <Typography component="div"
                    sx={{
                      display:'flex',
                      justifyContent:'start',
                      gap:1
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
                        mt:2
                      }}
                    >
                      <Button
                        variant="text"
                        onClick={() => handleDeleteAddress(index)}
                        sx={{
                          "&:hover": {
                            color: "red",
                          },
                        }}
                      >
                        <DeleteIcon />
                        Sil
                      </Button>
                      <Button>Adresi Düzenle</Button>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default Addresses;
