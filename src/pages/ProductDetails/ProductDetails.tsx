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
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { CommentsProps, Product, ProductProps } from "../../services/Type";
import { CommentsDataProps } from "../../components/Comments/HomeComments";
import LastWiew from "../../components/Bestseller/LastWiew";
import CommentsComponent from "../Account/components/Comment/Comment";
import Comments from "../../components/Comments/Comment";
import ProductsView from "./components/ProductView";
import { base_url } from "../../components/Bestseller/BestsellerPage";
import { AccountProps } from "../Account/components/Informations/MyAccount";

const commentData = [
  { value: 5, count: 9184, sliderValue: 90 },
  { value: 4, count: 1316, sliderValue: 50 },
  { value: 3, count: 226, sliderValue: 30 },
  { value: 2, count: 32, sliderValue: 10 },
  { value: 1, count: 11, sliderValue: 5 },
];

export async function ProductLoader({ params }: LoaderFunctionArgs) {
  const { productSlug } = params;

  const response = await fetch(base_url + `/products/${productSlug}`);
  const result = await response.json();
  const userResponse = await fetch(base_url + "/users/my-account", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    },
  });
  const userResult = await userResponse.json();
  if (!result || !result.data) {
    throw new Error("Product data is missing or invalid ");
  }
  return { data: result.data, user: userResult.data, params };
}

function ProductsDetails() {
  const {
    data: productData,
    user,
    params,
  } = useLoaderData() as {
    data: Product;
    user: AccountProps;
    params: { productSlug: string };
  };
  const data = localStorage.getItem("last-visited");
  const lastViseted: ProductProps[] = data ? JSON.parse(data) : [];
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState<CommentsDataProps[]>([]);

  const fetchComments = async () => {
    try {
      const pramsSlug = params.productSlug;
      const responseComments = await fetch(
        base_url + `/products/${pramsSlug}/comments?limit=10&offset=0`,
        {
          method: "GET",
        }
      );
      const dataCom = await responseComments.json();

      const storedComments = JSON.parse(
        localStorage.getItem("product-comments") || "[]"
      );

      if (dataCom.data && dataCom.data.results) {
        const apiComments = dataCom.data.results;

        const allComments = [...apiComments, ...storedComments].filter(
          (comment, index, self) =>
            index ===
            self.findIndex(
              (c) =>
                c.created_at === comment.created_at &&
                c.comment === comment.comment
            )
        );
        setComments(allComments);
      } else {
        setComments(storedComments);
      }
    } catch (error) {
      console.error("Yorumlar yüklenirken hata:", error);
      const storedComments = JSON.parse(
        localStorage.getItem("product-comments") || "[]"
      );
      setComments(storedComments);
    }
  };

  useEffect(() => {
    const storedComments = JSON.parse(
      localStorage.getItem("product-comments") || "[]"
    );
    setComments(storedComments);

    fetchComments();
  }, [params.productSlug]);

  const commentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const pramsSlug = params.productSlug;
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as CommentsProps;
    console.log("data", data);
    try {
      const response = await fetch(
        base_url + `/products/${pramsSlug}/comments`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = response.json();
      if (response.ok) {
        await fetchComments();
      }
      console.log(responseJson);
    } catch (error) {
      console.log("Yorum atılamadı", error);
    }
  };

  return (
    <>
      <Box sx={{ my: 1 }}>
        <ProductsView
          user={user}
          tags={productData.tags || []}
          product={productData}
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
          <Grid container columnSpacing={2}>
            {lastViseted.map((product, index) => (
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
          <Grid container spacing={6} mt={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
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
                        borderRadius:'none',
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
            <Grid item xs={12}>
              <Box mt={2} >
                <a
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Yorum ekle
                </a>
                {open ? (
                  <Box mt={3}>
                    <Box>
                      <form onSubmit={(e) => commentSubmit(e)}>
                        <CommentsComponent />
                      </form>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div id="commnets">
        <Comments reviews={comments} />
      </div>
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
