import { useState, useEffect } from "react";
import {
  Button,
  Drawer,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLoaderData, useNavigate } from "react-router-dom";
import ShoppingCart from "../../pages/ShoppingCart";
import { useStore } from "../../services/Count";
import { userCartStore } from "../../store/cartStore";
import { LoaderData } from "../../Layout/Navbar";

function CartSection() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { countBasket } = useStore();
  const { cartData } = userCartStore();
  const {user} = useLoaderData() as LoaderData;
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleContinue = () => {
    setOpen(false);
    navigate("/PaymentPage");
  };

  return (
    <>
      <Button
        className="buttonBef"
        variant="contained"
        sx={{
          backgroundColor: "gray",
          px: 4,
          "&:hover": { backgroundColor: "gray" },
        }}
        startIcon={<ShoppingCartIcon sx={{ fontSize: 30 }} />}
        onClick={toggleDrawer(true)}
      >
        Sepetim
        <span className="count-basket">
          {user && user.first_name ? cartData && cartData.items?.length || 0 : countBasket}
        </span>
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          zIndex: 1560,
        }}
      >
        <ShoppingCart
          onCloseDrawer={toggleDrawer(false)}
          onCountine={handleContinue}
        />
      </Drawer>
    </>
  );
}

export default CartSection;
