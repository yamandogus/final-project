import { Box, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const Page3 = () => {

  return (
    <>
    <Box sx={{ my: 5 }}>
      <Container>
        <Typography fontSize={30} mb={2} fontWeight={'bolder'} style={{alignItems:'center'}}>PROTEİN</Typography>
        <Grid container spacing={2}>
        <Grid item xs={6} md={3} spacing={2}>
            <img className="responsive-image" src="/images/page3/page1.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>WHEY PROTEIN</Typography>
              <Typography><span className="centered-span">EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>10869 Yorum</Typography>
              <Typography fontSize={25}><span>549 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page2.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>WHEY ISOLATE</Typography>
              <Typography><span className="centered-span">%90 PROTEİNLİ EN SAF WHEY</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>887 Yorum</Typography>
              <Typography fontSize={25}><span>749 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page3.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>FITNESS PAKETİ</Typography>
              <Typography><span className="centered-span">EN POPÜLER ÜRÜNLER BİR ARADA</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>7650 Yorum</Typography>
              <Typography fontSize={25}><span>799 TL</span><span className='spanText'>1126 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page4.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>FITNESS PAKETİ</Typography>
              <Typography><span className="centered-span">EN POPÜLER ÜRÜNLER BİR ARADA</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>1778 Yorum</Typography>
              <Typography fontSize={25}><span>349 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page5.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>MICELLAR CASEIN</Typography>
              <Typography><span className="centered-span">YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>166 Yorum</Typography>
              <Typography fontSize={25}><span>599 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page6.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>EGG WHITE POWDER</Typography>
              <Typography><span className="centered-span">PROTEİNİN ALTIN STANDARTI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>399 Yorum</Typography>
              <Typography fontSize={25}><span>899 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page7.jpeg" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>MILK PROTEIN</Typography>
              <Typography><span className="centered-span">%80 KAZEIN, %20 WHEY PROTEİNİ</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>205 Yorum</Typography>
              <Typography fontSize={25}><span>699 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page8.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>SOYA PROTEIN</Typography>
              <Typography><span className="centered-span">VEGAN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>214 Yorum</Typography>
              <Typography fontSize={25}><span>449 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page9.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>SOYA PROTEIN</Typography>
              <Typography><span className="centered-span">VEGAN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>214 Yorum</Typography>
              <Typography fontSize={25}><span>449 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page10.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>SOYA PROTEIN</Typography>
              <Typography><span className="centered-span">VEGAN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>214 Yorum</Typography>
              <Typography fontSize={25}><span>449 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page11.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>SOYA PROTEIN</Typography>
              <Typography><span className="centered-span">VEGAN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>214 Yorum</Typography>
              <Typography fontSize={25}><span>449 TL</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <img className="responsive-image" src="/images/page3/page12.png" alt="" />
            <Stack direction={'column'} sx={{ alignItems: 'center' }}>
              <Typography fontSize={16} fontWeight={'bolder'}>SOYA PROTEIN</Typography>
              <Typography><span className="centered-span">VEGAN PROTEİN KAYNAĞI</span></Typography>
              <Rating defaultValue={5} readOnly />
              <Typography>214 Yorum</Typography>
              <Typography fontSize={25}><span>449 TL</span></Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Page3