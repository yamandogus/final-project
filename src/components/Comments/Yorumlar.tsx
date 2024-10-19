import { Box, Container, Pagination, Typography} from "@mui/material";
import Comments1 from "./Comments1";
import { useState } from "react";

export interface CommentProp {
  rating: number;
  name: string;
  date: string;
  comment: string;
  shortComment: string;
  key?:number
}


const reviews: CommentProp[] = [ 
  {
    rating: 5,
    name: "Ahmet Y.",
    date: "06/05/24",
    comment: "Mükemmel bir ürün, çok beğendim!",
    shortComment: "Kesinlikle tekrar alırım.",
  },
  {
    rating: 5,
    name: "Elif Z.",
    date: "06/05/24",
    comment: "Her şey harika, teşekkürler!",
    shortComment: "Kalitesi mükemmel.",
  },
  {
    rating: 5,
    name: "Mehmet T.",
    date: "06/05/24",
    comment: "Hızlı teslimat, harika bir deneyim.",
    shortComment: "Kesinlikle tavsiye ediyorum.",
  },
  {
    rating: 5,
    name: "Seda A.",
    date: "06/05/24",
    comment: "Lezzetli ve taze!",
    shortComment: "Bir daha alırım.",
  },
  {
    rating: 5,
    name: "Burak K.",
    date: "06/05/24",
    comment: "Ürün beklediğimden çok daha iyi.",
    shortComment: "Memnun kaldım.",
  },
  {
    rating: 5,
    name: "Derya H.",
    date: "06/05/24",
    comment: "Harika bir ürün, teşekkürler!",
    shortComment: "Her zaman alırım.",
  },
  {
    rating: 5,
    name: "Cem Y.",
    date: "06/05/24",
    comment: "Tam aradığım gibi, çok beğendim.",
    shortComment: "Kalite harika.",
  },
  {
    rating: 5,
    name: "Leyla P.",
    date: "06/05/24",
    comment: "Ürün kalitesi çok yüksek.",
    shortComment: "Bundan sonra vazgeçemem.",
  },
  {
    rating: 5,
    name: "Ali S.",
    date: "06/05/24",
    comment: "Mükemmel bir deneyim yaşadım.",
    shortComment: "Kesinlikle tavsiye ederim.",
  },
  {
    rating: 5,
    name: "Zeynep M.",
    date: "06/05/24",
    comment: "Her yönüyle harika!",
    shortComment: "Tekrar almayı düşünüyorum.",
  },
  {
    rating: 5,
    name: "Oğuz R.",
    date: "06/05/24",
    comment: "Çok başarılı bir ürün.",
    shortComment: "Alışverişimden çok memnun kaldım.",
  },
  {
    rating: 5,
    name: "Aylin K.",
    date: "06/05/24",
    comment: "Ürün çok kaliteli!",
    shortComment: "Tam istediğim gibi.",
  },
  {
    rating: 5,
    name: "Fatma C.",
    date: "06/05/24",
    comment: "Harika bir lezzet!",
    shortComment: "Fiyatı da uygun.",
  },
  {
    rating: 5,
    name: "Canan D.",
    date: "06/05/24",
    comment: "Her zaman tercih edeceğim bir ürün.",
    shortComment: "Mükemmel tat.",
  },
  {
    rating: 5,
    name: "Emre G.",
    date: "06/05/24",
    comment: "Beklentilerimi karşıladı.",
    shortComment: "Başka bir marka denemeyeceğim.",
  },
  {
    rating: 5,
    name: "Seda B.",
    date: "06/05/24",
    comment: "Çok başarılı bir alışveriş.",
    shortComment: "Kesinlikle öneririm.",
  },
  {
    rating: 5,
    name: "Deniz F.",
    date: "06/05/24",
    comment: "Hızlı kargo, harika ürün.",
    shortComment: "Çok memnun kaldım.",
  },
  {
    rating: 5,
    name: "Murat A.",
    date: "06/05/24",
    comment: "Kesinlikle beğendim!",
    shortComment: "Tavsiye ederim.",
  },
  {
    rating: 5,
    name: "Ege Y.",
    date: "06/05/24",
    comment: "Her şey mükemmel, teşekkürler!",
    shortComment: "Yine alırım.",
  },
  {
    rating: 5,
    name: "Zeynep S.",
    date: "06/05/24",
    comment: "Tam beklediğim gibi bir ürün.",
    shortComment: "Kaliteli ve lezzetli.",
  },
  {
    rating: 5,
    name: "Kerem D.",
    date: "06/05/24",
    comment: "Bu ürünü çok sevdim!",
    shortComment: "Hızlı teslimat da cabası.",
  },
  {
    rating: 5,
    name: "Ayla P.",
    date: "06/05/24",
    comment: "Mükemmel bir alışveriş deneyimi.",
    shortComment: "Ürünler çok kaliteli.",
  },
  {
    rating: 5,
    name: "Oğuz T.",
    date: "06/05/24",
    comment: "Her yönüyle harika bir ürün.",
    shortComment: "Tavsiye ediyorum.",
  },
  {
    rating: 5,
    name: "Merve H.",
    date: "06/05/24",
    comment: "Tam istediğim gibi, çok beğendim.",
    shortComment: "Fiyatı da uygun.",
  },
  {
    rating: 5,
    name: "Burcu K.",
    date: "06/05/24",
    comment: "Gerçekten harika bir ürün!",
    shortComment: "Tekrar almayı düşünüyorum.",
  },
  {
    rating: 5,
    name: "Cem A.",
    date: "06/05/24",
    comment: "Başka bir yerden almayı düşünmüyorum.",
    shortComment: "Kaliteli malzeme.",
  },
  {
    rating: 5,
    name: "Ali F.",
    date: "06/05/24",
    comment: "Beklentilerimin üstünde bir deneyim.",
    shortComment: "Çok memnun kaldım.",
  },
  {
    rating: 5,
    name: "Ela B.",
    date: "06/05/24",
    comment: "Gerçekten harika bir lezzet.",
    shortComment: "Her zaman alırım.",
  },
  {
    rating: 5,
    name: "Gökhan R.",
    date: "06/05/24",
    comment: "Çok kaliteli bir ürün.",
    shortComment: "Tekrar alacağım.",
  },
  {
    rating: 5,
    name: "Selin M.",
    date: "06/05/24",
    comment: "Hızlı kargo ve harika ürün.",
    shortComment: "Öneririm.",
  },
  {
    rating: 5,
    name: "Ayşe D.",
    date: "06/05/24",
    comment: "Mükemmel bir alışveriş deneyimi.",
    shortComment: "Çok memnun kaldım.",
  },
  {
    rating: 5,
    name: "Barış E.",
    date: "06/05/24",
    comment: "Tam aradığım gibi bir ürün.",
    shortComment: "Kesinlikle tavsiye ederim.",
  },
  {
    rating: 5,
    name: "Buse G.",
    date: "06/05/24",
    comment: "Mükemmel tat, harika!",
    shortComment: "Yine almayı düşünüyorum.",
  },
  {
    rating: 5,
    name: "Murat O.",
    date: "06/05/24",
    comment: "Her yönüyle beğendim.",
    shortComment: "Kaliteli malzeme.",
  },
  {
    rating: 5,
    name: "Sinem Y.",
    date: "06/05/24",
    comment: "Harika bir lezzet, bayıldım!",
    shortComment: "Başka markalara bakmam.",
  },
  {
    rating: 5,
    name: "Efsane T.",
    date: "06/05/24",
    comment: "Tam istediğim gibi, çok beğendim.",
    shortComment: "Tavsiye ediyorum.",
  },
  {
    rating: 5,
    name: "Zeynep V.",
    date: "06/05/24",
    comment: "Gerçekten kaliteli bir ürün.",
    shortComment: "Kesinlikle alacağım.",
  },
  {
    rating: 5,
    name: "Ceren L.",
    date: "06/05/24",
    comment: "Çok güzel, tavsiye ederim.",
    shortComment: "Alışverişimden çok memnun kaldım.",
  },
  {
    rating: 5,
    name: "Serkan H.",
    date: "06/05/24",
    comment: "Harika bir deneyim yaşadım.",
    shortComment: "Tekrar alırım.",
  },
  {
    rating: 5,
    name: "Ali C.",
    date: "06/05/24",
    comment: "Ürün çok güzel, teşekkürler!",
    shortComment: "Her zaman tercih edeceğim.",
  },
  {
    rating: 5,
    name: "Duygu P.",
    date: "06/05/24",
    comment: "Ürün beklediğimden çok daha iyi.",
    shortComment: "Memnun kaldım.",
  },
  { rating: 5, name: "Ali Y.", date: "06/05/24", comment: "Harika bir ürün!", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Ayşe B.", date: "06/06/24", comment: "Çok beğendim, teşekkürler!", shortComment: "Kalitesi mükemmel." },
  { rating: 5, name: "Mehmet K.", date: "06/07/24", comment: "Tekrar alırım, çok memnun kaldım.", shortComment: "Lezzeti harika." },
  { rating: 5, name: "Fatma G.", date: "06/08/24", comment: "Her zaman tercih edeceğim bir ürün.", shortComment: "Mükemmel tat!" },
  { rating: 5, name: "Zeynep S.", date: "06/09/24", comment: "Bayıldım, teşekkürler!", shortComment: "Hızlı teslimat!" },
  { rating: 5, name: "Burak T.", date: "06/10/24", comment: "En sevdiğim ürün, harika!", shortComment: "Kesinlikle tekrar alacağım." },
  { rating: 5, name: "Elif D.", date: "06/11/24", comment: "Çok başarılı bir ürün, teşekkürler!", shortComment: "Aldığım en iyi ürünlerden biri." },
  { rating: 5, name: "Kemal R.", date: "06/12/24", comment: "Mükemmel, hiç tereddüt etmeden alın!", shortComment: "Hızlı ve kaliteli." },
  { rating: 5, name: "Ece L.", date: "06/13/24", comment: "Güzel bir lezzet, çok memnun kaldım.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Oğuzhan A.", date: "06/14/24", comment: "Kalite ve lezzet bir arada.", shortComment: "Kesinlikle öneriyorum." },
  { rating: 5, name: "Seda K.", date: "06/15/24", comment: "Tazeliği mükemmel, çok beğendim.", shortComment: "Her zaman almak isteyeceğim." },
  { rating: 5, name: "Cem M.", date: "06/16/24", comment: "Mükemmel tat, kesinlikle tekrar alırım.", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Derya P.", date: "06/17/24", comment: "Bir daha alacağım, harika!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Ali H.", date: "06/18/24", comment: "Çok güzel, teşekkürler!", shortComment: "Fiyatı da uygun." },
  { rating: 5, name: "Zeynep E.", date: "06/19/24", comment: "Harika bir tat, çok memnun kaldım.", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Serkan Y.", date: "06/20/24", comment: "Beklentimin üstünde, harika!", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Gizem K.", date: "06/21/24", comment: "Tazeliği mükemmel, harika bir ürün.", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Oğuz D.", date: "06/22/24", comment: "Çok memnun kaldım, teşekkürler!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Leyla T.", date: "06/23/24", comment: "Mükemmel bir ürün, bayıldım!", shortComment: "Kesinlikle tekrar alırım." },
  { rating: 5, name: "Hüseyin R.", date: "06/24/24", comment: "Güzel bir deneyim yaşadım.", shortComment: "Kalite ve fiyat dengesi iyi." },
  { rating: 5, name: "Deniz B.", date: "06/25/24", comment: "Her zaman tercih edeceğim bir ürün.", shortComment: "Mükemmel lezzet!" },
  { rating: 5, name: "Eylül F.", date: "06/26/24", comment: "Çok başarılı bir ürün, teşekkürler!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Elif H.", date: "06/27/24", comment: "Harika bir tat, çok memnun kaldım.", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Ahmet T.", date: "06/28/24", comment: "Mükemmel, hiç tereddüt etmeden alın!", shortComment: "Kaliteli." },
  { rating: 5, name: "Seda R.", date: "06/29/24", comment: "Güzel bir ürün, çok beğendim.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Kerem M.", date: "06/30/24", comment: "Mükemmel lezzet, harika!", shortComment: "Kesinlikle tekrar alırım." },
  { rating: 5, name: "Eylem S.", date: "07/01/24", comment: "Çok güzel, teşekkürler!", shortComment: "Kalitesi mükemmel." },
  { rating: 5, name: "Berk K.", date: "07/02/24", comment: "Harika bir ürün, bayıldım!", shortComment: "Hızlı teslimat!" },
  { rating: 5, name: "Emine Y.", date: "07/03/24", comment: "Çok memnun kaldım, teşekkürler!", shortComment: "Mükemmel kalite." },
  { rating: 5, name: "Sinan B.", date: "07/04/24", comment: "Her zaman tercih edeceğim bir ürün.", shortComment: "Mükemmel tat!" },
  { rating: 5, name: "Duygu M.", date: "07/05/24", comment: "Güzel bir lezzet, çok memnun kaldım.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Merve A.", date: "07/06/24", comment: "Bayıldım, teşekkürler!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Onur T.", date: "07/07/24", comment: "Mükemmel bir ürün, kesinlikle tavsiye ederim!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Serap K.", date: "07/08/24", comment: "Çok başarılı bir ürün, teşekkürler!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Cem Y.", date: "07/09/24", comment: "Güzel bir ürün, çok beğendim.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Pelin T.", date: "07/10/24", comment: "Çok memnun kaldım, teşekkürler!", shortComment: "Mükemmel kalite." },
  { rating: 5, name: "Arda K.", date: "07/11/24", comment: "Mükemmel tat, harika!", shortComment: "Kesinlikle tekrar alırım." },
  { rating: 5, name: "Ayla S.", date: "07/12/24", comment: "Harika bir ürün, bayıldım!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Ali O.", date: "07/13/24", comment: "Güzel bir lezzet, çok memnun kaldım.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Oğuz T.", date: "07/14/24", comment: "Mükemmel bir ürün, kesinlikle tavsiye ederim!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Yasemin E.", date: "07/15/24", comment: "Harika bir tat, çok memnun kaldım.", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Caner B.", date: "07/16/24", comment: "Çok memnun kaldım, teşekkürler!", shortComment: "Mükemmel kalite." },
  { rating: 5, name: "Derya H.", date: "07/17/24", comment: "Güzel bir deneyim yaşadım.", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Aylin Y.", date: "07/18/24", comment: "Mükemmel bir ürün, kesinlikle tavsiye ederim!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Emre D.", date: "07/19/24", comment: "Çok başarılı bir ürün, teşekkürler!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "İpek T.", date: "07/20/24", comment: "Güzel bir lezzet, çok memnun kaldım.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Mert A.", date: "07/21/24", comment: "Mükemmel tat, harika!", shortComment: "Kesinlikle tekrar alırım." },
  { rating: 5, name: "Ela S.", date: "07/22/24", comment: "Bayıldım, teşekkürler!", shortComment: "Hızlı teslimat." },
  { rating: 5, name: "Arda R.", date: "07/23/24", comment: "Güzel bir ürün, çok beğendim.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Burcu E.", date: "07/24/24", comment: "Mükemmel bir ürün, kesinlikle tavsiye ederim!", shortComment: "Kalitesi çok yüksek." },
  { rating: 5, name: "Yasin K.", date: "07/25/24", comment: "Güzel bir lezzet, çok memnun kaldım.", shortComment: "Fiyatına göre harika." },
  { rating: 5, name: "Ali G.", date: "07/26/24", comment: "Mükemmel bir tat, çok memnun kaldım.", shortComment: "Kesinlikle tavsiye ederim." },
  { rating: 5, name: "Selin U.", date: "07/27/24", comment: "Harika bir ürün, bayıldım!", shortComment: "Hızlı teslimat." }
];

const Yorumlar = () => {
const [page, setPage] = useState(1)
const commentLimit = 6;


const handleChangePage= (e:React.ChangeEvent<unknown>, p:number)=>{
  console.log(e);
  setPage(p)
}

const standartPage = (page - 1) * commentLimit
const selectedRewies = reviews.slice(standartPage , standartPage + commentLimit)


  return (
    <>
      <Box sx={{ my: 10 }}>
      <Container>
       {reviews.length > 0 ? (
        <>
        {selectedRewies.map((rew, index)=>(
        <>
        <Comments1
          rating={rew.rating}
          name={rew.name}
          date={rew.date}
          comment={rew.comment}
          shortComment={rew.shortComment}
          key={index}
        />
        </>
      ))}
        </>

       ):<Typography>Yorum Bulunmadı</Typography>}
      </Container>
      <Typography> {page}</Typography>
      <Box sx={{
        display:'flex',
        justifyContent:'center'
      }}>
          <Pagination color='secondary' count={Math.ceil(reviews.length / commentLimit)} onChange={handleChangePage}/>
      </Box>
      </Box>
    </>
  );
};

export default Yorumlar;
