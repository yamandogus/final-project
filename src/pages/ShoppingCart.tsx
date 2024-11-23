// src/components/Cart/ShoppingCart.tsx
import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useLoaderData } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { usePaymentStore } from "../services/Payement";
import { LoaderData } from "../layout/Navbar";
import { useStore } from "../services/Count";
import { base_url } from "../components/Bestseller/Bestseller";
import UserCartItems from "../components/MyCart/UserCart";
import GuesCartItems from "../components/MyCart/GuesCartItems";
import { useStoreUserCart } from "../services/userCount";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ShoppingCartProps {
  onCountine: () => void;
  onCloseDrawer: () => void;
}

const ShoppingCart = ({ onCountine, onCloseDrawer }: ShoppingCartProps) => {
  const { basketItems, removeItems, increaseCount, removeCountDrawer } =
    usePaymentStore();
  const { userCart, user } = useLoaderData() as LoaderData;
  const [userCartData, setUserCartData] = useState(userCart);
  const { removeCount } = useStore();
  const { removeCountUserCart, increaseCountUserCart, decreaseCountUserCart } =
    useStoreUserCart();

  const totolPrice = basketItems
    .reduce((arr, index) => arr + index.price * index.count, 0)
    .toFixed(2);

  useEffect(() => {
    console.log("useEffect");
    const func = async () => {
      const response = await fetch(base_url + "/users/cart", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      setUserCartData(responseJson.data);
    };
    func();
  }, []);

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
      await fetch(base_url + "/users/cart", {
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

      const userCartUpdate = userCart.items.filter((_, i) => i !== index);
      const updateTotalPrice = userCartUpdate.reduce(
        (total, item) => total + item.total_price,
        0
      );

      setUserCartData((prevCart) => ({
        ...prevCart,
        items: userCartUpdate,
        total_price: updateTotalPrice,
      }));
      removeCountUserCart();
    } catch (error) {
      console.log("Ürün silinemedi", error);
    }
  };

  const handlePiecesDecrease = async (index: number) => {
    console.log("test");
    try {
      const response = await fetch(base_url + "/users/cart", {
        method: "DELETE",
        body: JSON.stringify({
          product_id: userCart.items[index].product_id,
          product_variant_id: userCart.items[index].product_variant_id,
          pieces: 1,
        }),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const update = await response.json();
      console.log(update);
      if (response.ok) {
        setUserCartData((prev) => {
          const updateItems = prev.items.map((item, i) => {
            if (i === index) {
              const newPieces = item.pieces > 1 ? item.pieces - 1 : item.pieces;
              return {
                ...item,
                pieces: newPieces,
                total_price: newPieces * item.unit_price,
              };
            }
            return item;
          });
          const updateTotalPrice = updateItems.reduce(
            (total, item) => total + item.total_price,
            0
          );
          return {
            ...prev,
            items: updateItems,
            total_price: updateTotalPrice,
          };
        });
        decreaseCountUserCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("güncellenen veri log", userCartData);
  console.log("backend log", userCart);

  const handlePiecesIncrease = async (index: number) => {
    console.log("test kes aq ");

    setUserCartData((prev) => {
      const updatedItems = prev.items.map((item, i) => {
        console.log("girdi");

        if (i === index) {
          console.log("girdi 2");

          const updatedPieces = item.pieces + 1;
          return {
            ...item,
            pieces: updatedPieces,
            total_price: updatedPieces * item.unit_price,
          };
        }
        console.log("item", item);
        return item;
      });
      const updateTotalPrice = updatedItems.reduce(
        (total, item) => total + item.total_price,
        0
      );
      console.log("totol", updateTotalPrice);

      return {
        ...prev,
        items: updatedItems,
        total_price: updateTotalPrice,
      };
    });
    increaseCountUserCart();
    console.log("güncellenen veri", userCartData);
    console.log("backend", userCart);
    try {
      const response = await fetch(base_url + "/users/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: userCart.items[index].product_id,
          product_variant_id: userCart.items[index].product_variant_id,
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
        {userCart && userCart.items && userCart.items.length > 0 ? (
          <UserCartItems
            items={userCartData.items}
            onDecrease={handlePiecesDecrease}
            onIncrease={handlePiecesIncrease}
            onDelete={handleDeleteUserCart}
          />
        ) : basketItems.length === 0 ? (
          <DotLottieReact
            src="https://lottie.host/c8c3c54d-7fd8-45b7-84cc-c5c1468ba7ca/XiO6bs4uDh.lottie"
            loop
            autoplay
          />
        ) : (
          <GuesCartItems
            items={basketItems}
            onDecrease={removeCountDrawer}
            onIncrease={increaseCount}
            onDelete={handleRemove}
          />
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
                console.log("cart istekleme");
                onCountine();
              }
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="PaymentPage"
          >
            DEVAM ET
          </Link>{" "}
          <ArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
