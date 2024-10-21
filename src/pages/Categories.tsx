import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { base_url, photo_url } from "../components/bestseller/BestSellers";
import { Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { calculateDiscount } from "../components/protein/Protein";
import { getAllProducts } from "./AllProducts";
import { useEffect, useState } from "react";

interface CatPropsconst {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: null;
    total_price: number;
    discounted_price: number;
    price_per_servings: number;
    discount_percentage: null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}

interface LoaderData {
  category: CatPropsconst[];
  categoryName: string;
}

export async function CategoryLoader({ params }: LoaderFunctionArgs) {
  const { id, name } = params;
  const limit = 12;
  const page = 1;
  const offset = getAllProducts(page, limit);
  try {
    const response = await fetch(
      base_url + `/products?limit=${limit}&main_category=${id}&offset=${offset}`
    );
    const result = await response.json();
    return { category: result.data.results, categoryName: name };
  } catch (error) {
    console.log(error);
  }
}

const Categories = () => {
  const { id } = useParams();
  const { category, categoryName } = useLoaderData() as LoaderData;
  const [product, setProduct] = useState(category);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemPerPage = 12;

  useEffect(() => {
    const MoreProduct = async () => {
      if (loading) {
        const offset = getAllProducts(currentPage, itemPerPage);
        const response = await fetch(
          base_url +
            `/products?limit=${itemPerPage}&main_category=${id}&offset=${offset}`
        );
        const result = await response.json();
        setProduct((prevItems) => [...prevItems, ...result.data.results]);
        setLoading(false);
      }
    };
    if(currentPage>1){
      MoreProduct()
    }
  }, [currentPage, loading]);

  const handeleScroll = () =>{
    const scrollY = window.scrollY;
    const windowHeight= window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight
    if(scrollY + windowHeight >= documentHeight - 100 && !loading){
      setLoading(true)
      setCurrentPage(currentPage + 1)
    } 
  }

  useEffect(()=>{
    window.addEventListener("scroll",handeleScroll);
    return () =>{
      window.removeEventListener("scroll",handeleScroll)
    }
  },[loading])

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bolder",
          mt: 2,
          mb: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {categoryName}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {product.map((cat, index) => (
            <Grid key={index} item xs={6} md={4} lg={3}>
              <Link
                style={{ position: "relative" }}
                to={`/products/${cat.slug}`}
              >
                {cat.price_info.discounted_price && (
                  <Stack className="discount">
                    <strong style={{ fontSize: "16px" }}>
                      %
                      {calculateDiscount(
                        cat.price_info.total_price,
                        cat.price_info.discounted_price
                      )}{" "}
                    </strong>
                    İNDİRİM
                  </Stack>
                )}
                <img
                  className="imgHover"
                  src={photo_url + cat.photo_src}
                  alt={cat.name}
                  style={{
                    maxWidth: "90%",
                    display: "block",
                    margin: "auto",
                    aspectRatio: 1 / 1,
                    objectFit: "cover",
                  }}
                />
              </Link>
              <Stack direction={"column"} sx={{ alignItems: "center", mt: 2 }}>
                <Typography
                  fontSize={16}
                  fontWeight={"bolder"}
                  className="text"
                >
                  {cat.name}
                </Typography>
                <Typography>
                  <span className="centered-span">{cat.short_explanation}</span>
                </Typography>
                <Rating
                  name="half-rating"
                  defaultValue={cat.average_star}
                  readOnly
                />
                <Typography>{cat.comment_count} Yorum</Typography>
                <Typography>
                  {cat.price_info.discounted_price ? (
                    <>
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "red",
                          fontSize: 16,
                          marginRight: 3,
                        }}
                      >
                        {Math.floor(cat.price_info.discounted_price)} TL <br />
                      </span>
                      <span
                        style={{
                          fontWeight: "bolder",
                          textDecoration: "line-through",
                        }}
                      >
                        {cat.price_info.total_price} TL
                      </span>
                    </>
                  ) : (
                    <span style={{ fontWeight: "bolder" }}>
                      {cat.price_info.total_price} TL
                    </span>
                  )}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Categories;
