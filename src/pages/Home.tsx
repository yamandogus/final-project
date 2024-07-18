import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CokSatanlar from "../components/CokSat/CokSatanlar";
import HomeComp from "../components/HomePage/HomeComp";
const products = [
  {
    name: 'PROTEİN',
    image: '/images/sec-urunler/img/urun1.jpeg',
    description: 'Protein ürünleri',
    review: 'İNCELE',
    link: '/Page3'
  },
  {
    name: 'VİTA - MİNLER',
    image: '/images/sec-urunler/img/urun2.jpeg',
    description: 'Vitamin ürünleri',
    review: 'İNCELE',
    link: '/Page3'
  },
  {
    name: 'SAĞLIK',
    image: '/images/sec-urunler/img/urun3.jpeg',
    description: 'Sağlık ürünleri',
    review: 'İNCELE',
    link: '/Page3'
  },
  {
    name: 'SPOR GIDALARI',
    image: '/images/sec-urunler/img/urun4.jpeg',
    description: 'Spor gıdaları',
    review: 'İNCELE',
    link: '/Page3'
  },
  {
    name: 'GIDA',
    image: '/images/sec-urunler/img/urun5.jpeg',
    description: 'Gıda ürünleri',
    review: 'İNCELE',
    link: '/Page3'
  },
  {
    name: 'TÜM ÜRÜNLER',
    image: '/images/6card/news.png',
    description: 'Tüm ürünler',
    review: 'İNCELE',
    link: '/Page3'
  }
];


const Home = () => {
  return (
    <>
      <Box>
        <img style={{ maxWidth: "100%", height: "auto" }} src="/images/sec-urunler/img/pageImg1.jpeg" alt="" />
      </Box>
      <Container sx={{ boxShadow: 'none', border: 'none', p: 2, pt: 5 }}>
        <Grid container spacing={3}>
        {products.map((product, index)=>(
          <HomeComp
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            review={product.review}
            link={product.link}
          />
        ))}
        </Grid>
      </Container>
      <CokSatanlar />
      <Box sx={{ mt: 3 }}>
        <img width="100%" src="/images/6card/box3.png" alt="" />
      </Box>
      <Box sx={{ mt: 3 }} className="pic2Border">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>GERÇEK MÜŞTERİ YORUMLARI</Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction='row'>
              <Rating sx={{ ml: 10 }} name="half-rating" defaultValue={5} readOnly/>
              <Typography sx={{ ml: 2 }}>198453 Yorum  <KeyboardArrowLeftIcon /><ChevronRightIcon />  </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Container sx={{ my: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='subtitle2'>03/05/24</Typography>
              <Typography variant="h6">Beğendim gayet güzeldi</Typography>
              <Typography>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='subtitle2'>03/05/24</Typography>
              <Typography variant="h6">Beğendim gayet güzeldi</Typography>
              <Typography>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='subtitle2'>03/05/24</Typography>
              <Typography variant="h6">Beğendim gayet güzeldi</Typography>
              <Typography>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='subtitle2'>03/05/24</Typography>
              <Typography variant="h6">Beğendim gayet güzeldi</Typography>
              <Typography>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#222222", color: "white", py: 6 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Stack direction={'row'} sx={{ mb: 2 }}>
                <Rating sx={{ ml: 10 }} name="half-rating" defaultValue={5} readOnly />
                <Typography>(140.000+)</Typography>
              </Stack>
              <Typography variant='h5'>LABORATUVAR TESTLİ ÜRÜNLER <br /> AYNI GÜN & ÜCRETSİZ KARGO <br /> MEMNUNİYET GARANTİSİ</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mt: 5 }}>
                200.000'den fazla ürün yorumumuza dayanarak,
                ürünlerimizi seveceğinize eminiz. Eğer herhangi
                bir sebeple memnun kalmazsan, bizimle iletişime
                geçtiğinde çözüme kavuşturacağız.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;

