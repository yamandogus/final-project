import { Grid, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface ProductProps {
  name: string;
  short_explanation: string;
  price_info: {
    profit?: null;
    total_price: number;
    discounted_price?: number | null;
    price_per_servings?: number;
    discount_percentage?: number | null;
  };
  photo_src: string;
  comment_count?: number;
  average_star: number;
  slug: string;
}

const Protein = ({
  name,
  photo_src,
  short_explanation,
  average_star,
  comment_count,
  price_info: { total_price, discounted_price },
  slug,
}: ProductProps) => {

  const calculateDiscount = (total_price: number, discounted_price: number) => {
    const discountAmount = total_price - discounted_price;
    const discountPercentega = (discountAmount / total_price) * 100;
    return Math.round(discountPercentega);
  };

  return (
    <>
      <Grid item xs={6} md={4} lg={3}>
        <Link style={{ position: "relative" }} to={`/products/${slug}`}>
          {discounted_price && (
            <Stack className="discount">
              <strong style={{ fontSize: "16px" }}>
                %{calculateDiscount(total_price, discounted_price)}{" "}
              </strong>
              İNDİRİM
            </Stack>
          )}
          <img
            className="imgHover"
            src={photo_src}
            alt={name}
            style={{ maxWidth: "90%", display: "block", margin: "auto" }}
          />
        </Link>
        <Stack direction={"column"} sx={{ alignItems: "center", mt: 2 }}>
          <Typography fontSize={16} fontWeight={"bolder"} className="text">
            {name}
          </Typography>
          <Typography>
            <span className="centered-span">{short_explanation}</span>
          </Typography>
          <Rating name="half-rating" defaultValue={average_star} readOnly />
          <Typography>{comment_count} Yorum</Typography>
          <Typography>
            {discounted_price ? (
              <>
                <span style={{fontWeight:'bolder', color:'red',fontSize: 16, marginRight:3}}>
                  {Math.floor(discounted_price)} TL <br />
                </span>
                <span style={{ fontWeight: "bolder", textDecoration:'line-through' }}>{total_price} TL</span>
              </>
            ) : (
              <span style={{ fontWeight: "bolder" }}>{total_price} TL</span>
            )}
          </Typography>
        </Stack>
      </Grid>
    </>
  );
};

export default Protein;
