import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import useSnackbar from "../../../../hooks/Alert";
import { base_url } from "../../../../components/Bestseller/BestsellerPage";

const style = {
  display: "flex",
  justifyContent: "center",
};

interface PasswordUpdate {
  old_password: string;
  password: string;
  password2: string;
}

const UpadatePasswordNew = ({ update }: { update: () => void }) => {
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [textError, setTextError] = useState("");

  const handleShowOldPassword = () => setShowOldPassword((prev) => !prev);
  const handleShowNewPassword = () => setShowNewPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const hadlePasswordUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as PasswordUpdate;
    console.log(data);
    const passwordData = {
      old_password: data.old_password,
      password: data.password,
      password2: data.password2,
    };
    if (passwordData.password !== passwordData.password2) {
      showSnackbar("Yeni şifreler eşleşmiyor", "error");
      setTextError("Yeni şifreler eşleşmiyor");
      return;
    } else {
      setTextError("");
    }
    try {
      const response = await fetch(base_url + "/users/change-password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const jsonResponse = await response.json();
      if (response.ok) {
        showSnackbar("Şifre değiştirildi.", "success");
        setTimeout(() => {
          update();
        }, 3000);
      } else {
        showSnackbar("Şifre değiştirme başarısız", "error");
      }
      console.log(jsonResponse);
    } catch (error) {
      console.log("Şifre yenileme hatası:" + error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    hadlePasswordUpdate(e);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginBottom: "10rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={style}>
            <TextField
              size="small"
              id="old_password"
              name="old_password"
              label="Eski şifre"
              type={showOldPassword ? "password" : "text"}
              autoComplete="old_password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowOldPassword} edge="end">
                      {showOldPassword ? (
                        <VisibilityOff sx={{ fontSize: 17 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 17 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={style}>
            <TextField
              size="small"
              id="password"
              name="password"
              label="Yeni Şifre"
              type={showNewPassword ? "password" : "text"}
              autoComplete="password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowNewPassword} edge="end">
                      {showNewPassword ? (
                        <VisibilityOff sx={{ fontSize: 17 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 17 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={style}>
            <TextField
              size="small"
              id="password2"
              name="password2"
              label="Yeni şifre tekrar"
              type={showConfirmPassword ? "password" : "text"}
              autoComplete="password2"
              error={!!textError}
              helperText={textError || " "}
              onChange={(e) => {
                if (e.target.value === "") {
                  setTextError("");
                } else if (textError) {
                  setTextError("");
                }
              }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirmPassword} edge="end">
                      {showConfirmPassword ? (
                        <VisibilityOff sx={{ fontSize: 17 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 17 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
              }}
              type="submit"
            >
              Güncelle
            </Button>
          </Grid>
          <Grid item xs={12}
           sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
          >
          <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
              }}
              href="/"
            >
              Ana Sayfa
            </Button>
          </Grid>
        </Grid>
        <SnackbarComponent />
      </form>
    </Box>
  );
};

export default UpadatePasswordNew;
