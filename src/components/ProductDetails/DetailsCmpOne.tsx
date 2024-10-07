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
import { usePaymentStore } from "../../pages/Payement";
import { useStore } from "../../Layout/Count";

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
  const {increaseCount}= useStore()
  const {addBasketItems} = usePaymentStore()
  const [count, setCount] = useState<number>(1);

 const handleProductAdded = () =>{
  if(selectedVariant){
    const newItem = {
      img: selectedVariant.photo_src,
      gram: selectedVariant.size?.gram,
      name: product.name,
      aroma: selectedVariant.aroma,
      price: selectedVariant.price.discounted_price||selectedVariant.price.total_price,
      count: count,
    };
    addBasketItems(newItem)
    increaseCount()
    setCount(1)
  }
 }
  


 const culculateDiscount = (total_price: number, discounted_price: number | null)=>{
  
  if(discounted_price === null) return 0;
  const discountedAmount = total_price- discounted_price;
  const discountedPercentage = (discountedAmount / total_price) * 100;
  return Math.round(discountedPercentage)
 }
  
  const currentVariant = selectedVariant || product.variants[0]
  const currentPrice = currentVariant?.price
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} key={product.id}>
              <img
                className="pageTwoImg"
                src={photo_url +(selectedVariant.photo_src)}
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
                                  justifyContent='center'
                                  alignItems="center"
                                  position="relative"
                                >
                                  {size.pieces} x {size.gram} gr
                                  <span>
                                  {!isSizeAvailable(size) && product.variants[index].price.discounted_price  &&(
                                    <span
                                    style={{
                                      position:"absolute",
                                      top:-34,
                                      left:"50%",
                                      padding:2,
                                      fontSize:"14px",
                                      transform:'translateX(-50%)',
                                      fontWeight:'bolder',
                                      borderRadius:2,
                                      backgroundColor:'red',
                                      color:'white',
                                      whiteSpace:'nowrap',
                                      border:1,
                                    }}
                                    > %{culculateDiscount(
                                      product.variants[index].price.total_price,
                                      product.variants[index].price.discounted_price
                                    )} İndirim</span>
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
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
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
                  <Button className="ShoppinAdButton" variant="contained"
                  onClick={handleProductAdded}
                  >
                    <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> SEPETE EKLE
                  </Button>
                </Box>
              </Box>
              <Stack sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontSize={11}>
                  Son Kullanma Tarihi: 07.2025
                </Typography>
                <Typography mt={2}>
                  {product.explanation.description.split('\n- ')[0]}
                </Typography>
                <Box>
                <ul style={{padding:"5px 0"}}>
                  {product.explanation.description.split('\n- ').slice(1).map((item, index)=>(
                    <li style={{marginLeft:18, padding:"5px 0"}} key={index}>{item.replace('-',"")}</li>
                  ))}
                  </ul>
                </Box>
                <Box component={"div"} className="lgAccordion">
                  <Accordions
                    title={"ÖZELLİKLER"}
                    details={product.explanation.features || " "}
                  />
                  <Accordions
                    title={"BESİN İÇERİĞİ"}
                    details={product.explanation.features || " "}
                  />
                  <Accordions
                    title={"KULLANIM ŞEKLİ"}
                    details={product.explanation.usage || " "}
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
