import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useEffect, useState } from "react";

import Orders from "../components/Account/Orders/Orders";
import Addresses from "../components/Account/Addresses/Addresses";
import Informations from "../components/Account/Informations/Information";

const AccountHomePage = () => {
  const [activeSation, setActiveSation] = useState("accountInfo");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveSation(tab);
    }
  }, []);

  const renderContent = () => {
    switch (activeSation) {
      case "accountInfo":
        return <Informations />;
      case "olders":
        return <Orders />;
      case "addresses":
        return <Addresses />;
      default:
        return <Informations />;
    }
  };

  return (
    <>
      <Box>
        <Container sx={{ mt: 7 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} textAlign={"center"}>
              <Typography
                fontWeight={"bolder"}
                variant="h5"
                textAlign={"center"}
              >
                {" "}
                HESABIM
              </Typography>
              <List className="myAccountMbLink">
                <ListItem
                  className="accountLink"
                  onClick={() => setActiveSation("accountInfo")}
                  sx={activeSation === "accountInfo" ?{color:'#3D52D5'}:{color:'black'}}
                >
                  <ContactMailIcon className="momileIcon" sx={{mr:1}}/>
                  Hesap Bilgilerim
                </ListItem>
                <ListItem
                  className="accountLink"
                  onClick={() => setActiveSation("olders")}
                  sx={activeSation === "olders" ?{ color:'#3D52D5'}:{color:'black'}}
                >
                  <ShoppingBagIcon className="momileIcon" sx={{mr:1}}/>
                  Siparişlerim
                </ListItem>
                <ListItem
                  className="accountLink"
                  onClick={() => setActiveSation("addresses")}
                  sx={activeSation === "addresses" ?{ color:'#3D52D5'}:{color:'black'}}
                >
                  <LocationOnIcon className="momileIcon" sx={{mr:1}}/>
                  Adreslerim
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={9}>
              {renderContent()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AccountHomePage;
