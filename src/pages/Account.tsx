import { useEffect, useState } from "react";
import { Box, Container, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import useSnackbar from "../hooks/alert";
import UpadatePasswordNew from "../components/Account/AuthComponents/upadatePassword ";
import Login from "../components/Account/AuthComponents/Login";
import SignUp from "../components/Account/AuthComponents/SingUp";

const Account = () => {
  const [value, setValue] = useState("1");
  const { SnackbarComponent } = useSnackbar();
  const [changePassword, setChangePassword] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("value");
    if (value) {
      setValue(value);
    }
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xs">
        {!changePassword ? (
          <>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="GİRİŞ YAP" value="1" />
                  <Tab label="ÜYE OL" value="2" />
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
                {value === "1" ? (
                  <Login setChangePassword={setChangePassword} />
                ) : (
                  <SignUp />
                )}
              </Box>
            </TabContext>
          </>
        ) : (
          <>
            <UpadatePasswordNew update={() => setChangePassword(false)} />
          </>
        )}
      </Container>

      <SnackbarComponent />
    </Box>
  );
};

export default Account;
