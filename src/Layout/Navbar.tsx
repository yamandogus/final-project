import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  Drawer,
  FormGroup,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import DrawerList from "../components/MyCart/DrawerList";
import SecondNavbar from "./SecondNavbar";
import NavbarTooltip from "../components/Navbar/NavbarTooltip";
interface ListItemProps {
  listitem: string;
  title: string;
  tooltipContent: React.ReactNode;
}

const listItemsData: ListItemProps[] = [
  {
    listitem: "PROTEİN",
    title: "Protein",
    tooltipContent: (
     <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
  {
    listitem: "SPOR GIDALARI",
    title: "Spor Gıdaları",
    tooltipContent: (
      <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
  {
    listitem: "SAĞLIK",
    title: "Sağlık",
    tooltipContent: (
      <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
  {
    listitem: "GIDA",
    title: "Gıda",
    tooltipContent: (
      <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
  {
    listitem: "VİTAMİN",
    title: "Vitamin",
    tooltipContent: (
      <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
  {
    listitem: "TÜM ÜRÜNLER",
    title: "Tüm Ürünler",
    tooltipContent: (
      <div style={{marginTop:"40px"}}>
      <NavbarTooltip/>
     </div>
    ),
  },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false)
 
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

 useEffect(()=>{
  const opas = document.getElementById("autlet");
  if(toolOpen){
    opas?.classList.add("bitten")
  }else{
    opas?.classList.remove("bitten")
  }
 })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toogleTool = (newOpen : boolean) =>{
    setToolOpen(newOpen)
  }

  return (
    <>
      <Box component={"div"} className="firstNavbar">
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
                  <Link to={"/Home"}>
                    <img
                      className="navimg"
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
                          <Box
                            component={"button"}
                            sx={{
                              height: 39,
                              px: 3,
                              backgroundColor: "rgba(145, 145, 145, 1)",
                              border: "none",
                              borderRadius: "0 4px 4px 0",
                              cursor: "pointer",
                              color: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            Ara
                          </Box>
                        </InputAdornment>
                      ),
                      className: "inputw",
                      sx: {
                        width: 350,
                        paddingRight: 0,
                      },
                    }}
                  />
                </FormGroup>
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
                  disableScrollLock
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to={"MyAccount"}>
                      Hesabım
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to={"Login"}>
                      Üye Girişi
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className="accountLinkNav" to={"SingUp"}>
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
                <Drawer
                  disableScrollLock
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <DrawerList />
                </Drawer>
              </Stack>
            </Stack>
          </Container>
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              <Container>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {listItemsData.map((list, index) => (
                    <Tooltip
                      
                      onOpen={()=> toogleTool(true) }
                      onClose={()=> toogleTool(false)}
                      key={index}
                      title={list.tooltipContent}
                      className="textDec"
                      slotProps={{
                        popper: {
                          style: {
                            borderRadius:"10px",
                            width: "60%",
                          },
                        },
                        tooltip: {
                          sx: {
                            padding: "0 0 0 10px",
                            color: "black",
                            backgroundColor: "rgb(209, 209, 209)",
                            height: "auto",
                            maxWidth: "none",
                          },
                        },
                      }}
                    >
                      <ListItem
                        className="headLink"
                        sx={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                        color="inherit"
                      >
                        {list.listitem.toUpperCase()}
                      </ListItem>
                    </Tooltip>
                  ))}
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
