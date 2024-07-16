import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const MyAccount = () => {
  return (
   <>
    <Box>
        <Container sx={{mt:10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} >
                    <Typography 
                    sx={{
                        fontSize:25,
                        fontWeight:'bolder',
                        marginBottom:4
                    }}>HESABIM</Typography>
                    <Stack direction={'column'} spacing={3} sx={{textAlign:'left'}}>
                       <Typography className="hesapLink"><ContactMailIcon sx={{mr:1, fontSize:30}}/>  Hesap Bilgilerim</Typography> 
                       <Typography className="hesapLink"><ShoppingBagIcon sx={{mr:1, fontSize:30}}/> Siparişlerim</Typography> 
                       <Typography className="hesapLink"><LocationOnIcon sx={{mr:1,fontSize:30}}/> Adreslerim</Typography> 
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6

                } >
                  <Typography sx={{pb:3}} variant="h4">Sipariş Teslim Edildi</Typography>  
                  <Typography sx={{borderBottom:"1px solid black",pb:3,mb:3}} variant='subtitle2'>14 Aralık 2022 Tarihinde Sipariş Verildi - 290405 numaralı sipariş</Typography>
                  <Grid xs={12}>
                    <Stack className="textBottom" direction={'row'} spacing={3} >
                        <img className="accountImg" src="/images/6card/pg3.jpeg" alt="" />
                        <Stack>
                        <Typography variant='subtitle2'>MELATONIN X 2</Typography> 
                        <Typography variant='subtitle2'>62 TL</Typography>
                        <Typography variant='subtitle2'>Boyut: 1 KUTU</Typography>
                        </Stack>  
                    </Stack>
                    <Stack className="textBottom" direction={'row'} spacing={3}>
                        <img className="accountImg" src="/images/6card/pg3.jpeg" alt="" />
                        <Stack>
                        <Typography variant='subtitle2'>MELATONIN X 2</Typography> 
                        <Typography variant='subtitle2'>62 TL</Typography>
                        <Typography variant='subtitle2'>Boyut: 1 KUTU</Typography>
                        </Stack>  
                    </Stack>
                    <Stack  className="textBottom"direction={'row'} spacing={3}>
                        <img className="accountImg" src="/images/6card/pg3.jpeg" alt="" />
                        <Stack>
                        <Typography variant='subtitle2'>MELATONIN X 2</Typography> 
                        <Typography variant='subtitle2'>62 TL</Typography>
                        <Typography variant='subtitle2'>Boyut: 1 KUTU</Typography>
                        </Stack>  
                    </Stack>
                    <Stack className="textBottom" direction={'row'} spacing={3}>
                        <img className="accountImg" src="/images/6card/pg3.jpeg" alt="" />
                        <Stack>
                        <Typography variant='subtitle2'>MELATONIN X 2</Typography> 
                        <Typography variant='subtitle2'>62 TL</Typography>
                        <Typography variant='subtitle2'>Boyut: 1 KUTU</Typography>
                        </Stack>  
                    </Stack>
                  </Grid>

                </Grid>
                <Grid item xs={12} md={3} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, totam!
                </Grid>
            </Grid>
        </Container>
    </Box>
   </>
  );
};

export default MyAccount;
