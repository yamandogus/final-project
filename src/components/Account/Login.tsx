import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Container, FormControl, Grid, Tab, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "./LoginAndSingUp";

const Login = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xs">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Giriş Yap" value="1" />
              <Tab label="Üye Ol" value="2" />
            </TabList>
          </Box>
          <Box sx={{ padding: 1, my: 1, border: "1px solid #F3F3F3", borderRadius: 1 }}>
            <form onSubmit={handleLogin}>
            <TabPanel value="1">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField id="username" label="E-posta" name="username" required inputProps={{
                      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                      title: "Geçerli bir e-posta adresi girin."
                    }}/>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField id="password" label="Şifre" name="password" type="password" autoComplete="current-password" required />
                    <Typography variant="subtitle2" sx={{ mt: 2, textAlign: "end" }}>
                      <Link to="">Şifremi Unuttum?</Link>
                    </Typography>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Button type='submit' sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "black" } }}>
                      GİRİŞ YAP
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </TabPanel>
            </form>
           <form onSubmit={handleRegister}>
           <TabPanel value="2" sx={{ mb: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextField id="first_name" name="first_name" label="Adınız" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <TextField id="last_name" name="last_name" label="Soyadınız" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField id="email" name="email" label="E-posta" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField id="password" name="password" label="Şifre" type="password" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Button type="submit" sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "black" } }}>
                      ÜYE OL
                    </Button>
                    <Typography sx={{ mt: 2 }} variant="subtitle1">
                      Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
                    </Typography>
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

export default Login;
