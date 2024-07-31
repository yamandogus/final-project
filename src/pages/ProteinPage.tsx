import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { ProductProps } from '../components/Bestseller/Products';
import Protein from '../components/Protein/Protein';
import { Link } from 'react-router-dom';



const productsProtein: ProductProps[] = [
  {
    name: 'WHEY PROTEIN',
    image: '/images/page3/page1.png',
    description: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    rating: 5,
    reviews: 10869,
    price: 549,
    discountedPrice: null
  },
  {
    name: 'WHEY ISOLATE',
    image: '/images/page3/page2.jpeg',
    description: '%90 PROTEİNLİ EN SAF WHEY',
    rating: 5,
    reviews: 887,
    price: 749,
    discountedPrice: null
  },
  {
    name: 'FITNESS PAKETİ',
    image: '/images/page3/page3.jpeg',
    description: 'EN POPÜLER ÜRÜNLER BİR ARADA',
    rating: 5,
    reviews: 7650,
    price: 799,
    discountedPrice: 1126
  },
  {
    name: 'PEA PROTEIN',
    image: '/images/page3/page4.jpeg',
    description: 'EN POPÜLER VEGAN PROTEİN KAYNAĞI',
    rating: 5,
    reviews: 1778,
    price: 349,
    discountedPrice: null
  },
  {
    name: 'MICELLAR CASEIN',
    image: '/images/page3/page5.jpeg',
    description: 'YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI',
    rating: 5,
    reviews: 166,
    price: 599,
    discountedPrice: null
  },
  {
    name: 'EGG WHITE POWDER',
    image: '/images/page3/page6.jpeg',
    description: 'PROTEİNİN ALTIN STANDARTI',
    rating: 5,
    reviews: 399,
    price: 899,
    discountedPrice: null
  },
  {
    name: 'MILK PROTEIN',
    image: '/images/page3/page7.jpeg',
    description: '%80 KAZEIN, %20 WHEY PROTEİNİ',
    rating: 5,
    reviews: 205,
    price: 699,
    discountedPrice: null
  },
  {
    name: 'SOYA PROTEIN',
    image: '/images/page3/page8.png',
    description: 'VEGAN PROTEİN KAYNAĞI',
    rating: 5,
    reviews: 214,
    price: 449,
    discountedPrice: null
  },
  {
    name: 'PROTEİN BAR 2\'Lİ PAKET',
    image: '/images/page3/page9.png',
    description: '%30 PROTEİN, ŞEKER İLAVESİZ',
    rating: 5,
    reviews: 166,
    price: 59,
    discountedPrice: 99
  },
  {
    name: 'MASS GAINER LANSMAN',
    image: '/images/page3/page10.png',
    description: 'YÜKSEK KALORİLİ PRATİK ÖĞÜN',
    rating: 5,
    reviews: 399,
    price: 699,
    discountedPrice: 999
  },
  {
    name: 'PROTEİN BAR',
    image: '/images/page3/page11.png',
    description: '%30 PROTEİN, ŞEKER İLAVESİZ',
    rating: 5,
    reviews: 508,
    price: 249,
    discountedPrice: 349
  },
  {
    name: 'COLLAGEN COFFEE',
    image: '/images/page3/page12.png',
    description: 'KOLAJENLİ KAHVE',
    rating: 5,
    reviews: 377,
    price: 349,
    discountedPrice: null
  }
];

const ProteinPage = () => {

  return (
    <>
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography fontSize={30} mb={2} fontWeight={'bolder'} style={{alignItems:'center'}}>PROTEİN</Typography>
        <Grid container spacing={2}>
          {productsProtein.map((product, index)=>(
            <Protein
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
        <Grid item xs={12} spacing={4} mt={3}>
           <Stack spacing={3}>
           <Typography>Toplam 15 ürün görüntüleniyor</Typography>
            <Typography variant='subtitle2'>Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. <strong>Protein</strong> kısaca, bir veya daha fazla amino asit artık</Typography>
            <Typography variant='caption'>
              <Link style={{color:'green'}} to={'#'}>Daha fazla göster</Link>
            </Typography>
           </Stack>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default ProteinPage