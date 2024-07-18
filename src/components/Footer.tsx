import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
         <Box component={'footer'} sx={{ py: 6, backgroundColor: '#222222', color: 'white' }}>  
      <Container>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h6" gutterBottom>
          OJS <br /> NUTRITION
        </Typography>
        <Stack direction={'column'} spacing={1}>
          <Link to='/ContactUs' style={{ textDecoration: 'none', color: 'inherit' }}>İletişim</Link>
          <Link to='/AboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>Hakkımızda</Link>
          <Link to='/FAQ' style={{ textDecoration: 'none', color: 'inherit' }}>Sıkça Sorulan Sorular</Link>
          <Link to='/KVKK' style={{ textDecoration: 'none', color: 'inherit' }}>KVKK</Link>
          <Link to='/Principles' style={{ textDecoration: 'none', color: 'inherit' }}>Çalışma İlkelerimiz</Link>
          <Link to='/SalesAgreement' style={{ textDecoration: 'none', color: 'inherit' }}>Satış Sözleşmesi</Link>
          <Link to='/WarrantyReturns' style={{ textDecoration: 'none', color: 'inherit' }}>Garanti ve İade Koşulları</Link>
          <Link to='/CustomerReviews' style={{ textDecoration: 'none', color: 'inherit' }}>Gerçek Müşteri Yorumları</Link>
          <Link to='/Blog' style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" gutterBottom>
          OJS <br /> NUTRITION
        </Typography>
        <Stack direction={'column'} spacing={1}>
          <Link to='/ContactUs' style={{ textDecoration: 'none', color: 'inherit' }}>İletişim</Link>
          <Link to='/AboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>Hakkımızda</Link>
          <Link to='/FAQ' style={{ textDecoration: 'none', color: 'inherit' }}>Sıkça Sorulan Sorular</Link>
          <Link to='/KVKK' style={{ textDecoration: 'none', color: 'inherit' }}>KVKK</Link>
          <Link to='/Principles' style={{ textDecoration: 'none', color: 'inherit' }}>Çalışma İlkelerimiz</Link>
          <Link to='/SalesAgreement' style={{ textDecoration: 'none', color: 'inherit' }}>Satış Sözleşmesi</Link>
          <Link to='/WarrantyReturns' style={{ textDecoration: 'none', color: 'inherit' }}>Garanti ve İade Koşulları</Link>
          <Link to='/CustomerReviews' style={{ textDecoration: 'none', color: 'inherit' }}>Gerçek Müşteri Yorumları</Link>
          <Link to='/Blog' style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" gutterBottom>
          OJS <br /> NUTRITION
        </Typography>
        <Stack direction={'column'} spacing={1}>
          <Link to='/ContactUs' style={{ textDecoration: 'none', color: 'inherit' }}>İletişim</Link>
          <Link to='/AboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>Hakkımızda</Link>
          <Link to='/FAQ' style={{ textDecoration: 'none', color: 'inherit' }}>Sıkça Sorulan Sorular</Link>
          <Link to='/KVKK' style={{ textDecoration: 'none', color: 'inherit' }}>KVKK</Link>
          <Link to='/Principles' style={{ textDecoration: 'none', color: 'inherit' }}>Çalışma İlkelerimiz</Link>
          <Link to='/SalesAgreement' style={{ textDecoration: 'none', color: 'inherit' }}>Satış Sözleşmesi</Link>
          <Link to='/WarrantyReturns' style={{ textDecoration: 'none', color: 'inherit' }}>Garanti ve İade Koşulları</Link>
          <Link to='/CustomerReviews' style={{ textDecoration: 'none', color: 'inherit' }}>Gerçek Müşteri Yorumları</Link>
          <Link to='/Blog' style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
        </Stack>
      </Grid>
    </Grid>
      </Container>
    </Box>    
    </>
  )
}

export default Footer