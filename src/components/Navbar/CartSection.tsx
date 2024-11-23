import { useEffect, useState } from "react";
import {
  Button,
  Drawer,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../../pages/ShoppingCart";
import { useStore } from "../../services/Count";
import { LoaderData } from "../../layout/Navbar";
import { useStoreUserCart } from "../../services/userCount";

function CartSection() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { countBasket } = useStore();
  const { userCartBasket } = useStoreUserCart();
  const [userCartLocal, setUserCartLocal] = useState<
    LoaderData["userCart"] | null
  >(null);

  useEffect(() => {
    const locaUserCart = localStorage.getItem("login-user-carts");
    if (locaUserCart) {
      try {
        const parsedData = JSON.parse(locaUserCart);
        setUserCartLocal(parsedData.data);
      } catch (error) {
        console.error("Geçersiz :", error);
      }
    }
  }, []);

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
          {userCartLocal && userCartLocal?.items ? userCartBasket || 0 : countBasket}
        </span>
      </Button>
      <Drawer
        disableScrollLock
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
