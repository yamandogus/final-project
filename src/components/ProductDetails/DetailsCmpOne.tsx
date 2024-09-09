import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
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
import { color } from "./details";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  product: Product;
  tags: string[];
}

const DetailsCmpOne = ({ product, tags}: Props) => {
  const {
    selectedVariant,
    productAromas,
    productSizes,
    isSelectedAroma,
    isSelectedSize,
    isSizeAvailable,
    selectAroma,
    selectSize,
  } = useProductVariants(product.variants ??[]);
  


 const culculateDiscount = (total_price: number, discounted_price: number | null)=>{
  console.log("totol" + total_price +  "dis" + discounted_price);
  
  if(discounted_price === null) return 0;
  const discountedAmount = total_price- discounted_price;
  const discountedPercentage = (discountedAmount / total_price) * 100;
  return Math.round(discountedPercentage)
 }
  const [count, setCount] = useState<number>(0);
  const currentVariant = selectedVariant || product.variants[0]
  const currentPrice = currentVariant?.price
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} key={product.id}>
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
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
                  <FormControl>
                    <FormLabel component="legend" sx={{ mb: 1 }}>
                      <strong>AROMA:</strong>
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="aroma"
                      name="radio-buttons-group"
                    >
                      <Grid container spacing={2}>
                        {productAromas.map((aroma, index) => (
                          <Grid item key={index}>
                            <FormControlLabel
                              className={`checkedForm ${
                                isSelectedAroma(aroma) ? "checkedDiv" : ""
                              }`}
                              control={
                                <Radio
                                  checked={isSelectedAroma(aroma)}
                                  onClick={() => selectAroma(aroma)}
                                  className="checked"
                                />
                              }
                              label={
                                <Box display="flex" alignItems="center">
                                  <Box>{aroma}</Box>
                                  <span
                                    style={{
                                      position: "absolute",
                                      right: 0,
                                      width: 20,
                                      height: 35,
                                      backgroundColor:
                                        color[aroma] || "transparent",
                                    }}
                                    className="labelSpan"
                                  ></span>
                                </Box>
                              }
                              labelPlacement="end"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel component="legend" sx={{ mb: 1 }}>
                      <strong>BOYUT:</strong>
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="aroma"
                      name="radio-buttons-group"
                    >
                      <Grid container spacing={2}>
                        {productSizes.map((size, index) => (
                          <Grid item key={index}>
                            <FormControlLabel
                              className={`checkedSize ${
                                isSelectedSize(size) ? "checkedDiv" : ""
                              }`}
                              control={
                                <Radio
                                  checked={isSelectedSize(size)}
                                  onClick={() => selectSize(size)}
                                  className="checked"
                                  disabled={isSizeAvailable(size)}
                                />
                              }
                              label={
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  position="relative"
                                >
                                  {size.pieces} x {size.gram} gr
                                  <span>
                                  {product.variants[index].price.discounted_price !== null &&
                                  selectedVariant.price.discounted_price
                                  &&
                                  !isSizeAvailable(size) && (
                                    <span
                                    style={{
                                      position:"absolute",
                                      top:-35,
                                      left:0,
                                      fontWeight:'bolder',
                                      borderRadius:2,
                                      backgroundColor:'red',
                                      color:'white',
                                      whiteSpace:'nowrap'
                                    }}
                                    > %{culculateDiscount(selectedVariant?.price.total_price, selectedVariant?.price.discounted_price)} İndirim</span>
                                  )}
                                  </span>
                                  <span
                                    style={{
                                      position: "absolute",
                                      height: 80,
                                      right:0,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    {isSizeAvailable(size) && <CloseIcon 
                                    sx={{
                                      maxWidth:100,
                                      fontSize:70
                                    }}
                                    />}{" "}
                                  </span>
                                </Box>
                              }
                              labelPlacement="end"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <Stack direction={'row'} spacing={1}>
                      {currentPrice?.discounted_price ? (
                        <>
                         <span style={{fontWeight:'bolder', color:'red',fontSize: 30, marginRight:3}}>
                          {Math.floor(currentPrice.discounted_price)} TL <br />
                        </span>
                        <span style={{ fontWeight: "bolder",fontSize: 30, textDecoration:'line-through' }}>{currentPrice.total_price} TL</span>
                        </>
                      ):
                      <span style={{ fontWeight: "bolder",fontSize: 30 }}>{currentPrice.total_price} TL</span>
                      }
                    
                  </Stack>
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
