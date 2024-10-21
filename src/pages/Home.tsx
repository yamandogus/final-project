import { Box, Button, Card, Container, Grid, Rating, Stack, Typography } from "@mui/material";

import SliderComponent from "../components/useBlaze/SliderComponent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import GppGoodIcon from "@mui/icons-material/GppGood";
import BestSeller, { base_url } from "../components/bestseller/BestSellers";
import { Link, useLoaderData } from "react-router-dom";
import { CategoryProps } from "../services/type";
import CategoryProducts from "../components/homePage/HomeComp";

const products = [
  {
    name: "PROTEİN",
    image: "/images/sec-urunler/img/urun1.jpeg",
    description: "Protein ürünleri",
    review: "İNCELE",
    link: "#",
    bg: "rgba(126,160,162,1)",
  },
  {
    name: `VİTA- MİNLER`,
    image: "/images/sec-urunler/img/urun2.jpeg",
    description: "Vitamin ürünleri",
    review: "İNCELE",
    link: "#",
    bg: "rgba(253, 232, 215, 1)",
  },
  {
    name: "SAĞLIK",
    image: "/images/sec-urunler/img/urun3.jpeg",
    description: "Sağlık ürünleri",
    review: "İNCELE",
    link: "#",
    bg: "rgba(204, 203, 198, 1)",
  },
  {
    name: "SPOR GIDALARI",
    image: "/images/sec-urunler/img/urun4.jpeg",
    description: "Spor gıdaları",
    review: "İNCELE",
    link: "#",
    bg: "rgba(217, 216, 211, 1)",
  },
  {
    name: "GIDA",
    image: "/images/sec-urunler/img/urun5.jpeg",
    description: "Gıda ürünleri",
    review: "İNCELE",
    link: "#",
    bg: "rgba(114, 180, 206, 1)",
  },
  {
    name: "TÜM ÜRÜNLER",
    image: "/images/6card/news.png",
    description: "Tüm ürünler",
    review: "İNCELE",
    link: "/AllProducts",
    bg: "rgb(168, 213, 232)",
  },
];

const Home = () => {
  const { category } = useLoaderData() as { category: CategoryProps[] };
  return (
    <>
      <Box component={"div"} className="sliderRek">
        <Container>
          <Stack
            direction="row"
            sx={{
              mx: 2,
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{ fontSize: 11, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <LocalShippingIcon />
              </Box>
              <strong>AYNI GÜN KARGO</strong> -16.00'DAN SONRA ÖNCEKİ
              SİPARİŞLERDE
            </Typography>
            <Typography
              sx={{ fontSize: 11, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <InsertEmoticonIcon />
              </Box>
              <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ SİPARİŞLERDE
            </Typography>
            <Typography
              sx={{ fontSize: 11, display: "flex", alignItems: "center" }}
            >
              <Box component="span" sx={{ marginRight: 1 }}>
                <GppGoodIcon />
              </Box>
              <strong>GÜVENLİ ALIŞVERİŞ</strong> - 1.000.000 + MUTLU ALIŞVERİŞ
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box>
        <img
          className="creatineImg"
          style={{ width: "100%", height: "auto" }}
          src="/images/sec-urunler/img/pageImg1.jpeg"
          alt=""
        />
      </Box>
      <Container sx={{ boxShadow: "none", border: "none", p: 2, pt: 5 }}>
        <Grid container spacing={2}>
            {category.map((cat, index)=>{
              const product = products[index];
              return(
                <CategoryProducts
                  name={cat.name}
                  bg={product.bg}
                  image={product.image}
                  description={product.description}
                  link={cat.id}
                  review={product.review}
                />
              )
            })}
          <Grid item xs={6} sm={4}>
            <Box>
              <Card
                className="cardTyp"
                sx={{
                  backgroundColor: "rgb(168, 213, 232)",
                  height: 165,
                  borderRadius: 3,
                }}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <img
                      className="homeConmtImg"
                      style={{ height: 164, width: 294 }}
                      height={"auto"}
                      src={base_url + "/images/6card/news.png"}
                      alt=""
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      pr: 2,
                    }}
                  >
                    <Stack
                      direction={"column"}
                      spacing={2}
                      sx={{
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "end",
                          fontWeight: 900,
                          fontSize: "x-large",
                          width: "min-content",
                        }}
                        className="nameComp"
                      >
                        Tüm ürünler
                      </Typography>
                      <Link
                        to={"/AllProducts"}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className="buttonComp"
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            borderRadius: 2,
                            width: "100%",
                            fontWeight: "bolder",
                            px: 4,
                            "&:hover": { backgroundColor: "rgba(0, 0, 0, 1)" },
                          }}
                          variant="contained"
                        >
                          İNCELE
                        </Button>
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <BestSeller />
      <Box sx={{ mt: 3 }} position={"relative"}>
        <img
          className="homePage2"
          width="100%"
          src="/images/6card/box3.png"
          alt=""
        />
      </Box>
      <Box>
        <Container sx={{ my: 5, overflow: "hidden" }}>
          <SliderComponent />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#222222", color: "white", py: 6 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Stack direction={"row"} sx={{ mb: 2 }}>
                <Rating name="half-rating" defaultValue={5} readOnly />
                <Typography>(140.000+)</Typography>
              </Stack>
              <Typography variant="h5">
                LABORATUVAR TESTLİ ÜRÜNLER <br /> AYNI GÜN & ÜCRETSİZ KARGO{" "}
                <br /> MEMNUNİYET GARANTİSİ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ mt: 5 }}>
                200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
                seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
                bizimle iletişime geçtiğinde çözüme kavuşturacağız.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
