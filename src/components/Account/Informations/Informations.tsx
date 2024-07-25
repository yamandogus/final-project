import { Button, Grid, TextField, Typography } from '@mui/material';


const Informations = () => {
  return (
    <>
      <Typography fontWeight='bolder' variant='subtitle1'>
        Hesap Bilgilerim
      </Typography>
      <Grid container mt={2} spacing={2} mb={10}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Ad"
            required
            defaultValue='Doğuş'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Soyad"
            required
            defaultValue='Yaman'
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            fullWidth
            label="Telefon"
            required
            placeholder="+90 (555) 555-5555"
            inputProps={{
              pattern: "\\+\\d{1,3} \\(\\d{3}\\) \\d{3}-\\d{4}", 
              title: "Telefon numarası formatı: +90 (555) 555-5555"
            }}
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
            type='email'
            label="Email"
            required
            fullWidth
            />
        </Grid>
        <Grid item xs={12} textAlign='end'>
            <Button
            variant='contained'
            sx={{
                py:1,
                backgroundColor:'black',
                '&:hover':{backgroundColor:'black'}
            }}
            >Kaydet</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Informations;

