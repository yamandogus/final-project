import { Box, Button, Card, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from "react-router-dom";
import CokSatanlar from "../components/CokSatanlar";

const Page1 = () => {
  return (
    <>
      <Box>
        <img style={{ maxWidth: "100%", height: "auto" }} src="/images/sec-urunler/img/pageImg1.jpeg" alt="" />
      </Box>
      <Container sx={{ boxShadow: 'none', border: 'none', p: 2, pt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <img src="/images/sec-urunler/img/urun1.jpeg" alt="Protein" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                PROTEİN
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                <Link to={"/Page3"} style={{ textDecoration: 'none', color: 'white' }}>
                  İNCELE
                </Link>
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <img src="/images/sec-urunler/img/urun2.jpeg" alt="Vitaminler" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                VİTA - MİNLER
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                İNCELE
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <img src="/images/sec-urunler/img/urun3.jpeg" alt="Sağlık" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                SAĞLIK
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                İNCELE
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <img src="/images/sec-urunler/img/urun4.jpeg" alt="Spor Gıdaları" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                SPOR GIDALARI
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                İNCELE
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <img src="/images/sec-urunler/img/urun5.jpeg" alt="Gıda" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                GIDA
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                İNCELE
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', position: 'relative',backgroundImage: 'URL("/images/sec-urunler/img/katmanpng.png")'}}>
              <img src="/images/sec-urunler/img/aminopng.png" alt="Tüm Ürünler" style={{ width: '70%', height: 200, objectFit: 'cover' }} />
              <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                TÜM ÜRÜNLER
              </Typography>
              <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8, backgroundColor:'black' }}>
                İNCELE
              </Button>
            </Card>
          </Grid>
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

export default Page1;

