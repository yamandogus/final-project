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
  
  return (
    <>
      <Grid item xs={6} md={4} lg={2}>
        <Link style={{position:'relative'}} to={`/Page2`}>
          <span style={{position:'absolute',top:'-0.375rem', right:'-0.25rem', width:'17px', height:'17px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'9999px', backgroundColor:'red', fontSize:'11px'}}>%31 İNDİRİM</span>
          <img
            className="responsive-image"
            src={image}
            alt={name}
            style={{ maxWidth: "100%", display: "block", margin: "auto" }}
          />
        </Link>
        <Stack direction={"column"} sx={{ alignItems: "center" }}>
          <Typography fontSize={16} fontWeight={"bolder"} className="text">
            {name}
          </Typography>
          <Typography>
            <span className="centered-span">{description}</span>
          </Typography>
          <Rating name="half-rating" defaultValue={rating} readOnly />
          <Typography>{reviews} Yorum</Typography>
          <Typography>
            <span style={{ fontWeight: "bolder" }}>{price} TL</span>
            {discountedPrice && (
              <span className="spanText">
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
