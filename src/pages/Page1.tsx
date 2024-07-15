import { Box, Button, Card, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from "react-router-dom";
import CokSatanlar from "../components/CokSatanlar";
const Page1 = () => {
  return (
    <>
      <Box>
        <img style={{maxWidth:"100%", height:"auto"}} src="/images/sec-urunler/img/pageImg1.jpeg" alt="" />
      </Box>
      <Box>
      <Container sx={{ boxShadow: 'none', border: 'none', p: 2, pt: 5 }}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/urun1.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder' }}>
              PROTEİN
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
              <Link to={"/Page3"} style={{textDecoration:'none', color:'white'}}>
              İNCELE              
              </Link>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/urun2.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder'  }}>
              VİTA - <br /> MİNLER
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
              İNCELE
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/urun3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder'  }}>
              SAĞLIK
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 }}>
              İNCELE
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/urun4.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder' }}>
              SPOR <br /> GIDALARI
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 , fontWeight:'bolder' }}>
              İNCELE
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/urun5.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder' }}>
              GIDA
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8 , fontWeight:'bolder' }}>
              İNCELE
            </Button>
          </Card>
        </Grid>
          <Grid item xs={12} sm={4}>
          <Card sx={{
            backgroundImage: 'url(/images/sec-urunler/img/katmanpng.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            position: 'relative'
          }}>
            <img style={{marginTop:25, marginLeft:10}} width={200} src="/images/sec-urunler/img/aminopng.png" alt="" />
            <Typography className="head" variant="h6" sx={{ position: 'absolute', top: 20, right: 8, fontWeight:'bolder'  }}>
              TÜM <br /> ÜRÜNLER
            </Typography>
            <Button variant='contained' sx={{ position: 'absolute', bottom: 8, right: 8}}>
              İNCELE
            </Button>
          </Card>
        </Grid>
        </Grid>
      </Container>
      </Box>
        <CokSatanlar/>
      <Box sx={{mt:3}}>
        <img width="100%" src="/images/6card/box3.png" alt="" />
      </Box>
      <Box sx={{mt:3}} className="pic2Border">
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <Typography>GERÇEK MÜŞTERİ YORUMLARI</Typography>
          </Grid>
          <Grid item xs={6}>
          <Stack direction='row'>
          <Rating sx={{ml:10}} name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography sx={{ml:2}}>198453 Yorum  <KeyboardArrowLeftIcon/><ChevronRightIcon/>  </Typography>
          </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
      <Container sx={{my:5}}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
            <span>03/05/24</span>
            <h4>Beğendim gayet güzeldi</h4>
            <p>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
          </Grid>
          <Grid item xs={3}>
            <span>03/05/24</span>
            <h4>Beğendim gayet güzeldi</h4>
            <p>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
          </Grid>
          <Grid item xs={3}>
            <span>03/05/24</span>
            <h4>Beğendim gayet güzeldi</h4>
            <p>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
          </Grid>
          <Grid item xs={3}>
            <span>03/05/24</span>
            <h4>Beğendim gayet güzeldi</h4>
            <p>Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.</p>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box sx={{backgroundColor:"#222222", color:"white", paddingY:6}}>
      <Container>
      <Grid container spacing={2}> 
          <Grid item xs={6}>
          <Stack direction={'row'} sx={{mb:2}}>
          <Rating sx={{ml:10}} name="half-rating" defaultValue={2.5} precision={0.5}/>
          <Typography>(140.000+)</Typography>
          </Stack>
          <Stack>
            <Typography variant='h5'>LABORATUVAR TESTLİ ÜRÜNLER <br /> AYNI GÜN & ÜCRETSİZ KARGO <br /> MEMNUNİYET GARANTİSİ</Typography>
          </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{mt:5}}>
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
