import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import DrawerList from "../MyCart/DrawerList";

interface ListItemProps {
  listitem: string;
  title: string;
  tooltipContent:React.ReactNode;
  
}

const listItemsData: ListItemProps[] = [
  {
    listitem: 'PROTEİN',
    title: 'Protein',
    tooltipContent: (
      <Typography>
        <strong>Protein:</strong> Essential for muscle growth and repair.
      </Typography>
    ),
  },
  {
    listitem: 'SPOR GIDALARI',
    title: 'Spor Gıdaları',
    tooltipContent: (
      <Typography>
        <strong>Spor Gıdaları:</strong> Nutritional products for sports enthusiasts.
      </Typography>
    ),
  },
  {
    listitem: 'SAĞLIK',
    title: 'Sağlık',
    tooltipContent: (
      <Typography>
        <strong>Sağlık:</strong> Products for maintaining overall health.
      </Typography>
    ),
  },
  {
    listitem: 'GIDA',
    title: 'Gıda',
    tooltipContent: (
      <Typography>
        <strong>Gıda:</strong> General food items.
      </Typography>
    ),
  },
  {
    listitem: 'VİTAMİN',
    title: 'Vitamin',
    tooltipContent: (
      <Typography>
        <strong>Vitamin:</strong> Supplements for daily nutritional needs.
      </Typography>
    ),
  },
  {
    listitem: 'TÜM ÜRÜNLER',
    title: 'Tüm Ürünler',
    tooltipContent: (
      <Typography>
        <strong>Tüm Ürünler:</strong> Browse all available products.
      </Typography>
    ),
  },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", flexGrow: 1 }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Toolbar>
              <Typography variant="h6" component="div">
                <Link to={"/page1"}>
                  <img width={160} src="/images/Logo/Logo1.png" alt="" />
                </Link>
              </Typography>
            </Toolbar>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<PersonIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
              >
                Hesap
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link className="accountLink" to={"MyAccount"}>
                    Hesabım
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className="accountLink" to={"SingUp"}>
                    Üye Ol
                  </Link>
                </MenuItem>
              </Menu>
              <Button
                className="buttonBef"
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  px: 4,
                  "&:hover": { backgroundColor: "gray" },
                }}
                startIcon={<ShoppingCartIcon sx={{ fontSize: 30, mx: 1 }} />}
                onClick={toggleDrawer(true)}
              >
                Sepet
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <DrawerList/>
              </Drawer>
            </Stack>
          </Stack>
        </Container>
        <Box>
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <Container>
              <List sx={{ display: "flex", flexDirection: "row" }}>
                {listItemsData.map((list,index) => (
                  <Tooltip
                   key={index}
                    title={list.tooltipContent}
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "offset",
                            options: {
                              offset: [3, 5],
                            },
                          },
                        ],
                        style: {
                          width: "auto",
                        },
                      },
                      tooltip: {
                        sx: {
                          padding: 3,
                          color:'black',
                          backgroundColor: "rgb(255, 255, 255)",
                          width: "auto",
                          height: "auto",
                          maxWidth: "none",
                        },
                      },
                    }}
                  >
                    <ListItem
                      sx={{ flex: 1, justifyContent: "center" }}
                      color="inherit"
                    >
                      {list.listitem.toUpperCase()}
                    </ListItem>
                  </Tooltip>
                ))}
              </List>
            </Container>
          </Box>
          <Box>
            <Stack
              direction="row"
              sx={{
                backgroundColor: "white",
                color: "black",
                py: 1,
                px: 6,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
              >
                <Box component="span" sx={{ marginRight: 1 }}>
                  <LocalShippingIcon />
                </Box>
                <strong>AYNI GÜN KARGO</strong> -16.00'DAN SONRA ÖNCEKİ
                SİPARİŞLERDE
              </Typography>
              <Typography
                sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
              >
                <Box component="span" sx={{ marginRight: 1 }}>
                  <InsertEmoticonIcon />
                </Box>
                <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ SİPARİŞLERDE
              </Typography>
              <Typography
                sx={{ fontSize: 12, display: "flex", alignItems: "center" }}
              >
                <Box component="span" sx={{ marginRight: 1 }}>
                  <GppGoodIcon />
                </Box>
                <strong>GÜVENLİ ALIŞVERİŞ</strong> - 1.000.000 + MUTLU ALIŞVERİŞ
              </Typography>
            </Stack>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
