import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";
import Informations from "../components/Account/Informations/Informations";
import Addresses from "../components/Account/Addresses/Addresses";
import Orders from "../components/Account/Orders/Orders";


const AccountHomePage = () => {
  const [activeSation, setActiveSation] = useState('accountInfo');

  const renderContent = () =>{
    switch(activeSation){
      case 'accountInfo':
       return <Informations/>
      case 'olders':
       return <Orders/>
      case 'addresses':
       return <Addresses/>
       case 'orders':
       return <Orders/>
    }
  }

  return (
    <>
      <Box>
        <Container sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} textAlign={'center'}>
               <Typography fontWeight={'bolder'} variant='h5' textAlign={'center'}> HESABIM</Typography>
              <List className="myAccountMbLink">
                <ListItem className="accountLink" onClick={()=> setActiveSation('accountInfo') }><ContactMailIcon className="momileIcon" sx={{mr:1}}/>Hesap Bilgilerim</ListItem>
                <ListItem className="accountLink" onClick={()=> setActiveSation('olders') }><ShoppingBagIcon className="momileIcon" sx={{mr:1}}/>Siparişlerim</ListItem>
                <ListItem className="accountLink" onClick={()=> setActiveSation('addresses') }><LocationOnIcon className="momileIcon" sx={{mr:1}}/>Adreslerim</ListItem>
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
