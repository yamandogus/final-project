import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <Box>
        <Container>
            <Typography variant='h4' fontWeight='bolder'>Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız</Typography>
            <Typography>2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve fonksiyonel gıdaları üreten bir firma olarak; müşterilerimize en kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz. <br/><br /> Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur. Ürünlerimizde, yüksek kalite standartlarına bağlı olarak, sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici çözümler sunuyoruz. <br /><br /> Ürün yelpazemizdeki protein tozları, aminoasitler, vitamin ve mineral takviyeleri ile spor performansınızı desteklemek için ideal besin değerlerini sunuyoruz. Sizin için sadece en iyisinin yeterli olduğunu biliyoruz. Bu nedenle, inovasyon, kalite, sağlık ve güvenlik ilkelerimizi korurken, sürekli olarak ürünlerimizi geliştirmeye ve yenilikçi beslenme çözümleri sunmaya devam ediyoruz.</Typography>
        </Container>
        <Button variant='contained'>
            Gonder
        </Button>
    </Box>
  )
}

export default AboutUs