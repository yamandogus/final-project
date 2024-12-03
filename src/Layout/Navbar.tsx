/* eslint-disable react-hooks/exhaustive-deps */

import { Box } from "@mui/material";
import { base_url } from "../components/Bestseller/Bestseller";
import { CartItem, LinksProps } from "../services/type";
import { AccountProps } from "../components/Account/Informations/MyAccount";
import { reviews } from "../data/comment-dumy";
import MainNavbar from "../components/Navbar/MainNavbar";
import { userCartStore } from "../store/cartStore";


export interface LoaderData {
  allProduct: LinksProps[];
  user: AccountProps;
  userCart: {
    total_price: number;
    items: CartItem[];
  };
}



export async function LinksLoader() {
  try {
    const [categoryResponse, accountResponse, cartResponse] = await Promise.all([
      fetch(base_url + "/categories"),
      fetch(base_url + "/users/my-account", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      }),
      fetch(base_url + "/users/cart", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      }),
    ]);
    const [categories, accountData, cartData] = await Promise.all([
      categoryResponse.json(),
      accountResponse.json(),
      cartResponse.json(),
    ]);
    
    if(cartData.data){
      userCartStore.getState().initializeCart(cartData.data)
    }

    console.log("Category Data:", categories);
    console.log("Account Data:", accountData);
    console.log("Cart Data:", cartData);

    localStorage.setItem("login-user-carts", JSON.stringify(cartData));
    localStorage.setItem("product-comments", JSON.stringify(reviews));

    return {
      allProduct: categories.data.data,
      user: accountData.data || {},
      userCart: cartData.data || {},
    };
  } catch (error) {
    console.error("Veri alma hatası:", error);
    return { allProduct: [], userCart: {} };
  }
}


function Navbar() {
  return (
    <Box >
      <MainNavbar />
    </Box>
  );
}

export default Navbar;