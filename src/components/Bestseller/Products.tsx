import { Grid, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface BestsellerProps {
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
}

const ProductCard = ({
  name,
  photo_src,
  short_explanation,
  average_star,
  comment_count,
  price_info: { total_price, discounted_price },
}: BestsellerProps) => {
  const calculateDiscount = (total_price: number, discounted_price: number) => {
    const discountAmont = total_price - discounted_price;
    const discountPercentage = (discountAmont / total_price) * 100;
    return Math.round(discountPercentage);
  };

  return (
    <>
      <Grid item xs={6} md={4} lg={2} marginBottom={3}>
        <Link style={{ position: "relative" }} to={`/ProductsDetails`}>
          {discounted_price && (
            <Stack className="discount">
              <strong style={{ fontSize: "15px" }}>
                %{calculateDiscount(total_price, discounted_price)}{" "}
              </strong>{" "}
              İNDİRİM
            </Stack>
          )}
          <img
            className="responsive-image imgHover"
            src={photo_src}
            alt={name}
            style={{ maxWidth: "90%", display: "block", margin: "auto" }}
          />
        </Link>
        <Stack
          direction={"column"}
          textAlign={"center"}
          sx={{
            alignItems: "center",
            fontStyle: "rgba(136, 136, 136, 1)",
          }}
        >
          <Typography
            mt={1}
            fontSize={16}
            fontWeight={"bolder"}
            className="text"
          >
            {name}
          </Typography>
          <Typography>
            <span className="centered-span">{short_explanation}</span>
          </Typography>
          <Rating
            className="half-rating"
            name="half-rating"
            defaultValue={average_star}
            readOnly
          />
          <Typography>{comment_count} Yorum</Typography>
          <Typography>
            {discounted_price ? (
              <>
                <span
                  className="spanText"
                  style={{ fontWeight: "bolder", color:'red', fontSize: 17, marginRight:3}}
                >
                  {Math.floor(discounted_price)} TL <br />
                </span>
                <span style={{ fontWeight: "bolder", textDecoration:'line-through'}}>{total_price} TL</span>
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

export default ProductCard;
