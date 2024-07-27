import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Container, FormControl, Grid, Tab, TextField, Typography} from '@mui/material'
import React from 'react'

const Login = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{mt:5}}>
        <Container maxWidth="xs">
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList sx={{px:4}} onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Giriş Yap" value="1" sx={{ml:5,mr:6}}/>
            <Tab label="Üye Ol" value="2" />
          </TabList>
        </Box>
        <Box sx={{padding:1, my:1, border:'1px solid #F3F3F3', borderRadius:1}}>
        <TabPanel value="1">
        <Grid container spacing={1}>
        <Grid item xs={12} sx={{my:2}}>
          <FormControl fullWidth>
            <TextField id="email" label="E-posta" variant='outlined' size="medium" required />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField id="password" label="Şifre" variant='outlined' size="medium" required />
          </FormControl>
          <Typography variant='subtitle2' sx={{mt:2,textAlign:'end'}}><a href="">Şifremi Unuttum?</a></Typography>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
          <FormControl fullWidth>
           <Button sx={{backgroundColor:'black',py:1, color:'white',
           '&:hover':{backgroundColor:'black',py:1, color:'white'}
           }}>GİRİŞ YAP</Button>
          
          </FormControl>
        </Grid>
          </Grid>
        </TabPanel>
           <TabPanel value="2" sx={{mb:2}}>
             <Grid container spacing={1}>
           <Grid item xs={12} md={6}>
             <FormControl fullWidth>
               <TextField id="first-name" label="Adınız" variant='outlined' size="medium" required />
             </FormControl>
           </Grid>
   
           <Grid item xs={12} md={6}>
             <FormControl fullWidth>
               <TextField id="last-name" label="Soyadınız" variant='outlined' size="medium" required/>
             </FormControl>
           </Grid>
   
           <Grid item xs={12} sx={{my:2}}>
             <FormControl fullWidth>
               <TextField id="email" label="E-posta" variant='outlined' size="medium" required />
             </FormControl>
           </Grid>
           <Grid item xs={12}>
             <FormControl fullWidth>
               <TextField id="password" label="Şifre" variant='outlined' size="medium" required />
             </FormControl>
           </Grid>
           <Grid item xs={12} sx={{mt:2}}>
             <FormControl fullWidth>
              <Button sx={{backgroundColor:'black',py:1, color:'white',
              '&:hover':{backgroundColor:'black',py:1, color:'white'}
              }} >ÜYE OL</Button>
               <Typography sx={{mt:2}} variant='subtitle1'>Zaten hesabınız var mı? <a href="">Giriş Yap</a></Typography>
             </FormControl>
           </Grid>
             </Grid>
           </TabPanel>
        </Box>
      </TabContext>
        </Container>
      </Box>
    </>
  )
}

export default Login