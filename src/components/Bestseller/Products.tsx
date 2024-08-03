import { Grid, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface ProductProps {
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  discountedPrice?: number | null;
}

const ProductCard = ({
  name,
  image,
  description,
  rating,
  reviews,
  price,
  discountedPrice,
}: ProductProps) => {

  const calculateDiscount = (price: number, discountedPrice: number) =>{
    return Math.round((discountedPrice - price )/ price * 100)
  }
  
  return (
    <>
      <Grid item xs={6} md={4} lg={2} marginBottom={3}>
        <Link style={{position:'relative'}} to={`/ProductsDetails`}>
          {discountedPrice && (
            <Stack className="discount">
                  <strong style={{fontSize:'15px'}}>%{calculateDiscount(price, discountedPrice)} </strong> İNDİRİM
            </Stack>
          )}
          <img
            className="responsive-image"
            src={image}
            alt={name}
            style={{ maxWidth: "100%", display: "block", margin: "auto" }}
          />
        </Link>
        <Stack 
        direction={"column"} 
        textAlign={'center'} 
        sx={{
          alignItems:'center',
          fontStyle:'rgba(136, 136, 136, 1)'
        }}
        
        >
          <Typography fontSize={16} fontWeight={"bolder"} className="text">
            {name}
          </Typography>
          <Typography>
            <span className="centered-span">{description}</span>
          </Typography>
          <Rating className="half-rating" name="half-rating" defaultValue={rating} readOnly />
          <Typography>{reviews} Yorum</Typography>
          <Typography>
            <span style={{ fontWeight: "bolder" }}>{price} TL</span>
            {discountedPrice && (
              <span className="spanText" style={{fontWeight:'bolder', fontSize:15}}>
                {discountedPrice} TL <br />
              </span>
            )}
          </Typography>
        </Stack>
      </Grid>
    </>
  );
};

export default ProductCard;
