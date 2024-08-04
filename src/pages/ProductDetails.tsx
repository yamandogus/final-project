import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CokSatanlar from "../components/Bestseller/CokSatanlar";
import Yorumlar from "../components/Comments/Yorumlar";
import LastWiew from "../components/Bestseller/LastWiew";
import Accordions from "../components/Accordions/Accordions";
import DetailsCmpOne from "../components/ProductDetails/DetailsCmpOne";

const accordionData = [
  {
    title: "ÖZELLİKLER",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "BESİN İÇERİKLERİ",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "KULLANIM ŞEKLİ",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
];


const products = [
  {
    title: "WHEY PROTEIN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    reviews: 10869,
    price: 549,
    discountedPrice: null,
    imgSrc: "/images/6card/pg1.jpeg",
    link: "/Page2",
  },
  {
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    rating: 5,
    reviews: 7650,
    price: 799,
    discountedPrice: 1126,
    imgSrc: "/images/6card/pg2.jpeg",
    link: null,
  },
  {
    title: "GÜNLÜK VİTAMİN PAKETİ",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    rating: 5,
    reviews: 5013,
    price: 549,
    discountedPrice: 717,
    imgSrc: "/images/6card/pg3.jpeg",
    link: null,
  },
  {
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    rating: 5,
    reviews: 6738,
    price: 399,
    discountedPrice: null,
    imgSrc: "/images/6card/pg4.jpeg",
    link: null,
  },
  {
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    rating: 5,
    reviews: 5216,
    price: 239,
    discountedPrice: null,
    imgSrc: "/images/6card/pg5.jpeg",
    link: null,
  },
  {
    title: "CREATINE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    rating: 5,
    reviews: 8558,
    price: 239,
    discountedPrice: null,
    imgSrc: "/images/6card/pg6.jpeg",
    link: null,
  },
];

function ProductsDetails() {
  

 

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <img
                width={"90%"}
                className="pageTwoImg"
                src="/images/page2/c93a810b179e49b1b092f231efc186ee.jpeg"
                alt=""
              />
              <Box component={'div'} className="mobileAccordion">
                {accordionData.map((accordion)=>(
                  <Accordions
                  title={accordion.title}
                  details={accordion.details}
                  />
                ))}
              </Box>
            </Grid>
            <Grid
              item
              container
              sm={12}
              md={6}
            >
              <DetailsCmpOne/>
              <Stack sx={{ mb: 3 }}>
                <Typography variant='subtitle1' fontSize={11}>Son Kullanma Tarihi: 07.2025</Typography>
                <Box component={'div'} className="lgAccordion">
                {accordionData.map((accordion)=>(
                  <Accordions
                  title={accordion.title}
                  details={accordion.details}
                  />
                ))}
              </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography
          sx={{
            my:3,
            textAlign:'center'
          }}
          variant="h5"
        >
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </Typography>
        <Container>
          <Grid container>
            {products.map((product, index) => (
              <LastWiew
                key={index}
                title={product.title}
                description={product.description}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                discountedPrice={product.discountedPrice}
                imgSrc={product.imgSrc}
                link={product.link}
              />
            ))}
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"column"}>
                <Typography sx={{ fontSize: 25, fontWeight: "bolder" }}>
                  4.8
                </Typography>
                <Rating
                  sx={{ my: 1 }}
                  name="half-rating"
                  defaultValue={5}
                  precision={0.5}
                />
                <Typography>10869 YORUM</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction={"column"}>
                {[
                  { value: 5, count: 9284, sliderValue: 90 },
                  { value: 4, count: 1316, sliderValue: 50 },
                  { value: 3, count: 226, sliderValue: 30 },
                  { value: 2, count: 32, sliderValue: 10 },
                  { value: 1, count: 11, sliderValue: 5 },
                ].map((rating, index) => (
                  <Stack
                    key={index}
                    direction={"row"}
                    spacing={2}
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Rating
                      defaultValue={rating.value}
                      readOnly
                      icon={<StarIcon />}
                      emptyIcon={<span />}
                    />
                    <Slider
                      defaultValue={rating.sliderValue}
                      aria-label="default"
                      disabled
                      sx={{
                        height: "10px",
                        flex: 1,
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-track": {
                          backgroundColor: "blue",
                        },
                      }}
                    />
                    <Typography>({rating.count})</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Yorumlar />
      <CokSatanlar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4 }}>
          <Button variant='contained' color='primary' sx={{ px: 10, fontWeight: 'bolder' }}>TÜMÜNÜ GÖR</Button>
        </Box>
    </>
  );
}

export default ProductsDetails;
