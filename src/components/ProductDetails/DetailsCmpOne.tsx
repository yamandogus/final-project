import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { base_url, photo_url } from "../Bestseller/Bestseller";
import { useProductVariants } from "../../hooks/use-product-variants";
import { Product } from "../../hooks/types";
import CloseIcon from "@mui/icons-material/Close";
import { usePaymentStore } from "../../services/Payement";
import useSnackbar from "../../hooks/alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { color } from "./details";
import { AccountProps } from "../Account/Informations/MyAccount";
import { useStore } from "../../services/Count";
import { useStoreUserCart } from "../../services/userCount";
import { userCartStore } from "../../store/cartStore";
import { CartItem } from "../../services/type";
interface Props {
  product: Product;
  tags: string[];
  user?: AccountProps;
}

const DetailsCmpOne = ({ product, tags, user }: Props) => {
  const {
    selectedVariant,
    productAromas,
    productSizes,
    isSelectedAroma,
    isSelectedSize,
    isSizeAvailable,
    selectAroma,
    selectSize,
  } = useProductVariants(product.variants ?? []);
  const { increaseCount } = useStore();
  const { increaseCountUserCart } = useStoreUserCart();
  const { addBasketItems } = usePaymentStore();
  const [count, setCount] = useState<number>(1);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const [basketText, setBasketText] = useState(false);
  const { cartData, updateCartData } = userCartStore();

  const hadleUserProductAdded = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(base_url + "/users/cart", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product.id,
          product_variant_id: selectedVariant.id,
          pieces: count,
        }),
      });
      const responseJson = (await response.json()) as {
        product_id: string;
        product_variant_id: string;
        pieces: number;
      };
      if (response.ok) {
        const existingIndex = cartData?.items.find(
          (item) =>
            item.product_id === product.id &&
            item.product_variant_id === selectedVariant.id
        );

        let updateItems: CartItem[] = [];

        if (existingIndex) {
          updateItems =
            cartData?.items.map((item) =>
              item.product_id === product.id &&
              item.product_variant_id === selectedVariant.id
                ? {
                    ...item,
                    pieces: item.pieces + count,
                    total_price: item.unit_price * (item.pieces + count),
                  }
                : item
            ) || [];
        } else {
          const newCartItem: CartItem = {
            product_id: product.id,
            product_variant_id: selectedVariant.id,
            product: product.name,
            product_variant_detail: {
              size: {
                gram: selectedVariant.size.gram || 0,
                pieces: selectedVariant.size.pieces,
                total_services: selectedVariant.size.total_services,
              },
              aroma: selectedVariant.aroma,
              photo_src: selectedVariant.photo_src,
            },
            pieces: count,
            unit_price:
              selectedVariant.price.discounted_price ||
              selectedVariant.price.total_price,
            total_price:
              (selectedVariant.price.discounted_price ||
                selectedVariant.price.total_price) * count,
          };
          updateItems = cartData?.items
            ? [...cartData.items, newCartItem]
            : [newCartItem];
        }

        const updatedtotalPrice = updateItems.reduce(
          (total, item) => total + item.total_price,
          0
        );
        updateCartData({
          items: updateItems,
          total_price: updatedtotalPrice,
        });
      }
      setBasketText(true);
      setCount(1);
      increaseCountUserCart();
      showSnackbar("Ürün sepete eklendi", "success");
      setTimeout(() => {
        setBasketText(false);
      }, 2100);
      console.log(responseJson);
    } catch (error) {
      console.log(error);
      showSnackbar("Ürün sepete eklenemedi", "error");
    }
  };

  const handleProductAdded = () => {
    if (selectedVariant) {
      const newItem = {
        img: selectedVariant.photo_src,
        gram: selectedVariant.size?.gram,
        name: product.name,
        aroma: selectedVariant.aroma,
        price:
          selectedVariant.price.discounted_price ||
          selectedVariant.price.total_price,
        count: count,
      };
      addBasketItems(newItem);
      increaseCount();
      setCount(1);
      showSnackbar("Ürün sepete eklendi", "success");
      setBasketText(true);
      setTimeout(() => {
        setBasketText(false);
      }, 2100);
    }
  };

  const culculateDiscount = (
    total_price: number,
    discounted_price: number | null
  ) => {
    if (discounted_price === null) return 0;
    const discountedAmount = total_price - discounted_price;
    const discountedPercentage = (discountedAmount / total_price) * 100;
    return Math.round(discountedPercentage);
  };

  const currentVariant = selectedVariant || product.variants[0];
  const currentPrice = currentVariant?.price;

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} key={product.id}>
              <img
                id="detail-img-id"
                className="detail-img"
                src={photo_url + selectedVariant.photo_src}
                alt=""
              />
              <div className="zoom-preview"></div>
              <Box component={"div"} className="mobileAccordion">
                <Accordion sx={{ border: "none", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ fontWeight: "bolder" }}
                  >
                    ÖZELLİKLER
                  </AccordionSummary>
                  <AccordionDetails>
                    {product.explanation.features || " "}
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ border: "none", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontWeight: "bolder" }}
                  >
                    BESİN İÇERİĞİ
                  </AccordionSummary>

                  <AccordionDetails>
                    <Stack
                      direction={"row"}
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
                        BESİN DEĞERİ
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          ml: "auto",
                          textAlign: "right",
                          fontSize: 18,
                        }}
                      >
                        25 g servis için
                      </Typography>
                    </Stack>
                    <Stack>
                      {product.explanation.nutritional_content.nutrition_facts.ingredients.map(
                        (ing, index) => (
                          <Stack
                            key={index}
                            direction={"row"}
                            sx={{
                              borderBottom: "1px solid #dbdbdb",
                              justifyContent: "space-between",
                              py: 1,
                            }}
                          >
                            <Typography>{ing.name}</Typography>
                            <Typography sx={{ textAlign: "right" }}>
                              {ing.amounts}
                            </Typography>
                          </Stack>
                        )
                      )}
                    </Stack>

                    <Box sx={{ my: 4 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bolder"
                        fontSize={18}
                      >
                        İÇİNDEKİLER
                      </Typography>
                      {product.explanation.nutritional_content.ingredients ? (
                        <>
                          {product.explanation.nutritional_content.ingredients.map(
                            (extra, index) => (
                              <Typography key={index} variant="subtitle2">
                                <strong>{extra.aroma + ": "}</strong>
                                {extra.value}
                              </Typography>
                            )
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </Box>

                    <Stack
                      direction={"row"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bolder", fontSize: 18 }}>
                        AMİNO ASİT DEĞERLERİ
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          textAlign: "right",
                          fontSize: 18,
                        }}
                      >
                        100 g
                      </Typography>
                    </Stack>

                    <Stack>
                      {product.explanation.nutritional_content.amino_acid_facts?.ingredients.map(
                        (ing, index) => (
                          <Stack
                            key={index}
                            direction={"row"}
                            sx={{
                              justifyContent: "space-between",
                              borderBottom: "1px solid #dbdbdb",
                              py: 1,
                            }}
                          >
                            <Typography>{ing.name}</Typography>
                            <Typography sx={{ textAlign: "right" }}>
                              {ing.amounts}
                            </Typography>
                          </Stack>
                        )
                      )}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ border: "none", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ fontWeight: "bolder" }}
                  >
                    KULLANIM ŞEKLİ
                  </AccordionSummary>

                  {product.explanation.usage.split("\n").map((usag, index) => (
                    <AccordionDetails sx={{ px: 2, py: 0.6 }} key={index}>
                      {usag.includes("Önemli Not") ? (
                        <>
                          {usag.split("Önemli Not")[0]}
                          <strong>Önemli Not</strong>
                          {usag.split("Önemli Not")[1]}
                        </>
                      ) : (
                        usag
                      )}
                    </AccordionDetails>
                  ))}
                </Accordion>
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
                    <FormLabel component="legend" sx={{ mb: 1}}>
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
                    <FormLabel component="legend" sx={{ mb: 2}}>
                      <strong>BOYUT:</strong>
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="aroma"
                      name="radio-buttons-group"
                    >
                      <Grid container spacing={2} mb={1}>
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
                                  width={110}
                                  flexDirection={"column"}
                                  justifyContent="center"
                                  alignItems="center"
                                  position="relative"
                                >
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={"bolder"}
                                  >
                                    {size?.gram
                                      ? size.gram === 1600
                                        ? "1.6KG" + (size?.total_services === 128 
                                              ? ` X 2 ADET` :"")
                                        : `${size.gram}G${
                                            size?.total_services === 128 
                                              ? ` X 2 ADET`
                                              : ""
                                          }`
                                      : "adet"}
                                  </Typography>
                                  <Typography variant="subtitle2">
                                    {size.total_services} servis
                                  </Typography>
                                  <span>
                                    {!isSizeAvailable(size) &&
                                      product.variants[index].price
                                        .discounted_price && (
                                        <span
                                          style={{
                                            position: "absolute",
                                            top: -25,
                                            left: "50%",
                                            padding: "3px 5px",
                                            fontSize: 12,
                                            transform: "translateX(-50%)",
                                            fontWeight: "bolder",
                                            backgroundColor: "red",
                                            color: "white",
                                            whiteSpace: "nowrap",
                                            border: 1,
                                          }}
                                        >
                                          {" "}
                                          %
                                          {culculateDiscount(
                                            product.variants[index].price
                                              .total_price,
                                            product.variants[index].price
                                              .discounted_price
                                          )}{" "}
                                          İNDİRİM
                                        </span>
                                      )}
                                  </span>
                                  <span
                                    style={{
                                      position: "absolute",
                                      height: 80,
                                      right: 0,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    {isSizeAvailable(size) && (
                                      <CloseIcon
                                        sx={{
                                          maxWidth: 100,
                                          fontSize: 70,
                                        }}
                                      />
                                    )}{" "}
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
                  <Stack direction={"row"} spacing={1}>
                    {currentPrice?.discounted_price ? (
                      <>
                        <span
                          style={{
                            fontWeight: "bolder",
                            color: "black",
                            fontSize: 35,
                            marginRight: 3,
                          }}
                        >
                          {Math.floor(currentPrice.discounted_price)} TL <br />
                        </span>
                        <span
                          style={{
                            fontWeight: "bolder",
                            color: "red",
                            fontSize: 35,
                            textDecoration: "line-through",
                            textDecorationThickness:"1.5px"
                          }}
                        >
                          {currentPrice.total_price} TL
                        </span>
                      </>
                    ) : (
                      <span style={{ fontWeight: "bolder", fontSize: 30}}>
                        {currentPrice.total_price} TL
                      </span>
                    )}
                  </Stack>
                  <Box>
                    <strong>
                      {selectedVariant?.size?.total_services}TL /Servis
                    </strong>
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
                      className="disCountButton"
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                    >
                      -
                    </button>
                    <span className="countCart">{count}</span>
                    <button
                      className="countButton"
                      style={{marginRight:"-0.5px"}}
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </Box>
                  <Button
                    id="added"
                    className="ShoppinAdButton"
                    variant="contained"
                    onClick={(e) =>
                      user ? hadleUserProductAdded(e) : handleProductAdded()
                    }
                  >
                    <ShoppingCartCheckoutIcon
                      color={!basketText ? "inherit" : "success"}
                      sx={{ mr: 1 }}
                    />
                    {!basketText ? "SEPETE EKLE" : "ÜRÜN SEPETE EKLENDİ"}
                  </Button>
                </Box>
              </Box>
              <Stack sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontSize={13}>
                  Son Kullanma Tarihi: 07.2025
                </Typography>
                <Typography mt={2}>
                  {product.explanation.description.split("\n- ")[0]}
                </Typography>
                <Box>
                  <ul style={{ padding: "5px 0" }}>
                    {product.explanation.description
                      .split("\n- ")
                      .slice(1)
                      .map((item, index) => (
                        <li
                          style={{ marginLeft: 18, padding: "5px 0" }}
                          key={index}
                        >
                          {item.replace("-", "")}
                        </li>
                      ))}
                  </ul>
                </Box>
                <Box component={"div"} className="lgAccordion">
                  <Accordion sx={{ border: "none", boxShadow: "none" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{ fontWeight: "bolder" }}
                    >
                      ÖZELLİKLER
                    </AccordionSummary>
                    <AccordionDetails>
                      {product.explanation.features || " "}
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ border: "none", boxShadow: "none" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      sx={{ fontWeight: "bolder" }}
                    >
                      BESİN İÇERİĞİ
                    </AccordionSummary>

                    <AccordionDetails>
                      <Stack
                        direction={"row"}
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Typography sx={{ fontWeight: "bolder" }}>
                          BESİN DEĞERİ
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bolder",
                            ml: "auto",
                            textAlign: "right",
                          }}
                        >
                          25 g servis için
                        </Typography>
                      </Stack>
                      <Stack>
                        {product.explanation.nutritional_content.nutrition_facts.ingredients.map(
                          (ing, index) => (
                            <Stack
                              key={index}
                              direction={"row"}
                              sx={{
                                borderBottom: "1px solid #dbdbdb",
                                justifyContent: "space-between",
                                py: 1,
                              }}
                            >
                              <Typography>{ing.name}</Typography>
                              <Typography sx={{ textAlign: "right" }}>
                                {ing.amounts}
                              </Typography>
                            </Stack>
                          )
                        )}
                      </Stack>

                      <Box>
                        {product.explanation.nutritional_content.ingredients ? (
                          <>
                            {product.explanation.nutritional_content.ingredients.map(
                              (extra, index) => (
                                <Typography key={index} variant="subtitle2">
                                  <strong>{extra.aroma + ": "}</strong>
                                  {extra.value}
                                </Typography>
                              )
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </Box>

                      <Stack
                        direction={"row"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: "bolder" }}>
                          AMİNO ASİT DEĞERLERİ
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "bolder", textAlign: "right" }}
                        >
                          100 g
                        </Typography>
                      </Stack>

                      <Stack>
                        {product.explanation.nutritional_content.amino_acid_facts?.ingredients.map(
                          (ing, index) => (
                            <Stack
                              key={index}
                              direction={"row"}
                              sx={{
                                justifyContent: "space-between",
                                borderBottom: "1px solid #dbdbdb",
                                py: 1,
                              }}
                            >
                              <Typography>{ing.name}</Typography>
                              <Typography sx={{ textAlign: "right" }}>
                                {ing.amounts}
                              </Typography>
                            </Stack>
                          )
                        )}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ border: "none", boxShadow: "none" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                      sx={{ fontWeight: "bolder" }}
                    >
                      KULLANIM ŞEKLİ
                    </AccordionSummary>

                    {product.explanation.usage
                      .split("\n")
                      .map((usag, index) => (
                        <AccordionDetails sx={{ px: 2, py: 0.6 }} key={index}>
                          {usag.includes("Önemli Not") ? (
                            <>
                              {usag.split("Önemli Not")[0]}
                              <strong>Önemli Not</strong>
                              {usag.split("Önemli Not")[1]}
                            </>
                          ) : (
                            usag
                          )}
                        </AccordionDetails>
                      ))}
                  </Accordion>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <SnackbarComponent />
      </Box>
    </>
  );
};

export default DetailsCmpOne;
