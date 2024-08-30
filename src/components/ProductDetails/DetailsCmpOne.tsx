import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Accordions from "../Accordions/Accordions";
import { photo_url } from "../Bestseller/CokSatanlar";
import { useProductVariants } from "../../hooks/use-product-variants";
import { Product } from "../../hooks/types";

interface Props {
  product: Product;
  tags: string[];
}


const DetailsCmpOne = ({ product }: Props) => {
  const {
    tags = [],
  } = product;
  const {
    selectedVariant,
    productAromas,
    productSizes,
    isSelectedAroma,
    isSelectedSize,
    selectAroma,
    selectSize,
  } = useProductVariants(product.variants);
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} key={product.id}>
              <img
                width={"90%"}
                className="pageTwoImg"
                src={photo_url + selectedVariant?.photo_src}
                alt=""
              />
              <Box component={"div"} className="mobileAccordion">
                <Accordions
                  title={"ÖZELLİKLER"}
                  details={product.explanation.usage || " "}
                />
                <Accordions
                  title={"BESİN İÇERİĞİ"}
                  details={product.explanation.features || " "}
                />
                <Accordions
                  title={"KULLANIM KOŞULLARI"}
                  details={product.explanation.description || " "}
                />
              </Box>
            </Grid>
            <Grid item container sm={12} md={6}>
              <Box width="100%">
                <Box>
                  <Typography variant="h5" fontWeight={"bolder"}>
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(99, 99, 99, 1)",
                    }}
                    variant="subtitle2"
                  >
                    {product.short_explanation}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Rating
                      defaultValue={product.average_star}
                      readOnly
                      size="small"
                    />
                    <span>{product.comment_count} Yorum</span>
                  </Stack>
                  <Stack
                    width="100%"
                    mt={2}
                    direction={"row"}
                    spacing={2}
                    className="choiceDiv"
                  >
                    {tags &&
                      tags.map((tg, index) => (
                        <button key={index} className="choiceButton">
                          {tg}
                        </button>
                      ))}
                  </Stack>
                </Box>
                <Box my={2}>
                  <Typography component="legend">
                    <strong>AROMA:</strong>
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {productAromas.map((aroma, index) => (
                      <button
                        key={index}
                        onClick={() => selectAroma(aroma)}
                        selected={isSelectedAroma(aroma)}
                        className={`checkedForm ${
                          isSelectedAroma(aroma) ? "checkedDiv" : ""
                        }`}
                      >
                        {aroma}
                      </button>
                    ))}
                  </Stack>
                </Box>
                <Box>
                  <Typography component="legend">
                    <strong>BOYUT:</strong>
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {productSizes.map((size, index) => (
                      <button
                        onSelect={isSelectedSize(size)}
                        key={index}
                        onClick={() => selectSize(size)}
                        className={`checkedForm ${
                          isSelectedSize(size) ? "checkedDiv" : ""
                        }`}
                      >
                        {size.pieces} x {size.total_services}
                      </button>
                    ))}
                  </Stack>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <Box>
                    <span style={{ fontSize: 30, fontWeight: "bolder" }}>
                      {selectedVariant?.price?.total_price}TL
                    </span>
                  </Box>
                  <Box>
                    <span>
                      {selectedVariant?.size?.total_services}TL /Servis
                    </span>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <Box component={"div"} className="countDiv">
                    <button
                      className="countButton"
                      onClick={() => setCount(count ? count - 1 : 0)}
                    >
                      -
                    </button>
                    <span className="countCart">{count}</span>
                    <button
                      className="countButton"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </Box>
                  <Button className="ShoppinAdButton" variant="contained">
                    <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> SEPETE EKLE
                  </Button>
                </Box>
              </Box>
              <Stack sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontSize={11}>
                  Son Kullanma Tarihi: 07.2025
                </Typography>
                <Box component={"div"} className="lgAccordion">
                  <Accordions
                    title={"KULLANIM ŞEKLİ"}
                    details={product.explanation.usage || " "}
                  />
                  <Accordions
                    title={"BESİN İÇERİĞİ"}
                    details={product.explanation.features || " "}
                  />
                  <Accordions
                    title={"AÇIKLAMA"}
                    details={product.explanation.description || " "}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DetailsCmpOne;

