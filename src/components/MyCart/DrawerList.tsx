// src/components/Cart/DrawerList.tsx
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useLoaderData } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePaymentStore } from "../../services/Payement";
import { base_url, photo_url } from "../Bestseller/Bestseller";
import { useStore } from "../../services/Count";
import CloseIcon from "@mui/icons-material/Close";
import { LoaderData } from "../../layout/Navbar";
import { useState } from "react";

export interface CartItem {
  product_id: string;
  product_variant_id: string;
  product: string;
  product_variant_detail: {
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    photo_src: string;
  };
  pieces: number;
  unit_price: number;
  total_price: number;
}

export interface CartProps {
  total_price: number;
  items: CartItem[];
}

interface DrawerProps {
  onCountine: () => void;
  onCloseDrawer: () => void;
}

const DrawerList = ({ onCountine, onCloseDrawer }: DrawerProps) => {
  const { basketItems, removeItems, increaseCount, removeCountDrawer } =
    usePaymentStore();
  const { userCart, user } = useLoaderData() as LoaderData;
  const [userCartData, setUserCartData] = useState(userCart);
  const { removeCount } = useStore();

  const totolPrice = basketItems
    .reduce((arr, index) => arr + index.price * index.count, 0)
    .toFixed(2);

  const handleRemove = (index: number) => {
    removeItems(index);
    removeCount();
  };

  const handleDeleteUserCart = async (
    e: React.SyntheticEvent,
    index: number
  ) => {
    const userCartRemove = userCart.items[index];
    e.preventDefault();
    try {
      const deleteResponse = await fetch(base_url + "/users/cart", {
        method: "DELETE",
        body: JSON.stringify({
          product_id: userCartRemove.product_id,
          product_variant_id: userCartRemove.product_variant_id,
          pieces: userCartRemove.pieces,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const deleteResponseJson = (await deleteResponse.json()) as {
        product_id: number;
        product_variant_id: string;
        pieces: number;
      };
      console.log(deleteResponseJson);
      const userCartUpadete = userCart.items.filter((_,i)=> i !== index)
      const updateTotalPrice = userCartUpadete.reduce((total, item)=>(total + item.total_price),0)
      setUserCartData((prevCart) => ({
        ...prevCart,
        items: userCartUpadete,
        total_price: updateTotalPrice,
      }));
    } catch (error) {
      console.log("Ürün silinemedi", error);
    }
  };

  const handlePiecesDecrease = (index: number) => {
    setUserCartData((prev) =>{
      const updateItems = prev.items.map((item, i)=>{
        if(i === index){
          const newPieces = item.pieces > 1 ? item.pieces -1 :item.pieces;
          return{
            ...item,
            pieces:newPieces,
            total_price: newPieces * item.unit_price
          }
        }
        return item
      })
      const updateTotalPrice = updateItems.reduce(
        (total, item)=> total + item.total_price,0
      );
      return {
        ...prev,
        items:updateItems,
        total_price:updateTotalPrice
      }
    });
  };
  const handlePiecesIncrease = (index: number) => {
    setUserCartData((prev) => {
      const updatedItems = prev.items.map((item, i)=>{
        if(i ===index){
          const updatedPieces = item.pieces + 1;
          return{
            ...item,
            pieces:updatedPieces,
            total_price: updatedPieces * item.unit_price,
          }
        }
        return item
      });
      const updateTotalPrice = updatedItems.reduce(
        (total, item)=> total + item.total_price,0
      );
      return{
        ...prev,
        items:updatedItems,
        total_price: updateTotalPrice
      }
    });
  };
  return (
    <Box
      sx={{
        width: 480,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: 18,
            pt: 1,
            backgroundColor: "white",
          }}
        >
          SEPETİM
        </Typography>
        <CloseIcon
          onClick={() => onCloseDrawer()}
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            cursor: "pointer",
            "&:hover": {
              transition: "color 0.3s ease",
              color: "red",
            },
          }}
        />
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          p: 1,
        }}
      >
        {userCart && userCart.items && userCart.items.length > 0 ? (
          userCartData.items.map((basket, index) => (
            <Box mb={1} key={index}>
              <Card
                style={{
                  padding: "5px 0",
                  backgroundColor: "rgb(247, 247, 247)",
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <img
                    style={{
                      width: 90,
                      height: 90,
                      aspectRatio: 1 / 1,
                      objectFit: "cover",
                    }}
                    src={photo_url + basket.product_variant_detail.photo_src}
                    alt="Product"
                  />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        mt={1}
                        fontWeight={"bolder"}
                      >
                        {basket.product}
                      </Typography>
                      <Typography variant="subtitle1">
                        {basket.product_variant_detail.aroma}
                      </Typography>
                      <Typography variant="subtitle1">
                        {basket.product_variant_detail.size.total_services
                          ? basket.product_variant_detail.size.total_services +
                            "gr"
                          : ""}{" "}
                      </Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1,
                        }}
                      >
                        {(basket.unit_price * basket.pieces).toFixed(2)} TL
                      </Typography>
                      <Typography
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={"white"}
                        sx={{
                          boxShadow: `0 1px 1px rgba(0,1,1,0.5)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: 80,
                          maxWidth: 80,
                        }}
                      >
                        {basket.pieces > 1 ? (
                          <button
                            className="remove-button"
                            onClick={() => handlePiecesDecrease(index)}
                          >
                            -
                          </button>
                        ) : (
                          <DeleteIcon
                            onClick={(e) => handleDeleteUserCart(e, index)}
                            sx={{
                              fontSize: 20,
                              "&:hover": {
                                color: "red",
                              },
                            }}
                          />
                        )}
                        <strong style={{ margin: "0 15px" }}>
                          {basket.pieces}
                        </strong>
                        <button
                          onClick={() => handlePiecesIncrease(index)}
                          className="increase-button"
                        >
                          +
                        </button>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))
        ) : basketItems.length === 0 ? (
          <Typography>Sepet Boş</Typography>
        ) : (
          basketItems.map((basket, index) => (
            <Box mb={1} key={index}>
              <Card
                style={{
                  padding: "5px 0",
                  backgroundColor: "rgb(247, 247, 247)",
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <img
                    style={{
                      width: 90,
                      height: 90,
                      aspectRatio: 1 / 1,
                      objectFit: "cover",
                    }}
                    src={photo_url + basket.img}
                    alt="Product"
                  />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        mt={1}
                        fontWeight={"bolder"}
                      >
                        {basket.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        {basket.aroma}
                      </Typography>
                      <Typography variant="subtitle1">
                        {basket.gram ? basket.gram + "gr" : ""}{" "}
                      </Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1,
                        }}
                      >
                        {(basket.price * basket.count).toFixed(2)} TL
                      </Typography>
                      <Box
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={"white"}
                        sx={{
                          boxShadow: `0 1px 1px rgba(0,1,1,0.5)`,
                          display: "flex",
                          justifyContent: "space-between",
                          my: 1,
                          alignItems: "center",
                          minWidth: 80,
                          maxWidth: 80,
                        }}
                      >
                        {basket.count > 1 ? (
                          <button
                            className="remove-button"
                            onClick={() => removeCountDrawer(index)}
                          >
                            -
                          </button>
                        ) : (
                          <DeleteIcon
                            onClick={() => handleRemove(index)}
                            sx={{
                              fontSize: 20,
                              "&:hover": {
                                color: "red",
                              },
                            }}
                          />
                        )}
                        <strong>
                          {basket.count}
                        </strong>
                        <button
                          onClick={() => increaseCount(index)}
                          className="increase-button"
                        >
                          +
                        </button>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))
        )}
      </Box>
      <Box sx={{ padding: "16px", borderTop: "1px solid #ddd" }}>
        <Typography
          variant="subtitle1"
          fontSize={18}
          fontWeight={"bolder"}
          textAlign={"end"}
          mr={5}
        >
          Toplam{" "}
          {userCartData && userCartData.total_price
            ? userCartData.total_price.toFixed(2)
            : totolPrice}
          TL
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: "100%",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
          }}
        >
          <Link
            onClick={() => {
              if (user) {
                onCountine();
              }
            }}
            style={{ textDecoration: "none", color: "white" }}
            to={"PaymentPage"}
          >
            DEVAM ET
          </Link>{" "}
          <ArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default DrawerList;
