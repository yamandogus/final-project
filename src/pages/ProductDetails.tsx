import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link, useLoaderData} from "react-router-dom";
import { base_url } from "../components/Bestseller/Bestseller";
import { Product } from "../hooks/types";
import DetailsCmpOne from "../components/ProductDetails/DetailsCmpOne";
import LastWiew from "../components/Bestseller/LastWiew";
import { AccountProps } from "../components/Account/Informations/MyAccount";
import { ProductProps } from "../components/Protein/Protein";
import { FormEvent, useEffect, useState } from "react";
import Comments from "../components/Comments/comment";

interface CommentsDataProps{
  stars: string;
  comment: string;
  title: string;
  created_at: string;
  aroma: string;
  first_name: string;
  last_name: string;
}

const commentData = 
[
  { value: 5, count: 9184, sliderValue: 90 },
  { value: 4, count: 1316, sliderValue: 50 },
  { value: 3, count: 226, sliderValue: 30 },
  { value: 2, count: 32, sliderValue: 10 },
  { value: 1, count: 11, sliderValue: 5 },
]

interface CommentsProps{
  stars: number;
  title: string;
  comment: string;
}

export async function ProductLoader({ params }: { params: { productSlug: string } }) {
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
  if(!result || !result.data){
    throw new Error("Product data is missing or invalid ");
  }
  return { data: result.data, user: userResult.data, params};
}


function ProductsDetails() {
  const { data: productData, user, params} = useLoaderData() as {data: Product, user: AccountProps, params: {productSlug:string}};
  const data = localStorage.getItem("last-visited")
  const lastViseted: ProductProps[] = data ? JSON.parse(data): [];
  const [open, setOpen] = useState(false)
  const [comment, setComment] = useState<CommentsDataProps[]>([])

  const commentSubmit= async(e:FormEvent) =>{
    e.preventDefault()
    const pramsSlug = params.productSlug
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as CommentsProps;
    console.log("data",data);    
    try {
        const response = await fetch(base_url + `/products/${pramsSlug}/comments`, {
          method:"POST",
          body:JSON.stringify(data),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          }
        })
        const responseJson = response.json() 
        console.log(responseJson);
    } catch (error) {
      console.log("Yorum atılamadı", error);
      
    }
  }

  useEffect(()=>{
    const Comments = async()=>{  
      const pramsSlug = params.productSlug   
      const responseComments = await fetch(base_url + `/products/${pramsSlug}/comments?limit=10&offset=0`,{
        method:"GET",
      })
      const dataCom = await responseComments.json()
      setComment(dataCom.data.results)
      console.log(dataCom.data.results);
    }
    Comments()
  },[])
  console.log(comment);
   return (
    <>
      <Box sx={{ my:1 }}>
      <DetailsCmpOne user={user} tags={productData.tags || []} product={productData} />
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
                justifyContent: 'space-between',
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
            <Grid item xs={12}>
            <Box mt={2}>
                <a
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={(()=> setOpen((prev)=> !prev))}
                >
                  Yorum ekle
                </a>
               {open ? (
                 <Box>
                 <Box>
                   <form onSubmit={(e)=>commentSubmit(e)}>
                     <Box sx={{ mt: 2 }}>
                       <Typography variant="subtitle2">
                         Genel Puan
                       </Typography>
                       <Rating
                        readOnly
                        id="stars"
                        name="stars"
                       />
                     </Box>
                     <Box mt={2}>
                       <Typography
                         variant="subtitle2"
                         sx={{ display: "flex", flexDirection: "column" }}
                       >
                         Bir Başlık Ekleyiniz
                         <TextField 
                           size="small"
                           name="title"
                           placeholder="Bilinmesi gereken önemli birşey nedir?"
                           sx={{
                             mt: 1,
                             width: "80%",
                           }}
                           id="title"
                           required
                           multiline
                         />
                       </Typography>
                     </Box>
                     <Box mt={2}>
                       <Typography variant="subtitle2">
                         Yazılı bir yorum ekleyin
                       </Typography>
                       <TextField
                         sx={{
                           mt: 1,
                           width: "80%",
                         }}
                         id="comment"
                         name="comment"
                         placeholder="Ürün hakkında bilinmesini istedikleriniz nelerdir?"
                         required
                         multiline
                         rows={4}
                       />
                     </Box>
                      <Button type='submit' variant='contained' sx={{ mt:2, backgroundColor:'black', ':hover':{backgroundColor:'black'}}}>Gönder</Button>
                   </form>
                 </Box>
             </Box>
               ):""}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Comments />
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
