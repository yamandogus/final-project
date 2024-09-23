import React, { useState } from "react";
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
  Alert,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import NavbarModal from "../components/Navbar/NavbarPopover";
import DrawerListCoponent from "../components/MyCart/DrawerList";
import { useStore } from "./Count";
import { photo_url } from "../components/Bestseller/CokSatanlar";

export interface LinksProps {
  id: string;
  name: string;
  slug: string;
  order: number;
  children: {
    id: string;
    name: string;
    slug: string;
    order: number;
    sub_children: {
      name: string;
      slug: string;
      order: number;
    }[];
  }[];
  top_sellers: {
    name: string;
    slug: string;
    description: string;
    picture_src: string;
  }[];
}

export interface SearchPropsPt {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: null | number;
    total_price: number;
    discounted_price: number | null;
    price_per_servings: number;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}

export async function LinksLoader() {
  try {
    const response = await fetch(
      "https://fe1111.projects.academy.onlyjs.com/api/v1/categories"
    );
    const data = await response.json();
    return { allProduct: data.data.data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { allProduct: [] };
  }
}

function Navbar() {
  const { allProduct = [] } = useLoaderData() as { allProduct: LinksProps[] };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchPropsPt[]>([]);
  const [searchModal, setSearchModal] = useState(searchResults.length >= 1);
  const [openSnackbar, setOpenSnackBar] = useState(false);
  const { countBasket } = useStore();

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
    if (search.trim() === "") {
      setOpenSnackBar(true);
      setTimeout(() => {
        setOpenSnackBar(false); 
      }, 1000);
      return; 
    }
  
    
    try {
      const response = await fetch(
        `https://fe1111.projects.academy.onlyjs.com/api/v1/products/?limit=1000&search=${search}`
      );
      const data = await response.json();
      setSearchResults(data.data.results); 
      setSearchModal(true); 
    } catch (error) {
      console.log("Ürün bulunamadı: ", error);
      setSearchResults([]); 
      setSearchModal(true); 
    }
  };
  

  const hadleCloseClear = () => {
    setSearchModal(false);
    setSearch("");
  };



  return (
    <>
      <Box component="div" className="firstNavbar">
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
              <Stack className="navAs" direction="row" spacing={2}>
                <FormGroup
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchResults();
                  }}
                >
                  <TextField
                    className="searchInput"
                    size="small"
                    placeholder="Lütfen bir ürün arayınız"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearchResults();
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            type="submit"
                            onClick={handleSearchResults}
                            sx={{
                              padding: "6.5px 0 5.8px 0px",
                              zIndex: 15,
                              color: "white",
                              borderRadius: "0 2px 2px 0",
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
                    sx={{
                      mt: 10,
                      left: "45%",
                      width: "35vw",
                    }}
                    disableScrollLock
                    open={searchModal}
                    onClose={() => setSearchModal(false)}
                  >
                    <>
                      <Box
                        sx={{
                          py: 1,
                          backgroundColor: "white",
                          borderRadius: 2,
                          position: "relative",
                          maxHeight: "550px",
                          overflowY: "scroll",
                          overflowX: "hidden",
                          "&::-webkit-scrollbar": {
                            width: 0,
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
                              onClick={() => hadleCloseClear()}
                              component={Link}
                              to={`/products/${search.slug}`}
                            >
                              <Box>
                                <img
                                  width={90}
                                  src={photo_url + search.photo_src}
                                  alt=""
                                  style={{
                                    borderRadius: 5,
                                  }}
                                />
                              </Box>
                              <Box
                                sx={{
                                  flexGrow: 1,
                                }}
                              >
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
                          <Typography>Ürün Bulunamadı</Typography>
                        )}
                      </Box>
                    </>
                  </Modal>
                </FormGroup>
                {openSnackbar && (
                  <Alert
                    sx={{ position: "absolute", right: '55%', top:'10px' }}
                    severity="warning"
                  >
                    Lütfen ürün ismi giriniz
                  </Alert>
                )}
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <PersonIcon
                    sx={{
                      fontSize: 18,
                    }}
                  />{" "}
                  Hesap
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  disableScrollLock
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} sx={{ width: "129px" }}>
                    <Link className="accountLinkNav" to="MyAccount">
                      Hesabım
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to="Login">
                      Üye Girişi
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to="SingUp">
                      Üye Ol
                    </Link>
                  </MenuItem>
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
                  <span className="count-basket">{countBasket}</span>
                </Button>
                <Drawer
                  disableScrollLock
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerListCoponent
                  onCloseDrawer={toggleDrawer(false)} 
                  onCountine={handleContinue} />
                </Drawer>
              </Stack>
            </Stack>
          </Container>
          <Box sx={{ backgroundColor: "black", color: "white" }}>
            <Container>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2.3,
                }}
              >
                {allProduct.map((list, index) => (
                  <React.Fragment key={list.id}>
                    <ListItem
                      onClick={handleOpenModal(index)}
                      className="navbar-list-item"
                      sx={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                      color="inherit"
                    >
                      {list.name}
                    </ListItem>
                    <Modal
                      sx={{
                        zIndex: 99999,
                      }}
                      disableScrollLock
                      open={openModalIndex === index}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
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
                <React.Fragment></React.Fragment>
                <ListItem
                  component={Link}
                  to={"/AllProducts"}
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
