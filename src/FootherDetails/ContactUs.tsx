import { Box, Button, Container, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth='sm' sx={{ my: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 3, textAlign:'center', }}>
            Bize Ulaşın
          </Typography>
          <Typography variant="subtitle2">Bize aşağıdaki iletişim yollarıyla ulaşabilirsiniz.</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField id="filled-basic" label="Adınız" variant="filled" size="small" required />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField id="filled-basic" label="Soyadınız" variant="filled" size="small" required/>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField id="filled-basic" label="E-posta" variant="filled" size="small" required />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="filled-multiline-static"
              label="Mesajınız"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              sx={{ mt: 2 }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sx={{mb:3}}>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" sx={{ mt: 2, backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }}>
              Gönder
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{textAlign:'center'}} spacing={3}>
            <Typography variant='subtitle2'>Aynı gün kargo hafta içi 16:00, Cumartesi ise <strong>11:00</strong>' a kadar verilen siparişler icin geçerlidir. Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.</Typography>
            <Typography variant='subtitle2'>Telefon ile <strong>0850 303 29 89</strong> numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz . Sesli mesajlarınıza hafta içi saat <strong>09:00-17:00</strong> arasında dönüş sağlanmaktadır.</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
