import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface LinksProps {
  id: number;
  name: string;
  icon?: JSX.Element;
  link?: string ;
}


const Links: LinksProps[] = [
  {
    id: 1,
    name: "PROTEİN",
    icon: <NavigateNextIcon />,
    link: 'ProteinPage',
  },
  {
    id: 2,
    name: "SPOR GIDALARI",
    icon: <NavigateNextIcon />,
  },
  {
    id: 3,
    name: "SAĞLIK",
    icon: <NavigateNextIcon />,
  },
  {
    id: 4,
    name: "GIDA",
    icon: <NavigateNextIcon />,
  },
  {
    id: 5,
    name: "VİTAMİN",
    icon: <NavigateNextIcon />,
  },
  {
    id: 6,
    name: "TÜM ÜRÜNLER",
  }
];
const SecondNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {Links.map((link) => (
          <ListItem
            key={link.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link className="mobileNvlink" to={link.link ?`/${link.link}`: "#"}><Typography sx={{fontWeight:700}}>{link.name}</Typography></Link>
            {link.icon}
          </ListItem>
        ))}
      </List>
      <Divider />
     <Box sx={{height:'125%', backgroundColor:'rgba(229, 229, 229, 1)'}}>
      <List>
          <Link className="mobileNvlink" to={"/MyAccount"} onClick={toggleDrawer(false)}><ListItem>HESABIM</ListItem></Link>
          <Link className="mobileNvlink" to={"#"} onClick={toggleDrawer(false)}><ListItem>MÜŞTERİ YORUMLARI</ListItem></Link>
          <Link className="mobileNvlink" to={"/ContactUs"} onClick={toggleDrawer(false)}><ListItem>İLETİŞİM</ListItem></Link>
        </List>
      </Box>
    </Box>
  );

  const MyCart = (newOpen : boolean) => () => {
    
  }
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
            <Button className="shoppingCart">
              <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          <TextField
            size="small"
            placeholder="Aradığınız Ürünü Yazınız"
            sx={{
              my: 1,

              width: "100%",
            }}
            InputProps={{
              sx: {
                borderRadius: 35,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Drawer
      PaperProps={{
        sx:{

        }
      }}
      open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default SecondNavbar;
