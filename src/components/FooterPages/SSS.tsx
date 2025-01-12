import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Container, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactUs from './ContactUs';
import Accordions from '../Accordions/AccordionsPage';


const questions = [
  {
    title: 'OJS Nutrition ürünlerinin menşei neresi?',
    details: 'OJS Nutrition ürünlerinin menşei ABD\'dir. Ürünlerimiz, yüksek kalite standartlarına sahip tesislerde üretilmektedir.'
  },
  {
    title: 'Hangi sertifikalarınız var?',
    details: 'OJS Nutrition ürünleri, GMP (Good Manufacturing Practices), NSF Certified for Sport ve ISO 22000 gibi birçok uluslararası sertifikaya sahiptir.'
  },
  {
    title: 'Satılan ürünler garantili midir? Değişim var mı?',
    details: 'Evet, satılan ürünlerimiz garantilidir. Ürünlerimizi memnuniyet garantisi ile satmaktayız ve gerektiğinde değişim yapmaktayız.'
  },
  {
    title: 'Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?',
    details: 'Sipariş verirken sorun yaşıyorsanız, müşteri hizmetlerimizle iletişime geçebilir veya web sitemizdeki yardım bölümünü ziyaret edebilirsiniz.'
  },
  {
    title: 'OJS Nutrition ürünleri nerede satılıyor?',
    details: 'OJS Nutrition ürünleri, resmi web sitemiz ve yetkili satıcılarımız aracılığıyla satılmaktadır. Ayrıca belirli perakende mağazalarda da bulunabilir.'
  },
  {
    title: 'Yüksek proteinli ürünleri kimler kullanabilir?',
    details: 'Yüksek proteinli ürünler, aktif sporcular, egzersiz yapan bireyler ve protein ihtiyacını karşılamak isteyen herkes tarafından kullanılabilir.'
  },
  {
    title: 'Taksit seçeneği neden yok?',
    details: 'Şu an için taksit seçeneğimiz bulunmamaktadır. Ancak bu konuyu değerlendirmekteyiz ve gelecekte sunmayı planlıyoruz.'
  },
  {
    title: 'Siparişimi nasıl iptal edebilirim?',
    details: 'Siparişinizi iptal etmek için, sipariş numaranızla birlikte müşteri hizmetlerimizle iletişime geçebilirsiniz. İptal işlemleri genellikle sipariş kargolanmadan önce yapılabilir.'
  },
  {
    title: 'Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor?',
    details: 'Kapağın altındaki folyo güvenlik için yerleştirilmiştir. Eğer açılmış veya tam yapışmamış gibi duruyorsa, ürünü kullanmadan önce müşteri hizmetlerimizle iletişime geçiniz.'
  },
  {
    title: 'Sattığınız ürünler ilaç mıdır?',
    details: 'Hayır, OJS Nutrition ürünleri ilaç değildir. Ürünlerimiz, gıda takviyesi kategorisindedir ve sağlıklı yaşamı desteklemek amacıyla üretilmiştir.'
  },
  {
    title: 'Siparişimi teslim alırken nelere dikkat etmeliyim?',
    details: 'Siparişinizi teslim alırken, paketin hasar görmemiş olmasına dikkat ediniz. Herhangi bir hasar durumunda, kargo görevlisine tutanak tutturup, bizimle iletişime geçiniz.'
  },
  {
    title: 'Kapıda ödeme hizmetiniz var mı?',
    details: 'Şu an için kapıda ödeme hizmetimiz bulunmamaktadır. Ancak farklı ödeme seçeneklerimiz mevcuttur.'
  },
  {
    title: 'Sipariş takibimi nasıl yapabilirim?',
    details: 'Siparişinizi takip etmek için, web sitemizdeki sipariş takip bölümüne giderek, sipariş numaranızı girmeniz yeterlidir.'
  },
  {
    title: 'İptal ve İade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır?',
    details: 'İptal ve iade işlemlerinde ürünün tarafımıza ulaşmasından sonra, tutar 5-7 iş günü içerisinde hesabınıza aktarılır.'
  }
];

const SSS = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
    <Box sx={{my:3}}>
      <Container>
      <TabContext value={value}>
      <Box sx={{ mb:2, borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Genel" value="1" sx={{ textTransform: 'none',color:'black', fontWeight:'bolder', backgroundColor:'#E5E5E5', ml:1,}} />
              <Tab  label="Ürünler" value="2" sx={{ textTransform: 'none',color:'black', mx:2 ,fontWeight:'bolder', backgroundColor:'#E5E5E5'}} />
              <Tab label="Kargo" value="3" sx={{ textTransform: 'none',color:'black', fontWeight:'bolder', backgroundColor:'#E5E5E5' }} />
            </TabList>
          </Box>

       <Box >
       <TabPanel value="1">
          <Typography variant='subtitle1' sx={{fontWeight:'bolder', my:2, display:'flex', alignItems:'center'}}> <CreditCardIcon color='primary' sx={{mr:1}}/> GENEL</Typography>
          <Box sx={{backgroundColor:'#E5E5E5', padding:1}} >
          {questions.map((question, index)=> (
            <Accordions
            key={index}
            title={question.title}
            details={question.details}
            />
          ))}
          </Box>
     
        </TabPanel>
        <TabPanel value="2" >
        <Typography variant='subtitle1' sx={{fontWeight:'bolder', my:2, display:'flex', alignItems:'center'}}> <ShoppingCartIcon color='primary' sx={{mr:1}}/> ÜRÜNLER</Typography>
        <Box sx={{backgroundColor:'#E5E5E5', padding:1}}>
        {questions.map((question, index)=> (
            <Accordions
            key={index}
            title={question.title}
            details={question.details}
            />
          ))}
        </Box>
        </TabPanel>
        <TabPanel value="3" >
        <Typography variant='subtitle1' sx={{fontWeight:'bolder', my:2, display:'flex', alignItems:'center'}}> <LocalShippingIcon color='primary' sx={{mr:1}}/> KARGO</Typography>
          <Box sx={{backgroundColor:'#E5E5E5', padding:1}}>
          {questions.map((question, index)=> (
            <Accordions
            key={index}
            title={question.title}
            details={question.details}
            />
          ))}
          </Box>
        </TabPanel>
       </Box>
      </TabContext>
      </Container>
      <ContactUs/>
    </Box>
    
    </>
  )
}

export default SSS