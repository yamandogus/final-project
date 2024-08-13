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
import Yorumlar from "../components/Comments/Yorumlar";
import LastWiew from "../components/Bestseller/LastWiew";
import DetailsCmpOne from "../components/ProductDetails/DetailsCmpOne";
import { Link, useLoaderData} from "react-router-dom";
import { base_url } from "../components/Bestseller/CokSatanlar";

const productsDet = [
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

export interface WheyIsolate {
  id?: string;
  name?: string;
  slug?: string;
  short_explanation?: string;
  explanation?: {
    usage?: string;
    features?: string;
    description?: string;
    nutritional_content?: {
      ingredients?: {
        aroma?: string;
        value?: string;
      }[];
      nutrition_facts?: {
        ingredients?: {
          name?: string;
          amounts?: string[];
        }[];
        portion_sizes?: string[];
      };
      amino_acid_facts?: {
        ingredients?: {
          name?: string;
          amounts?: string[];
        }[];
        portion_sizes?: string[];
      };
    };
  };
  main_category_id?: string;
  sub_category_id?: string;
  tags?: string[];
  variants?: {
    id?: string;
    size?: {
      gram?: number;
      pieces?: number;
      total_services?: number;
    };
    aroma?: string;
    price?: {
      profit?: number | null;
      total_price?: number;
      discounted_price?: number | null;
      price_per_servings?: number;
      discount_percentage?: number | null;
    };
    photo_src?: string;
    is_available?: boolean;
  }[];
  comment_count?: number;
  average_star?: number;
  photo_src?: string;
}


export async function ProductLoader({ params }: { params: { productSlug: string } }) {
  const { productSlug } = params;
  const response = await fetch(base_url + `/products/${productSlug}`);
  const result = await response.json();
  console.log(result);
  console.log(result.data);
  return { data: result.data };
}

function ProductsDetails() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: productData } = useLoaderData() as {data: WheyIsolate};

   return (
    <>
      <Box sx={{ my: 6 }}>
      <DetailsCmpOne 
            key={productData.id}
            short_explanation={productData.short_explanation}
            name={productData.name}
            average_star={productData.average_star}
            variants={productData.variants || []}
            explanation={productData.explanation || {}}
            tags={productData.tags}
          />
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
          <Grid container>
            {productsDet.map((product, index) => (
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
