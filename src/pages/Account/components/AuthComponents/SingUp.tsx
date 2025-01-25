import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { RegisterPayload } from "../../../../services/Type";
import { base_url } from "../../../../components/Bestseller/BestsellerPage";
import useSnackbar from "../../../../hooks/Alert";

interface ValueProps {
  setValue: (prev: string) => void;
}

const SignUp = ({ setValue }: ValueProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [passwordError, setPasswordError] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleShow = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const fomrEl = e.target as HTMLFormElement;
    const formData = new FormData(fomrEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as RegisterPayload;

    data.password2 = data.password;
    data.api_key = "100807";
    const response = await fetch(base_url + "/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    if (response.ok) {
      showSnackbar("Kullanıcı oluşturuldu", "success");
      setTimeout(() => {
        setValue("1");
      }, 3000);
    } else {
      showSnackbar("Kullanıcı oluşturulamadı", "error");
    }
  };
  const handleCapsLock = (event: KeyboardEvent) => {
    setCapsLockOn(event.getModifierState("CapsLock"));
  };

  return (
    <form onSubmit={handleRegister}>
      <Grid container spacing={2} mt={1}>
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
            <TextField id="email" name="email" label="E-posta" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="password"
              name="password"
              label="Şifre"
              onKeyDown={(e) => handleCapsLock(e as unknown as KeyboardEvent)}
              onChange={(e) => {
                if (e.target.value.length < 8) {
                  setPasswordError("Şifre 8 karakterden az olamaz");
                } else {
                  setPasswordError("");
                }
              }}
              type={showPassword ? "password" : "text"}
              autoComplete="password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShow}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          {passwordError && (
            <Typography variant="subtitle1" color="error">
              {passwordError}.
            </Typography>
          )}
          {capsLockOn && (
            <Typography color="warning" variant="caption" sx={{ mt: 1 }}>
              Caps Lock açık!
            </Typography>
          )}
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
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="subtitle1">
                Zaten hesabınız var mı?
              </Typography>
              <Link to={""} onClick={() => setValue("1")}>
                GİRİŞ YAP
              </Link>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
      <SnackbarComponent />
    </form>
  );
};

export default SignUp;
