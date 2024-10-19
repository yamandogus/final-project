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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import NavbarModal from "../components/navbar/NavbarPopover";
import DrawerListCoponent from "../components/myCart/DrawerList";
import { useStore } from "./Count";
import { base_url, photo_url } from "../components/bestseller/BestSellers";
import { useDebounce } from "../components/navbar/Navbar";
import { LinksProps, SearchPropsPt } from "../services/type";

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
  const [searchModal, setSearchModal] = useState(false);
  const { countBasket } = useStore();
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      handleSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  const handleOpenModal =
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
      <Box sx={{ position: 'relative', zIndex: 1420 }} component="div" className="firstNavbar">
        <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
          <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
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
                    sx={{ zIndex: 2000}}
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
                        style:{
                          position:'fixed'
                        }
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
                        '&::-webkit-scrollbar': {
                          width: 0,
                          background: 'transparent',
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
                        <Typography>{debouncedSearch} adında bir ürün bulunamadı</Typography>
                      )}
                    </Box>
                  </Modal>
                </FormGroup>
                <Button
                  variant="outlined"
                  color="inherit"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  onMouseLeave={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 18 }} /> Hesap
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  sx={{ zIndex: 1700 }}
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
              <List onMouseLeave={handleCloseModal} sx={{ padding: 0, display: "flex", flexDirection: "row", gap: 2.3}}>
                {allProduct.map((list, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      onMouseEnter={handleOpenModal(index)}
                      className="navbar-list-item"
                      sx={{ flex: 1, justifyContent: "center", fontSize: 13, py: 2 }}
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
