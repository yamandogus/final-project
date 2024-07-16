import { Box, Button, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
          <Grid item xs={6} md={3} lg={2} spacing={2}>
            <Link to="/Page2">
              <img className="responsive-image" src="/images/6card/pg1.jpeg" alt="Whey Protein" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
            </Link>
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'} className="text">
                WHEY PROTEIN
              </Typography>
              <Typography><span className='centered-span'>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</span></Typography>
              <Rating name="half-rating" defaultValue={5}  readOnly />
              <Typography>10869 Yorum</Typography>
              <Typography>
                <span style={{ fontWeight: 'bolder' }}>549 TL</span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <img className="responsive-image" src="/images/6card/pg2.jpeg" alt="Fitness Paketi" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
            <Typography fontSize={16} fontWeight={'bolder'} className="text">
              FITNESS PAKETİ
            </Typography>
            <Typography><span className="centered-span">EN POPÜLER ÜRÜNLER BİR ARADA</span></Typography>
              <Rating name="half-rating" defaultValue={5}  readOnly />
                <Typography>7650 Yorum</Typography>
                <Typography>
                  <span style={{ fontWeight: 'bolder' }}>799 TL</span>
                  <span className='spanText'>
                    1126 TL
                  </span>
                </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <img className="responsive-image" src="/images/6card/pg3.jpeg" alt="Günlük Vitamin Paketi" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
            <Typography sx={{ fontWeight: "bolder", mb: 1 }} className="text">
              GÜNLÜK VİTAMİN <br /> PAKETİ
            </Typography>
            <Typography><span className='centered-span'>EN SIK TÜKETİLEN TAKVİYELER</span></Typography>
              <Rating name="half-rating" defaultValue={5}readOnly />       
                <Typography>5013 Yorum</Typography>
                <Typography>
                  <span style={{ fontWeight: 'bolder' }}>549 TL</span>
                  <span className='spanText'>
                    717 TL
                  </span>
                </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <img className="responsive-image" src="/images/6card/pg4.jpeg" alt="Pre-Workout Supreme" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
           <Stack direction={'column'} sx={{ alignItems: 'center' }}>
           <Typography fontSize={16} fontWeight={'bolder'}>
              PRE-WORKOUT <br /> SUPREME
            </Typography>
            <Typography><span className='centered-span'>ANTRENMAN ÖNCESİ TAKVİYESİ</span></Typography>
              <Rating name="half-rating" defaultValue={5} readOnly />
                <Typography>6738 Yorum</Typography>
                <Typography>
                  <span style={{ fontWeight: 'bolder' }}>399 TL</span>
                </Typography>
           </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <img className="responsive-image" src="/images/6card/pg5.jpeg" alt="Cream of Rice" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
           <Stack direction={'column'} sx={{ alignItems: 'center' }}>
           <Typography fontSize={16} fontWeight={'bolder'}className="text">
              CREAM OF RICE
            </Typography>
              <Typography><span className='centered-span'>EN LEZZETLİ PİRİNÇ <br /> KREMASI</span></Typography>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={5} readOnly />
              <Box>
                <Typography>5216 Yorum</Typography>
                <Typography>
                  <span style={{ fontWeight: 'bolder' }}>239 TL</span>
                </Typography>
              </Box>
            </Stack>
           </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <img className="responsive-image" src="/images/6card/pg6.jpeg" alt="Creatine" style={{ maxWidth: '100%', display: 'block', margin: 'auto' }} />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
            <Typography fontSize={16} fontWeight={'bolder'} className="text">
              CREATINE
            </Typography>
            <Typography><span className='centered-span'>EN POPÜLER SPORCU TAKVİYESİ</span></Typography>         
              <Rating name="half-rating" defaultValue={5} readOnly />
                <Typography>8558 Yorum</Typography>
                <Typography>
                  <span style={{ fontWeight: 'bolder' }}>239 TL</span>
                </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4 }}>
          <Button variant='contained' color='primary' sx={{ px: 10, fontWeight: 'bolder' }}>TÜMÜNÜ GÖR</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default CokSatanlar;
