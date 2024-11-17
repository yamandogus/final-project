/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  FormGroup,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Stack,
  TextField,
  Modal,
  Backdrop,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import NavbarModal from "../components/Navbar/NavbarPopover";
import DrawerListCoponent, { CartItem } from "../components/MyCart/DrawerList";
import { base_url, photo_url } from "../components/Bestseller/Bestseller";
import { useDebounce } from "../components/Navbar/Navbar";
import { LinksProps, SearchPropsPt } from "../services/type";
import { AccountProps } from "../components/Account/Informations/MyAccount";
import SecondNavbar from "../components/secondNavbar";
import { useStore } from "../services/Count";

export async function LinksLoader() {
  try {
    //Category
    const response = await fetch(base_url + "/categories");
    const data = await response.json();
    console.log("category", data);
    //Account
    const responseAccount = await fetch(base_url + "/users/my-account", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const responseJsonAccount = await responseAccount.json();
    console.log(responseJsonAccount);
    //UserCart
    const responseCart = await fetch(base_url + "/users/cart", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const responseJsonCart = await responseCart.json();

    localStorage.setItem("login-user-carts",JSON.stringify(responseJsonCart))
    console.log(responseJsonCart);

    return {
      allProduct: data.data.data,
      user: responseJsonAccount.data || {},
      userCart: responseJsonCart.data || {},
    };
  } catch (error) {
    console.error("Veri alma hatası:", error);
    return { allProduct: [], userCart: {} };
  }
}

export interface LoaderData {
  allProduct: LinksProps[];
  user: AccountProps;
  userCart: {
    total_price: number;
    items: CartItem[];
  };
}

function Navbar() {
  const { allProduct = [], user} = useLoaderData() as LoaderData;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchPropsPt[]>([]);
  const [searchModal, setSearchModal] = useState(false);
  const { countBasket } = useStore();
  const debouncedSearch = useDebounce(search, 1000);
  const [userCartLocal, setUserCartLocal] = useState<LoaderData["userCart"] | null>(null);
  
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

  useEffect(() => {
    if (debouncedSearch) {
      handleSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  const handlelogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
    handleClose()
    navigate("/");
  };

  const handleOpenModal =
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (index: number) => (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setOpenModalIndex(index);
    };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContinue = () => {
    setOpen(false);
    navigate("/PaymentPage");
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSearchResults = async () => {
    if (search.length > 1) {
      try {
        const response = await fetch(
          base_url + `/products/?limit=1000&search=${debouncedSearch}`
        );
        const data = await response.json();
        setSearchResults(data.data.results);
        setSearchModal(true);
      } catch (error) {
        console.log("Ürün bulunamadı: ", error);
        setSearchResults([]);
        setSearchModal(true);
      }
    }
  };

  const handleCloseClear = () => {
    setSearchModal(false);
    setSearch("");
  };

  useEffect(() => {
    if (!debouncedSearch) {
      setSearchModal(false);
    }
  }, [debouncedSearch]);

  return (
    <>
      <Box
        sx={{ position: "relative", zIndex: 1420 }}
        component="div"
        className="firstNavbar"
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Toolbar>
                <Typography variant="h6" component="div">
                  <Link to="/Home">
                    <img
                      className="navImg"
                      width={160}
                      src="/images/Logo/Logo1.png"
                      alt=""
                    />
                  </Link>
                </Typography>
              </Toolbar>
              <Stack direction="row" spacing={2}>
                <FormGroup
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchResults();
                  }}
                >
                  <TextField
                    sx={{ zIndex: 2000 }}
                    size="small"
                    placeholder="Lütfen bir ürün arayınız"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearchResults();
                      }
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: "white",
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            type="submit"
                            onClick={handleSearchResults}
                            sx={{
                              padding: "6.5px 0 5.8px 0px",
                              zIndex: 15,
                              color: "white",
                              borderRadius: "0 1px 1px 0",
                              backgroundColor: "rgba(145, 145, 145, 1)",
                              "&:hover": {
                                backgroundColor: "rgba(145, 145, 145, 1)",
                              },
                              border: "2px solid rgba(145, 145, 145, 1)",
                            }}
                          >
                            Ara
                          </Button>
                        </InputAdornment>
                      ),
                      sx: {
                        width: "100%",
                        maxWidth: 400,
                        padding: 0,
                      },
                    }}
                  />
                  <Modal
                    open={searchModal}
                    disableScrollLock={true}
                    onClose={handleCloseClear}
                    slots={{
                      backdrop: Backdrop,
                    }}
                    slotProps={{
                      backdrop: {
                        timeout: 500,
                        style: {
                          position: "fixed",
                        },
                      },
                    }}
                    sx={{
                      zIndex: 1500,
                    }}
                    disableAutoFocus={true}
                    disableEnforceFocus={true}
                  >
                    <Box
                      onMouseLeave={handleCloseClear}
                      sx={{
                        mt: 10,
                        width: "35vw",
                        transform: "translateX(120%)",
                        py: 1,
                        backgroundColor: "white",
                        borderRadius: 2,
                        position: "relative",
                        maxHeight: "450px",
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": {
                          width: 0,
                          background: "transparent",
                        },
                      }}
                    >
                      {searchResults.length > 0 ? (
                        searchResults.map((search) => (
                          <Box
                            sx={{
                              mx: 2,
                              my: 2,
                              display: "flex",
                              justifyContent: "space-between",
                              gap: 1,
                              alignItems: "self-start",
                              textTransform: "none",
                              textDecoration: "none",
                              color: "black",
                              p: 1,
                              borderRadius: 2,
                              border: "1px solid gray",
                            }}
                            key={search.id}
                            onClick={handleCloseClear}
                            component={Link}
                            to={`/products/${search.slug}`}
                          >
                            <Box>
                              <img
                                src={photo_url + search.photo_src}
                                alt=""
                                style={{
                                  borderRadius: 5,
                                  width: 90,
                                  aspectRatio: 1 / 1,
                                }}
                              />
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                              <Stack direction="column">
                                <Typography variant="subtitle1">
                                  {search.name}
                                </Typography>
                                <Typography
                                  textTransform={"lowercase"}
                                  color="gray"
                                  variant="subtitle2"
                                >
                                  {search.short_explanation}
                                </Typography>
                              </Stack>
                            </Box>
                            <Stack
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                ml: "auto",
                              }}
                            >
                              <Typography fontWeight={"bolder"}>
                                {search.price_info.discounted_price
                                  ? search.price_info.discounted_price
                                  : search.price_info.total_price}{" "}
                                TL
                              </Typography>
                            </Stack>
                          </Box>
                        ))
                      ) : (
                        <Typography>
                          {debouncedSearch} adında bir ürün bulunamadı
                        </Typography>
                      )}
                    </Box>
                  </Modal>
                </FormGroup>
                  <Button
                    variant="outlined"
                    color="inherit"
                    aria-haspopup="true"
                    onClick={handleClick}
                    id="demo-positioned-button"
                    aria-expanded={anchorEl ? "true" : undefined}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      width: "130px",
                      padding: "6px 10px",
                    }}
                  >
                    <PersonOutlineIcon
                      sx={{ fontSize: 20, position: "relative", top: "-1px" }}
                    />
                    {user && user.first_name ? user.first_name : "Hesap"}
                    <ArrowDropDownIcon
                      sx={{ fontSize: 22, position: "relative", top: "-1px" }}
                    />
                  </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  disableScrollLock
                  MenuListProps={{ onMouseLeave: handleClose }}
                  sx={{ zIndex: 1420, display: "flex", alignItems: "center" }}
                >
                  {user && user.first_name ? (
                    <Box>
                      <MenuItem key="my-account" onClick={handleClose}>
                        <Link className="accountLinkNav" to="MyAccount">
                          Hesabım
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem key="logout" onClick={handlelogout}>
                        <Link className="accountLinkNav" to="/">
                          Çıkış Yap
                        </Link>
                      </MenuItem>
                    </Box>
                  ) : (
                    <Box>
                      <MenuItem key="login" onClick={handleClose}>
                        <Link className="accountLinkNav" to="Login">
                          Üye Girişi
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem key="signup" onClick={handleClose}>
                        <Link className="accountLinkNav" to="SingUp">
                          Üye Ol
                        </Link>
                      </MenuItem>
                    </Box>
                  )}
                </Menu>
                <Button
                  className="buttonBef"
                  variant="contained"
                  sx={{
                    backgroundColor: "gray",
                    px: 3.5,
                    "&:hover": { backgroundColor: "gray" },
                  }}
                  startIcon={<ShoppingCartIcon sx={{ fontSize: 30, mx: 1 }} />}
                  onClick={toggleDrawer(true)}
                >
                  Sepet
                  <span className="count-basket">
                    {userCartLocal && userCartLocal?.items
                      ? userCartLocal.items.length
                      : countBasket}
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
                  <DrawerListCoponent
                    onCloseDrawer={toggleDrawer(false)}
                    onCountine={handleContinue}
                  />
                </Drawer>
              </Stack>
            </Stack>
          </Container>
          <Box sx={{ backgroundColor: "black", color: "white" }}>
            <Container>
              <List
                onMouseLeave={handleCloseModal}
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2.3,
                }}
              >
                {allProduct.map((list, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      onMouseEnter={handleOpenModal(index)}
                      className="navbar-list-item"
                      sx={{
                        flex: 1,
                        justifyContent: "center",
                        fontSize: 13,
                        py: 2,
                        cursor: "pointer",
                      }}
                      color="inherit"
                    >
                      {list.name}
                    </ListItem>
                    <Modal
                      open={openModalIndex === index}
                      onClose={handleCloseModal}
                      disableEnforceFocus={true}
                      disableScrollLock={true}
                      disableAutoFocus={true}
                      slots={{
                        backdrop: Backdrop,
                      }}
                      slotProps={{
                        backdrop: {
                          timeout: 0,
                        },
                      }}
                      sx={{
                        zIndex: 1400,
                      }}
                    >
                      <Box onMouseLeave={handleCloseModal}>
                        <NavbarModal
                          links={allProduct[index]}
                          onClose={handleCloseModal}
                        />
                      </Box>
                    </Modal>
                  </React.Fragment>
                ))}
                <ListItem
                  component={Link}
                  to={"/AllProducts"}
                  onMouseEnter={handleCloseModal}
                  sx={{
                    color: "white",
                    flex: 1,
                    justifyContent: "center",
                    fontSize: 13,
                    "&::after": {
                      display: "none",
                    },
                  }}
                  className="navbar-list-item"
                >
                  TÜM ÜRÜNLER
                </ListItem>
              </List>
            </Container>
          </Box>
        </AppBar>
      </Box>
      <SecondNavbar />
    </>
  );
}

export default Navbar;
