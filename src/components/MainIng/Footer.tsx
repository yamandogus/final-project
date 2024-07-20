import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from "react-router-dom";

interface Link{
  to:string,
  label:string
}

const contactLinks: Link[] = [
  { to: '/ContactUs', label: 'İletişim' },
  { to: '/AboutUs', label: 'Hakkımızda' },
  { to: '/SSS', label: 'Sıkça Sorulan Sorular' },
  { to: '/KVKK', label: 'KVKK' },
  { to: '/Principles', label: 'Çalışma İlkelerimiz' },
  { to: '/SalesAgreement', label: 'Satış Sözleşmesi' },
  { to: '/WarrantyReturns', label: 'Garanti ve İade Koşulları' },
  { to: '/CustomerReviews', label: 'Gerçek Müşteri Yorumları' },
  { to: '/Blog', label: 'Blog' },
];

const popularProductsLinks: Link[] = [
  { to: '/Protein', label: 'Protein' },
  { to: '/SportsNutrition', label: 'Spor Gıdaları' },
  { to: '/Health', label: 'Sağlık' },
  { to: '/Food', label: 'Gıda' },
  { to: '/Vitamins', label: 'Vitamin' },
  { to: '/Accessories', label: 'Aksesuar' },
  { to: '/AllProducts', label: 'Tüm Ürünler' },
  { to: '/Packages', label: 'Paketler' },
  { to: '/LaunchOffers', label: 'Lansmana Özel Fırsatlar' },
];

const categoriesLinks: Link[] = [
  { to: '/WheyProtein', label: 'Whey Protein' },
  { to: '/CreamOfRice', label: 'Cream of Rice' },
  { to: '/Creatine', label: 'Creatine' },
  { to: '/BCAA', label: 'BCAA+' },
  { to: '/PreWorkout', label: 'Pre-Workout' },
  { to: '/FitnessPackage', label: 'Fitness Paketi' },
  { to: '/Collagen', label: 'Collagen' },
  { to: '/DailyVitaminPackage', label: 'Günlük Vitamin Paketi' },
  { to: '/ZMA', label: 'ZMA' },
];

const Footer:React.FC = () => {

  const renderLink = (Links:Link[]): JSX.Element=>{
    return <Stack direction={'column'} spacing={1}>
      {Links.map((link) => (
        <Link key={link.to} to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant='subtitle2'>{link.label}</Typography>
        </Link>
      ))}
    </Stack>;
  }
  return (
    <>
         <Box component={'footer'} sx={{ py: 6, backgroundColor: '#222222', color: 'white' }}>  
      <Container>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4} >
        <Typography variant="h6" gutterBottom sx={{fontWeight:'bolder'}}>
          OJS <br /> NUTRITION
        </Typography>
        {renderLink(contactLinks)}
      </Grid>
      <Grid item xs={12} sm={4} >
        <Typography variant="h6" gutterBottom sx={{fontWeight:'bolder'}}>
        Popüler Ürünler
        </Typography>
        {renderLink(popularProductsLinks)}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" gutterBottom sx={{fontWeight:'bolder'}}>
        Kategoriler
        </Typography>
        {renderLink(categoriesLinks)}
      </Grid>
    </Grid>
      </Container>
    </Box>    
    </>
  )
}

export default Footer