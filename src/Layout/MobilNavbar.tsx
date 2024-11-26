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
import { useEffect, useState } from "react";
import MobilNavComponent from "../components/secondNavbar/NavbarDrawer";
import ShoppingCart from "../pages/ShoppingCart";
import { useStore } from "../services/Count";
import { useStoreUserCart } from "../services/userCount";
import { LoaderData } from "./Navbar";
import DrawerListMenu from "../components/secondNavbar/DrawerList";
import SearchModal from "../components/secondNavbar/SearchModal";
export interface LinksProps {
  id: string;
  name: string;
  icon?: JSX.Element;
  link?: string;
  slug?: string;
  order?: number;
  top_sellers?: boolean;
  children?: LinksProps[];
}

const SecondNavbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCardOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinksProps | null>(null);
  const { allProduct = [] } = useLoaderData() as { allProduct: LinksProps[] };
  const navigate = useNavigate();
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
              <Button onClick={toggleDrawerBasket(true)} className="shoppingCart">
                <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
                <span className="count-basket">
                  {userCartLocal && userCartLocal?.items
                    ? userCartBasket || 0
                    : countBasket}
                </span>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
          <SearchModal/>
      </Box>
      <Drawer
        sx={{ zIndex: 99999 }}
        open={open}
        onClose={toggleDrawer(false)}
        disableScrollLock
      >
        <DrawerListMenu
        allProduct={allProduct}
        toggleDrawer={toggleDrawer}
        toggleDrawerLink={toggleDrawerLink}
        />
      </Drawer>
      <Drawer
        sx={{ zIndex: 99999 }}
        anchor="right"
        open={cartOpen}
        onClose={toggleDrawerBasket(false)}
        disableScrollLock
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
