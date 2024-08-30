import { Grid, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BestsellerPropsCS } from "./CokSatanlar";


const  LastWiew= ({
  name,
  photo_src,
  short_explanation,
  average_star,
  comment_count,
  price_info: { total_price, discounted_price },
}: BestsellerPropsCS) => {

  const calculateDiscount = (total_price: number, discounted_price: number) => {
    const discountAmount = total_price - discounted_price;
    const discountPercentage = (discountAmount / total_price) * 100;
    return Math.round(discountPercentage);
  }
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Link style={{position:'relative'}} to={'#'}>
        {discounted_price && (
          <Stack className="discount">
                <strong style={{fontSize:'15px'}}>%{calculateDiscount(total_price, discounted_price)} </strong> İNDİRİM
          </Stack>
        )}
        <img
          className="responsive-image"
          src={photo_src}
          alt={name}
          style={{ maxWidth: "90%", display: "block", margin: "auto" }}
        />
      </Link>
      <Stack direction={"column"} sx={{ alignItems: "center" }}>
        <Typography fontSize={13} fontWeight={"bolder"} className="text">
          {name}
        </Typography>
        <Typography>
          <span className="centered-span">{short_explanation}</span>
        </Typography>
        <Rating name="half-rating" defaultValue={average_star} readOnly />
        <Typography>{comment_count} Yorum</Typography>
        <Typography>
          {discounted_price?(
            <>
            <span style={{ fontWeight: "bolder", color:'red', fontSize:17 }}>{total_price} TL</span>
          {discounted_price && (
            <span style={{fontWeight:'bolder', textDecoration:'line-through'}}>
              {discounted_price} TL <br />
            </span>
          )}
            </>
          ): <span style={{ fontWeight: "bolder" }}>{total_price} TL</span>}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default LastWiew;
