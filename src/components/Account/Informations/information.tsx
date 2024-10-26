import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { ChangeEvent, useState } from "react";
import { userProfileLoaderReturn } from "./MyAccount";
import { useLoaderData } from "react-router-dom";


const Informations: React.FC = () => {
  const {user} = useLoaderData() as userProfileLoaderReturn;
  const [focusPhone, setFocusPhone] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState(false);

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      setFocusPhone(true);
      setPhone(value);
      setPhoneError(false);
    }
  };

  return (
    <>
      <Typography fontWeight="bolder" variant="subtitle1">
        Hesap Bilgilerim
      </Typography>

        <Grid container mt={2} spacing={2} mb={10}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Ad" required defaultValue={user ? user.first_name :""} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Soyad" id="Soyad" required defaultValue={user ? user.last_name :""} />
          </Grid>
          <Grid item xs={12}>
            <MuiPhoneNumber      
              key="autofocus_issue_112"
              defaultCountry="tr"
              fullWidth
              variant="outlined"
              label="Telefon Numarası"
              name="phone"
              defaultValue={user ? user.phone_number : ""}
              value={phone}
              onChange={handlePhone}
              error={phoneError}
              helperText={phoneError && "Invalid phone number"}
              autoFocus={focusPhone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField type="email" label="Email" required defaultValue={user ? user.email : ""} fullWidth />
          </Grid>
          <Grid item xs={12} textAlign="end">
            <Button
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
    </>
  );
};

export default Informations;
