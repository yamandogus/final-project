import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";
import Informations from "./Informations/Informations";
import Addresses from "./Addresses/Addresses";
import Orders from "./Orders/Orders";


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
    }
  }

  return (
    <>
      <Box>
        <Container sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} textAlign={'center'}>
               <Typography fontWeight={'bolder'} variant='h5' textAlign={'center'}> HESABIM</Typography>
              <List>
                <ListItem onClick={()=> setActiveSation('accountInfo') }><ContactMailIcon sx={{mr:1}}/>Hesap Bilgilerim</ListItem>
                <ListItem onClick={()=> setActiveSation('olders') }><ShoppingBagIcon sx={{mr:1}}/>Siparişlerim</ListItem>
                <ListItem onClick={()=> setActiveSation('addresses') }><LocationOnIcon sx={{mr:1}}/>Adreslerim</ListItem>
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