import {Box,Container, Grid, Rating, Stack, Typography } from '@mui/material'
import Comments from '../Comments/comment'

const AboutUs = () => {
  return (
    <Box sx={{mt:1}}>
        <Container>
            <Grid container>
              <Grid xs={12}>
             <Stack spacing={2}>
             <Typography variant='h4' fontWeight='bolder'>Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız</Typography>
                <Typography sx={{mb:1}}>2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve fonksiyonel gıdaları üreten bir firma olarak; müşterilerimize en kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz. <br/><br /> Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur. Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici çözümler sunuyoruz. Ürün yelpazemizdeki protein tozları, aminoasitler, vitamin ve mineral takviyeleri ile spor performansınızı desteklemek için ideal besin değerlerini sunuyoruz. <br /> <br />Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle, inovasyon, kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri sunmaya devam ediyoruz.</Typography>
                <Typography  variant='caption'>istiyorsanız, bize katılın ve en besleyici çözümlerimizle tanışın. Sağlıklı ve aktif bir yaşam için biz her zaman yanınızdayız.</Typography>
             </Stack>
              <Stack sx={{mt:2}} spacing={2}>
              <Typography variant='h4' fontWeight={'bolder'}>1.000.000+ den Fazla Mutlu Müşteri</Typography>
              <Typography>Sanatçılardan profesyonel sporculara, doktordan öğrencilere hayatın her alanında sağlıklı yaşamı ve beslenmeyi hedefleyen 1.000.000'den fazla kişiye ulaştık.</Typography>
              </Stack>
              <Stack sx={{mt:2}}>
                <Typography sx={{mb:2}} variant='h4' fontWeight={'bolder'}>Sertifikalarımız</Typography>
                  <Grid container >
                    <Grid className='aboutUs' item xs={4} sm={12} spacing={2} >
                    <img style={{width:100, height:100}} src="/images/certificatesImg/certificates1.png" alt="" />
                    <img style={{width:100, height:100}}  src="/images/certificatesImg/certificates2.png" alt="" />
                    <img style={{width:100, height:100}}  src="/images/certificatesImg/certificates3.png" alt="" />
                    <img style={{width:100, height:100}}  src="/images/certificatesImg/certifites4.png" alt="" />
                    <img style={{width:100, height:100}}  src="/images/certificatesImg/certificates5.png" alt="" />
                    <img style={{width:100, height:100}}  src="/images/certificatesImg/certificates6.png" alt="" />
                    </Grid>
                  </Grid>
                  <Stack sx={{mt:3,py:3, borderTop:'1px solid #E3E3E3', borderBottom:'1px solid #E3E3E3'}} direction={'row'} spacing={2}>
                  <Rating defaultValue={5} readOnly/>
                  <Typography color={'blue'}>196900 Yorum</Typography>
                  </Stack>
                  <Box>
                    <Typography variant='subtitle1' sx={{display:'inline-block', backgroundColor:"rgba(56, 126, 199, 1)", color:'white', padding:2, margin:1,borderRadius:10, fontWeight:'bolder'}}>ÜRÜN İNCELEMELERİ</Typography>
                  </Box>
              </Stack>
              </Grid>
            </Grid>
        </Container>
        <Comments reviews={[]}/>
    </Box>
  )
}

export default AboutUs