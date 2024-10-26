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
import Yorumlar from "../components/comments/Yorumlar";
import LastWiew from "../components/bestseller/LastWiew";
import DetailsCmpOne from "../components/productDetails/DetailsCmpOne";
import { Link, useLoaderData} from "react-router-dom";
import { base_url } from "../components/Bestseller/Bestseller";
import { Product } from "../hooks/types";

const productsDet = [
  {
    name: "WHEY PROTEIN",
    short_explanation: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    average_star: 5,
    comment_count: 10869,
    price_info: {
      total_price: 549,
      discounted_price: null,
    },
    photo_src: "/images/6card/pg1.jpeg",
    slug: "/Page2",
  },
  {
    name: "FITNESS PAKETİ",
    short_explanation: "EN POPÜLER ÜRÜNLER BİR ARADA",
    average_star: 5,
    comment_count: 7650,
    price_info: {
      total_price: 799,
      discounted_price: 650,
    },
    photo_src: "/images/6card/pg2.jpeg",
    slug: null,
  },
  {
    name: "GÜNLÜK VİTAMİN PAKETİ",
    short_explanation: "EN SIK TÜKETİLEN TAKVİYELER",
    average_star: 5,
    comment_count: 5013,
    price_info: {
      total_price: 549,
      discounted_price: 500,
    },
    photo_src: "/images/6card/pg3.jpeg",
    slug: null,
  },
  {
    name: "PRE-WORKOUT SUPREME",
    short_explanation: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    average_star: 5,
    comment_count: 6738,
    price_info: {
      total_price: 399,
      discounted_price: null,
    },
    photo_src: "/images/6card/pg4.jpeg",
    slug: null,
  },
  {
    name: "CREAM OF RICE",
    short_explanation: "EN LEZZETLİ PİRİNÇ KREMASI",
    average_star: 5,
    comment_count: 5216,
    price_info: {
      total_price: 239,
      discounted_price: null,
    },
    photo_src: "/images/6card/pg5.jpeg",
    slug: null,
  },
  {
    name: "CREATINE",
    short_explanation: "EN POPÜLER SPORCU TAKVİYESİ",
    average_star: 5,
    comment_count: 8558,
    price_info: {
      total_price: 239,
      discounted_price: null,
    },
    photo_src: "/images/6card/pg6.jpeg",
    slug: null,
  },
];

const commentData = 
[
  { value: 5, count: 9184, sliderValue: 90 },
  { value: 4, count: 1316, sliderValue: 50 },
  { value: 3, count: 226, sliderValue: 30 },
  { value: 2, count: 32, sliderValue: 10 },
  { value: 1, count: 11, sliderValue: 5 },
]


export async function ProductLoader({ params }: { params: { productSlug: string } }) {
  const { productSlug } = params;
  const response = await fetch(base_url + `/products/${productSlug}`);
  const result = await response.json();
  if(!result || !result.data){
    throw new Error("Product data is missing or invalid ");
    
  }
  return { data: result.data };
}

function ProductsDetails() {
  const { data: productData } = useLoaderData() as {data: Product};
  

   return (
    <>
      <Box sx={{ my:1 }}>
      <DetailsCmpOne tags={productData.tags || []} product={productData} />
        <Typography
          sx={{
            my: 3,
            textAlign: "center",
          }}
          variant="h5"
        >
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </Typography>
        <Container>
          <Grid container columnSpacing={2}>
            {productsDet.map((product, index) => (
              <LastWiew
                key={index}
                name={product.name}
                short_explanation={product.short_explanation}
                average_star={product.average_star}
                comment_count={product.comment_count}
                photo_src={product.photo_src}
                price_info={product.price_info}
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
                {commentData.map((rating, index) => (
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 4,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 10, fontWeight: "bolder" }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/AllProducts"}
          >
            TÜMÜNÜ GÖR
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default ProductsDetails;
