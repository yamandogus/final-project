import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Link} from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useSnackbar from "../../../../hooks/Alert";
import { LoginPayload } from "../../../../services/Type";
import { base_url } from "../../../../components/Bestseller/BestsellerPage";

interface LoginProps {
  setChangePassword: (value: boolean) => void;
}

const Login = ({ setChangePassword }: LoginProps) => {
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [showPassword, setShowPassword] = useState(true);

  const handleShow = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const formEl = e.target as HTMLFormElement;
      const formData = new FormData(formEl);
      const data = Object.fromEntries(
        formData.entries()
      ) as unknown as LoginPayload;
      data.api_key = "100807";

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
        const jsonResponse = (await response.json()) as {
          access_token: string;
          refresh_token: string;
        };
        localStorage.setItem("access_token", jsonResponse.access_token);
        localStorage.setItem("refresh_token", jsonResponse.refresh_token);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      showSnackbar("Kullanıcı adı veya şifre hatalı", "error");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="username"
              label="E-posta"
              name="username"
              required
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShow} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="subtitle2" sx={{ mt: 2, textAlign: "end" }}>
              <Link onClick={() => setChangePassword(true)} to="">
                Şifremi Unuttum?
              </Link>
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Button
              type="submit"
              sx={{
                backgroundColor: "black",
                textTransform: "none",
                color: "white",
                "&:hover": { backgroundColor: "black" },
              }}
            >
              GİRİŞ YAP
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <SnackbarComponent />
    </form>
  );
};

export default Login;
