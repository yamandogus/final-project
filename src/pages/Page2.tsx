import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import CokSatanlar from "../components/CokSat/CokSatanlar";
import Yorumlar from "../components/Comments/Yorumlar";
import LastWiew from "../components/CokSat/LastWiew";
import { useEffect } from "react";
import Aroma from "../components/Aroma/Aroma";

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

function Page2() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLDivElement>(".checkbox-div")
      .forEach((div) => {
        div.addEventListener("click", () => {
          const checkbox =
            div.querySelector<HTMLInputElement>(".checkbox-input");
          if (checkbox) {
            checkbox.checked = !checkbox.checked;
            div.classList.toggle("selected", checkbox.checked);
          }
        });
      });
  }, []);

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
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              container
              direction="column"
              alignItems="flex-start"
            >
              <Box>
                <Typography variant="h4" fontWeight={"bolder"}>
                  WHEY PROTEIN
                </Typography>
                <Typography>EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</Typography>
                <Rating
                  size="small"
                  name="half-rating"
                  defaultValue={5}
                  precision={0.5}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    my: 2,
                    borderBottom: "1px solid rgba(221, 221, 221, 1)",
                    pb: 2,
                  }}
                >
                  <Button
                    sx={{ borderRadius: 5 }}
                    variant="contained"
                    color="inherit"
                  >
                    VEJETERYAN
                  </Button>
                  <Button
                    sx={{ borderRadius: 5 }}
                    variant="contained"
                    color="inherit"
                  >
                    GLUTENSİZ
                  </Button>
                </Stack>
              </Box>
              <Typography sx={{ fontWeight: "bolder", my: 1 }}>
                AROMA:
              </Typography>
              <Grid container spacing={2} width={"calc(100% + 16px)"}>
                <Grid item xs={4}>
                  <Aroma aroma={"büskivi"} color="rgba(230, 188, 121, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Çikolata"} color="rgba(86, 50, 29, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Muz"} color="rgba(241, 208, 24, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Salted Caramel"} color="rgba(182, 67, 0, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Choco Nut"} color="rgba(123, 63, 0, 1)" />
                </Grid>
                <Grid item xs={4}>
                  <Aroma
                    aroma={"Hindistan Cevizi"}
                    color="rgba(186, 144, 81, 1)"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Aroma
                    aroma={"Raspberry Cheesecake"}
                    color="rgba(204, 30, 95, 1)"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Aroma aroma={"Çilek"} color="rgba(214, 31, 51, 1)" />
                </Grid>
              </Grid>
              <Typography sx={{ fontWeight: "bolder", my: 1 }}>
                BOYUT :
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                        <Stack width={'100%'}  sx={{p:2}}>400G <br /> 16 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                        <Stack width={'100%'}  sx={{p:2}}>1.6 KG <br /> 64 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="checkbox-container">
                    <div className="checkbox-div">
                      <label className="checkbox-label">
                      <Stack width={'100%'} sx={{p:2, px:1}}>6KG X 2 ADET <br /> 128 servis</Stack>
                        <input type="checkbox" className="checkbox-input" />
                        <span className="custom-checkbox"></span>
                      </label>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Stack direction={"row"} spacing={35} sx={{ my: 3 }}>
                <span
                  style={{
                    fontWeight: "bolder",
                    fontSize: "30px",
                    fontFamily: "sans-serif",
                  }}
                >
                  549 TL
                </span>
                <Typography>34.31 TL /Servis</Typography>
              </Stack>
              <Stack sx={{ my: 3 }} direction={"row"} spacing={2}>
                <Box
                  sx={{
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{ height: "100%", width: "20px", border: "none" }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      margin: "0 10px",
                      fontSize: "20px",
                      padding: "50",
                    }}
                  >
                    1
                  </span>
                  <button
                    style={{ height: "100%", width: "20px", border: "none" }}
                  >
                    +
                  </button>
                </Box>
                <Button
                  sx={{
                    px: 8,
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                  variant="contained"
                  startIcon={<ShoppingCartCheckoutIcon />}
                >
                  SEPETE EKLE
                </Button>
              </Stack>
              <Stack
                sx={{ borderBottom: "1px solid black", pb: 2, mb: 2 }}
                direction={"row"}
                spacing={5}
              >
                <Typography>
                  {" "}
                  <LocalShippingIcon sx={{ mr: 1 }} fontSize="large" />
                  Aynı Gün <br /> Ücretsiz Kargo
                </Typography>
                <Typography>
                  <VerifiedUserIcon sx={{ mr: 1 }} fontSize="large" />
                  750.000+ <br />
                  Mutlu Müşteri
                </Typography>
                <Typography>
                  <FactCheckIcon sx={{ mr: 1 }} fontSize="large" />
                  Memnuniyet <br />
                  Garantisi
                </Typography>
              </Stack>
              <Stack sx={{ mb: 3 }}>
                <Typography>Son Kullanma Tarihi: 07.2025</Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography sx={{ fontWeight: "bolder" }}>
                      ÖZELLİKLER
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography sx={{ fontWeight: "bolder" }}>
                      BESİN İÇERİKLERİ
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography sx={{ fontWeight: "bolder" }}>
                      KULLANIM ŞEKLİ
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ my: 6 }}>
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

export default Page2;
