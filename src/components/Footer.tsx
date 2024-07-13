import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
         <Box component={'footer'} sx={{ py: 6, backgroundColor: '#222222', color: 'white' }}>  
      <Container>
      <Grid container spacing={15}>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            OJS <br /> NUTRITION
          </Typography>
          <Stack direction={'column'} spacing={1}>
            <Link href="#" color="inherit" underline="none">İletişim</Link>
            <Link href="#" color="inherit" underline="none">Hakkımızda</Link>
            <Link href="#" color="inherit" underline="none">Sıkça Sorulan Sorular</Link>
            <Link href="#" color="inherit" underline="none">KVKK</Link>
            <Link href="#" color="inherit" underline="none">Çalışma İlkelerimiz</Link>
            <Link href="#" color="inherit" underline="none">Satış Sözleşmesi</Link>
            <Link href="#" color="inherit" underline="none">Garanti ve İade Koşulları</Link>
            <Link href="#" color="inherit" underline="none">Gerçek Müşteri Yorumları</Link>
            <Link href="#" color="inherit" underline="none">Blog</Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            OJS <br /> NUTRITION
          </Typography>
          <Stack direction={'column'} spacing={1}>
            <Link href="#" color="inherit" underline="none">İletişim</Link>
            <Link href="#" color="inherit" underline="none">Hakkımızda</Link>
            <Link href="#" color="inherit" underline="none">Sıkça Sorulan Sorular</Link>
            <Link href="#" color="inherit" underline="none">KVKK</Link>
            <Link href="#" color="inherit" underline="none">Çalışma İlkelerimiz</Link>
            <Link href="#" color="inherit" underline="none">Satış Sözleşmesi</Link>
            <Link href="#" color="inherit" underline="none">Garanti ve İade Koşulları</Link>
            <Link href="#" color="inherit" underline="none">Gerçek Müşteri Yorumları</Link>
            <Link href="#" color="inherit" underline="none">Blog</Link>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            OJS <br /> NUTRITION
          </Typography>
          <Stack direction={'column'} spacing={1}>
            <Link href="#" color="inherit" underline="none">İletişim</Link>
            <Link href="#" color="inherit" underline="none">Hakkımızda</Link>
            <Link href="#" color="inherit" underline="none">Sıkça Sorulan Sorular</Link>
            <Link href="#" color="inherit" underline="none">KVKK</Link>
            <Link href="#" color="inherit" underline="none">Çalışma İlkelerimiz</Link>
            <Link href="#" color="inherit" underline="none">Satış Sözleşmesi</Link>
            <Link href="#" color="inherit" underline="none">Garanti ve İade Koşulları</Link>
            <Link href="#" color="inherit" underline="none">Gerçek Müşteri Yorumları</Link>
            <Link href="#" color="inherit" underline="none">Blog</Link>
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Box>    
    </>
  )
}

export default Footer