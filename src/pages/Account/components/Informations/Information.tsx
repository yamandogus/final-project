import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { userProfileLoaderReturn } from "./MyAccount";
import { upadeteAccount } from "../../../../services/UpdateAccount";
import UpadatePasswordNew from "../AuthComponents/UpadatePassword ";

const Informations: React.FC = () => {
  const { user } = useLoaderData() as userProfileLoaderReturn;
  const [focusPhone, setFocusPhone] = useState(false);
  const [phone, setPhone] = useState<string>(user?.phone_number || "");
  const [phoneError, setPhoneError] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState(user);

  const handlePhone = (
    value: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (typeof value === "string") {
      const cleanValue = value.replace(/\s+/g, "");
      setFocusPhone(true);
      setPhone(cleanValue);
      setPhoneError(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!change) {
      setChange(true);
    } else {
      const cleanPhone = phone.replace(/\D/g, "").replace(/^90|^0/, "");
      const phone_number = `+90${cleanPhone}`;
      if (phone_number.length !== 13) {
        setPhoneError(true);
        return;
      }
      const updateUser = await upadeteAccount(e, phone_number);
      setUserData(updateUser);
      setChange(false);
    }
  };

  return (
    <>
      {!changePassword ? (
        <>
          <Typography fontWeight="bolder" variant="subtitle1">
            Hesap Bilgilerim
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container mt={2} spacing={2} mb={10}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="first_name"
                  name="first_name"
                  disabled={!change ? true : false}
                  label="Ad"
                  defaultValue={userData ? userData.first_name : ""}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Soyad"
                  id="last_name"
                  name="last_name"
                  disabled={!change ? true : false}
                  required
                  defaultValue={userData ? userData.last_name : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  key="autofocus_issue_112"
                  defaultCountry="tr"
                  fullWidth
                  variant="outlined"
                  label="Telefon Numarası"
                  id="phone_number"
                  disabled={!change ? true : false}
                  name="phone"
                  value={phone}
                  onChange={handlePhone}
                  error={phoneError}
                  helperText={phoneError && "Invalid phone number"}
                  autoFocus={focusPhone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  label="E-posta"
                  disabled={!change ? true : false}
                  required
                  defaultValue={userData ? userData.email : ""}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setChangePassword(true)}
                >
                  Şifre yenile
                </Typography>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    py: 1,
                    backgroundColor: "black",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  {!change ? "GÜNCELLE" : "KAYDET"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      ) : (
        <Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              onClick={() => setChangePassword(false)}
            >
              Geri
            </Button>
          </Box>
          <UpadatePasswordNew update={() => setChangePassword(false)} />
        </Box>
      )}
    </>
  );
};

export default Informations;
