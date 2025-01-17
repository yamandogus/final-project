import { Box } from "@mui/material";
import { CartItem, LinksProps } from "../../services/Type";
import { reviews } from "../../data/CommentDumy";
import MainNavbar from "./components/MainNavbar";
import { userCartStore } from "../../store/cartStore";
import { base_url } from "../../components/Bestseller/BestsellerPage";
import { AccountProps } from "../../pages/Account/components/Informations/MyAccount";

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
    const [categoryResponse, accountResponse, cartResponse, regionResponse] =
      await Promise.all([
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
        fetch(base_url + "/world/region?limit=81&offset=0&country-name=turkey"),
      ]
    );
    const [categories, accountData, cartData, regionData] = await Promise.all([
      categoryResponse.json(),
      accountResponse.json(),
      cartResponse.json(),
      regionResponse.json(),
    ]);

    if (cartData.data) {
      userCartStore.getState().initializeCart(cartData.data);
    }
    localStorage.setItem("login-user-carts", JSON.stringify(cartData));
    localStorage.setItem("product-comments", JSON.stringify(reviews));
    localStorage.setItem("region-data", JSON.stringify(regionData.data.results));
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
    <Box>
      <MainNavbar />
    </Box>
  );
}

export default Navbar;
