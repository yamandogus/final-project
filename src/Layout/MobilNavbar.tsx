import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import MobilNavComponent from "../components/secondNavbar/NavbarDrawer";
import ShoppingCart from "../pages/ShoppingCart";
import { useStore } from "../services/Count";
import DrawerListMenu from "../components/secondNavbar/DrawerList";
import SearchModal from "../components/secondNavbar/SearchModal";
import { userCartStore } from "../store/cartStore";
import { LoaderData } from "./Navbar";
import { LinksProps } from "../services/type";

const SecondNavbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCardOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinksProps | null>(null);
  const { allProduct = [] } = useLoaderData() as { allProduct: LinksProps[] };
  const { user } = useLoaderData() as LoaderData;
  const navigate = useNavigate();
  const { countBasket } = useStore();
  const { cartData } = userCartStore();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleDrawerBasket = (newOpen: boolean) => () => {
    setCardOpen(newOpen);
  };

  const toggleDrawerLink = (link: LinksProps | null) => () => {
    if (link) {
      setOpen(false);
      setSelectedLink(link);
      setOpenList(true);
    } else {
      setSelectedLink(null);
      setOpenList(false);
    }
  };

  const handleContinue = () => {
    setOpen(false);
    navigate("/PaymentPage");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} component={"div"} className="secondNavbar">
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "white", color: "black" }}>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              textAlign={"center"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to={"/Home"}>
                <img width={130} src="/images/Logo/Logo1.png" alt="" />
              </Link>
            </Typography>
            <Stack position={"relative"}>
              <Button
                onClick={toggleDrawerBasket(true)}
                className="shoppingCart"
              >
                <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
                <span className="count-basket">
                  {user && user.first_name
                    ? (cartData && cartData.items?.length) || 0
                    : countBasket}
                </span>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <SearchModal />
      </Box>
      <Drawer sx={{ zIndex: 99999 }} open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ backgroundColor: "rgba(229, 229, 229, 1)", height: "100%" }}>
          <DrawerListMenu
            allProduct={allProduct}
            toggleDrawer={toggleDrawer}
            toggleDrawerLink={toggleDrawerLink}
          />
        </Box>
      </Drawer>
      <Drawer
        sx={{ zIndex: 99999 }}
        anchor="right"
        open={cartOpen}
        onClose={toggleDrawerBasket(false)}
      >
        <ShoppingCart
          onCloseDrawer={toggleDrawerBasket(false)}
          onCountine={handleContinue}
        />
      </Drawer>
      <Drawer
        sx={{ zIndex: 99999 }}
        open={openList}
        onClose={toggleDrawerLink(null)}
        disableScrollLock
      >
        {selectedLink && (
          <MobilNavComponent
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawerLink(null)}
            linksClose={toggleDrawerLink(null)}
            links={selectedLink}
          />
        )}
      </Drawer>
    </>
  );
};

export default SecondNavbar;
