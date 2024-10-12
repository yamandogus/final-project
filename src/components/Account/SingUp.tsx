import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState} from "react";
import { Link } from "react-router-dom";
import { handleRegister, LoginPayload } from "./LoginAndSingUp";
import { base_url } from "../Bestseller/BestSellers";

export const handleLogin = async (e: FormEvent) => {
  try {
   e.preventDefault();
   const formEl = e.target as HTMLFormElement
   const formData = new FormData(formEl);
   const data = Object.fromEntries(
     formData.entries()
   ) as unknown as LoginPayload;
   data.api_key = "100807";

   console.log(data);

   const response = await fetch(base_url + "/auth/login", {
     method: "POST",
     body: JSON.stringify(data),
     headers: {
       "Content-Type": "application/json",
     },
   });
   console.log(response);  

   const jsonResponse = await response.json() as 
   {
     access_token: string,
     refresh_token: string,
   }

   localStorage.setItem("access_token", jsonResponse.access_token)
   localStorage.setItem("refresh_token", jsonResponse.refresh_token)
   console.log(jsonResponse);
  } catch (error) {
   console.log(error);
   alert("Kullanıcı adı veya şifre hatalı")
  }
 };


const SignUp = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xs">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Üye Ol" value="1" />
              <Tab label="Giriş Yap" value="2" />
            </TabList>
          </Box>
          <Box
            sx={{
              padding: 1,
              my: 1,
              border: "1px solid #F3F3F3",
              borderRadius: 1,
            }}
          >
            <form onSubmit={handleRegister}>
              <TabPanel value="1">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="first-name"
                        name="first_name"
                        label="Adınız"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="last-name"
                        name="last_name"
                        label="Soyadınız"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="email"
                        type="email"
                        name="email"
                        label="E-posta"
                        required
                        inputProps={{
                          pattern:
                            "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                          title: "Geçerli bir e-posta adresi girin.",
                        }}
                        autoComplete="email"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="password"
                        name="password"
                        label="Şifre"
                        type="password"
                        autoComplete="current-password"
                        required
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": { backgroundColor: "black" },
                        }}
                      >
                        ÜYE OL
                      </Button>
                      <Typography variant="subtitle1" sx={{ mt: 2 }}>
                        Zaten hesabınız var mı?{" "}
                        <Link to="/login">Giriş Yap</Link>
                      </Typography>
                    </FormControl>
                  </Grid>
                </Grid>
              </TabPanel>
            </form>
            <form onSubmit={handleLogin}>
              <TabPanel value="2">
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="username"
                        name='username'
                        label="E-posta"
                        required
                        inputProps={{
                          pattern:
                            "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                          title: "Geçerli bir e-posta adresi girin.",
                        }}
                        autoComplete="email"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        name="password"
                        id="password"
                        label="Şifre"
                        type="password"
                        autoComplete="current-password"
                        required
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 2, textAlign: "end" }}
                      >
                        <Link to="">Şifremi Unuttum?</Link>
                      </Typography>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Button
                        type='submit'
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          "&:hover": { backgroundColor: "black" },
                        }}
                      >
                        GİRİŞ YAP
                      </Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </TabPanel>
            </form>
          </Box>
        </TabContext>
      </Container>
    </Box>
  );
};

export default SignUp;
