import {
  Box,
  Container,
  Grid,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useLoaderData } from "react-router-dom";
import { CategoryProps } from "../../services/Type";
import CategoryProducts from "./components/HomeComp";
import SliderComponent from "../../hooks/UseBlaze/SliderComponent";
import BestSeller from "../../components/Bestseller/BestsellerPage";

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
    image: "/images/sec-urunler/img/URUN2.jpeg",
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
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <Tooltip title="Yapay Zeka Asistanı">
            <IconButton
              href="/AI"
              sx={{
                width: 75,
                height: 75,
                fontSize: 40,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                color: "white",
                boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                transition: "all 0.3s ease-in-out",
                animation: "pulse 2s infinite",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)",
                  boxShadow: "0 6px 10px 4px rgba(33, 203, 243, .4)",
                },
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: "0 0 0 0 rgba(33, 203, 243, 0.4)",
                  },
                  "70%": {
                    boxShadow: "0 0 0 10px rgba(33, 203, 243, 0)",
                  },
                  "100%": {
                    boxShadow: "0 0 0 0 rgba(33, 203, 243, 0)",
                  },
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  animation: "float 3s ease-in-out infinite",
                  "@keyframes float": {
                    "0%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-10px)",
                    },
                    "100%": {
                      transform: "translateY(0px)",
                    },
                  },
                }}
              >
                🤖
              </Box>
            </IconButton>
          </Tooltip>
        </Box>
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
          {category.map((cat, index) => {
            const product = products[index];
            return (
              <CategoryProducts
                key={cat.id}
                name={cat.name}
                bg={product.bg}
                image={product.image}
                description={product.description}
                link={cat.id}
                review={product.review}
              />
            );
          })}
          <CategoryProducts
            key={products[5].name}
            name={products[5].name}
            bg={products[5].bg}
            image={products[5].image}
            description={products[5].description}
            link={"/AllProducts"}
            review={products[5].review}
          />
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
