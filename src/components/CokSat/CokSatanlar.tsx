import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ProductCard from './Products';

const products = [
  {
    name: 'Whey Protein',
    image: '/images/6card/pg1.jpeg',
    description: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    rating: 5,
    reviews: 10869,
    price: 549,
    discountedPrice: null
  },
  {
    name: 'Fitness Paketi',
    image: '/images/6card/pg2.jpeg',
    description: 'EN POPÜLER ÜRÜNLER BİR ARADA',
    rating: 5,
    reviews: 7650,
    price: 799,
    discountedPrice: 1126
  },
  {
    name: 'Günlük Vitamin Paketi',
    image: '/images/6card/pg3.jpeg',
    description: 'EN SIK TÜKETİLEN TAKVİYELER',
    rating: 5,
    reviews: 5013,
    price: 549,
    discountedPrice: 717
  },
  {
    name: 'Pre-Workout Supreme',
    image: '/images/6card/pg4.jpeg',
    description: 'ANTRENMAN ÖNCESİ TAKVİYESİ',
    rating: 5,
    reviews: 6738,
    price: 399,
    discountedPrice: null
  },
  {
    name: 'Cream of Rice',
    image: '/images/6card/pg5.jpeg',
    description: 'EN LEZZETLİ PİRİNÇ KREMASI',
    rating: 5,
    reviews: 5216,
    price: 239,
    discountedPrice: null
  },
  {
    name: 'Creatine',
    image: '/images/6card/pg6.jpeg',
    description: 'EN POPÜLER SPORCU TAKVİYESİ',
    rating: 5,
    reviews: 8558,
    price: 239,
    discountedPrice: null
  }
];


const CokSatanlar = () => {
  return (
    <Box>
      <Typography
        sx={{
          mt: 1,
          mb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="h5"
      >
        ÇOK SATANLAR
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {products.map((product, index)=>(
            <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            discountedPrice={product.discountedPrice}
            />
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4 }}>
          <Button variant='contained' color='primary' sx={{ px: 10, fontWeight: 'bolder' }}>TÜMÜNÜ GÖR</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default CokSatanlar;
