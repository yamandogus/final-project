import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent,useState } from "react";
import { Link} from "react-router-dom";
import { handleRegister, LoginPayload } from "./LoginAndSingUp";
import { base_url } from "../Bestseller/Bestseller";
import useSnackbar from "../../hooks/alert";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import UpadatePasswordNew from "../updatePassword/upadatePassword ";

const Login = () => {
  const [value, setValue] = useState("1");
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [showPassword, setShowPassword] = useState(true);
  const [changePassword, setChangePassword] = useState(false);
  


  const handleShow = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault()
      const formEl = e.target as HTMLFormElement;
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
      if (!response.ok) {
        showSnackbar("Kullanıcı adı veya şifre hatalı", "error");
      } else {
        console.log(response);

        const jsonResponse = (await response.json()) as {
          access_token: string;
          refresh_token: string;
        };
        localStorage.setItem("access_token", jsonResponse.access_token);
        localStorage.setItem("refresh_token", jsonResponse.refresh_token);
        window.location.href = ("/Home")
        setTimeout(() => {
          window.location.reload(); 
        }, 300);
      }
    } catch (error) {
      console.log(error);
      showSnackbar("Kullanıcı adı veya şifre hatalı", "error");
    }
  };




  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xs">
        {!changePassword ? (
          <>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab  label="GİRİŞ YAP" value="1" />
                  <Tab  label="ÜYE OL" value="2" />
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
                <form onSubmit={handleLogin}>
                  <TabPanel value="1">
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            id="username"
                            label="E-posta"
                            name="username"
                            required
                            inputProps={{
                              pattern:
                                "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                              title: "Geçerli bir e-posta adresi girin.",
                            }}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            id="password"
                            name="password"
                            label="Şifre"
                            type={showPassword ? "password" : "text"}
                            autoComplete="password"
                            required
                            slotProps={{
                              input:{
                                sx:{
                                  textTransform:"lowercase"
                                },
                                endAdornment:(
                                  <InputAdornment position="end">
                                  <IconButton onClick={handleShow} edge="end">
                                    {showPassword ? (
                                      <VisibilityOff sx={{fontSize:17}}/>
                                    ) : (
                                      <Visibility sx={{fontSize:17}}/>
                                    )}
                                  </IconButton>
                                </InputAdornment>
                                )
                              }
                            }}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{ mt: 2, textAlign: "end" }}
                          >
                            <Link onClick={()=>setChangePassword(true)} to="">Şifremi Unuttum?</Link>
                          </Typography>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Button
                            type="submit"
                            sx={{
                              backgroundColor: "black",
                              textTransform:'none',
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
                <form onSubmit={handleRegister}>
                  <TabPanel value="2" sx={{ mb: 2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            id="first_name"
                            name="first_name"
                            label="Adınız"
                            required
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <TextField
                            id="last_name"
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
                            name="email"
                            label="E-posta"
                            required
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            id="password"
                            name="password"
                            label="Şifre"
                            type={showPassword ? "password" : "text"}
                            autoComplete="password"
                            required
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton onClick={handleShow} edge="end">
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              },
                            }}
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
                          <Typography sx={{ mt: 2 }} variant="subtitle1">
                            Zaten hesabınız var mı?{" "}
                            <Link to="/login">GİRİŞ YAP</Link>
                          </Typography>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </TabPanel>
                </form>
              </Box>
            </TabContext>
          </>
        ) : (
          <>
            <UpadatePasswordNew
            update={()=>setChangePassword(false)}
            />
          </>
        )}
      </Container>
      <SnackbarComponent />
    </Box>
  );
};

export default Login;
