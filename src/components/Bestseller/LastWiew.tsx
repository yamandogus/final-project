import { Grid, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface LastWiewProps {
    title: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
    discountedPrice?: number | null;
    imgSrc: string;
    link?: string | null;
}

const LastWiew = ({title, description, rating, reviews, price, discountedPrice, imgSrc, link}: LastWiewProps) => {

  const calculateDiscount = (price: number, discountedPrice: number) =>{
    return Math.round((discountedPrice - price ) / price * 100);
  }
  
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Link style={{position:'relative'}} to={link ?? '#'}>
        {discountedPrice && (
          <Stack className="discount">
                <strong style={{fontSize:'15px'}}>%{calculateDiscount(price, discountedPrice)} </strong> İNDİRİM
          </Stack>
        )}
        <img
          className="responsive-image"
          src={imgSrc}
          alt={title}
          style={{ maxWidth: "90%", display: "block", margin: "auto" }}
        />
      </Link>
      <Stack direction={"column"} sx={{ alignItems: "center" }}>
        <Typography fontSize={13} fontWeight={"bolder"} className="text">
          {title}
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
  );
};

export default LastWiew;
