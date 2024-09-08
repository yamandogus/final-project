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
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DrawerList from "../components/MyCart/DrawerList";
import SecondNavbar from "./SecondNavbar";
import NavbarModal from "../components/Navbar/NavbarPopover";

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

export async function LinksLoader() {
  try {
    const response = await fetch(
      "https://fe1111.projects.academy.onlyjs.com/api/v1/categories"
    );
    const data = await response.json();
    console.log(data);
    return { allProduct: data.data.data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { allProduct: [] };
  }
}

LinksLoader();

function Navbar() {
  const { allProduct = [] } = useLoaderData() as { allProduct: LinksProps[] };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOpenModal = (index: number) => (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
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
                <FormGroup>
                  <TextField
                    className="searchInput"
                    size="small"
                    placeholder="Lütfen bir ürün arayınız"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{
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
                </FormGroup>
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
                </Button>
                <Drawer
                  disableScrollLock
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerList onCountine={handleContinue} />
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
                     <Box
                     onMouseLeave={handleCloseModal}
                     >
                     <NavbarModal                   
                      links={allProduct[index]}
                      onClose={handleCloseModal}
                    />
                     </Box>
                    </Modal>
                  </React.Fragment>
                ))}

                <Tooltip
                  title={
                    <React.Fragment>
                      <Link
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                        }}
                        to={"/AllProducts"}
                      >
                        Tüm ürünler{" "}
                      </Link>
                    </React.Fragment>
                  }
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "black",
                        color: "white",
                        width: 200,
                      },
                    },
                  }}
                  slotProps={{
                    popper: {
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [0, 0],
                          },
                        },
                      ],
                    },
                  }}
                >
                  <ListItem
                    sx={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                    className="navbar-list-item"
                  >
                    TÜM ÜRÜNLER
                  </ListItem>
                </Tooltip>
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
