// src/components/Cart/ShoppingCart.tsx
import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useLoaderData } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { usePaymentStore } from "../services/Payement";
import { LoaderData } from "../layout/Navbar";
import { useStore } from "../services/Count";
import { base_url } from "../components/Bestseller/Bestseller";
import UserCartItems from "../components/MyCart/UserCart";
import { useStoreUserCart } from "../services/userCount";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { userCartStore } from "../store/cartStore";
import GuestCartItems from "../components/MyCart/GuesCartItems";

interface ShoppingCartProps {
  onCountine: () => void;
  onCloseDrawer: () => void;
}

const ShoppingCart = ({ onCountine, onCloseDrawer }: ShoppingCartProps) => {
  const { basketItems, removeItems, increaseCount, removeCountDrawer } =
    usePaymentStore();
  const { userCart,user } = useLoaderData() as LoaderData;
  const { cartData, updateCartData } = userCartStore();
  const { removeCount } = useStore();
  const { removeCountUserCart } = useStoreUserCart();

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
    if(!cartData) return;
    const itemToDelete  = cartData.items[index];
    e.preventDefault();
    try {
    const responseDelete =  await fetch(base_url + "/users/cart", {
        method: "DELETE",
        body: JSON.stringify({
          product_id: itemToDelete.product_id,
          product_variant_id: itemToDelete.product_variant_id,
          pieces: itemToDelete.pieces,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if(responseDelete.ok){
        const updatedItems  = cartData.items.filter((_, i) => i !== index);
        const updateTotalPrice = updatedItems .reduce(
          (total, item) => total + item.total_price,
          0
        );
        updateCartData({
          items: updatedItems,
          total_price: updateTotalPrice,
        })
      }


      removeCountUserCart();
    } catch (error) {
      console.log("Ürün silinemedi", error);
    }
  };

  const handlePiecesDecrease = async (index: number) => {
    if (!cartData) return;
    
    const currentItem = cartData.items[index];
    if (currentItem.pieces <= 1) return;

    try {
      const response = await fetch(base_url + "/users/cart", {
        method: "DELETE",
        body: JSON.stringify({
          product_id: currentItem.product_id,
          product_variant_id: currentItem.product_variant_id,
          pieces: 1,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const updatedItems = cartData.items.map((item, i) => {
          if (i === index) {
            const newPieces = item.pieces - 1;
            return {
              ...item,
              pieces: newPieces,
              total_price: newPieces * item.unit_price,
            };
          }
          return item;
        });

        const updateTotalPrice = updatedItems.reduce(
          (total, item) => total + item.total_price,
          0
        );

        updateCartData({
          items: updatedItems,
          total_price: updateTotalPrice,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePiecesIncrease = async (index: number) => {
    if(!cartData) return;
    const currentItems = cartData.items[index]

    const updatedItems = cartData.items.map((item, i)=>{
      if(i === index){
        const updatedPecies = item.pieces + 1;
        return{
          ...item,
          pieces: updatedPecies,
          total_price: updatedPecies * item.unit_price
        }
      }
      return item;  
    })
    const updatedTotalPrice = updatedItems.reduce(
      (total, item) => total + item.total_price,0
    )

    updateCartData({
      items: updatedItems,
      total_price: updatedTotalPrice
    })

    try {
      const response = await fetch(base_url + "/users/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: currentItems.product_id,
          product_variant_id: currentItems.product_variant_id,
          pieces: 1,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const update = await response.json();
      console.log(update);
    } catch (error) {
      console.log(error);
    }
  };

console.log(basketItems);

  return (
    <Box
      sx={{
        width: { xs: 350, md: 480 },
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
          onClick={onCloseDrawer}
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
      <Box sx={{ flex: 1, overflowY: "auto", overflowX: "hidden", p: 1 }}>
        {userCart && userCart?.items ? (
          <>
            {cartData && cartData.items.length > 0 ? (
              <UserCartItems
                items={cartData.items}
                onDecrease={handlePiecesDecrease}
                onIncrease={handlePiecesIncrease}
                onDelete={handleDeleteUserCart}
              />
            ) : (
              <Box>
                <DotLottieReact
                  src="https://lottie.host/c8c3c54d-7fd8-45b7-84cc-c5c1468ba7ca/XiO6bs4uDh.lottie"
                  loop
                  autoplay
                />
                user
              </Box>
            )}
          </>
        ) : (
          <>
            {basketItems.length > 0 ? (
              <GuestCartItems
                items={basketItems}
                onDecrease={removeCountDrawer}
                onIncrease={increaseCount}
                onDelete={handleRemove}
              />
            ) : (
              <Box>
                <DotLottieReact
                  src="https://lottie.host/c8c3c54d-7fd8-45b7-84cc-c5c1468ba7ca/XiO6bs4uDh.lottie"
                  loop
                  autoplay
                />
                basket
              </Box>
            )}
          </>
        )}
      </Box>
      <Box sx={{ padding: "16px", borderTop: "1px solid #ddd" }}>
        <Typography
          variant="subtitle1"
          fontSize={18}
          fontWeight="bolder"
          textAlign="end"
          mr={5}
        >
          {userCart && userCart?.items ? (
            <>
              {cartData && cartData.items.length > 0
                ? `Toplam ${" "}${cartData.total_price.toFixed(2)}${" "} TL`
                : "SEPET BOŞ"}
            </>
          ) : (
            <>
              {basketItems.length > 0
                ? `Toplam ${" "}${totolPrice}${" "} TL`
                : "SEPET BOŞ"}
            </>
          )}
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
            to={userCart && userCart?.items ? (
              cartData && cartData.items.length > 0 ? "PaymentPage" : "AllProducts"
            ) : (
              basketItems.length > 0 ? "PaymentPage" : "AllProducts"
            )}
          >
            {userCart && userCart?.items ? (
              <>{cartData && cartData.items.length > 0 ? "DEVAM ET" : "SEPETE ÜRÜN EKLE"}</>
            ) : (
              <>{basketItems.length > 0 ? "DEVAM ET" : "SEPETE ÜRÜN EKLE"}</>
            )}
          </Link>{" "}
          <ArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
