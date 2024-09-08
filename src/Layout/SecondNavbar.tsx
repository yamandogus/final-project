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
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SecondNavbarComponent from "../components/Navbar/SecondNavbarComponet";

interface LinksProps {
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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleDrawer2 = (newOpen: boolean) => () => {
    setCardOpen(newOpen);
  };

  const toggleDrawer3 = (link: LinksProps | null) => () => {
    if(link){
      setOpen(false)
      setSelectedLink(link);
       setOpenList(true); 
    }else{
      setSelectedLink(null)
      setOpenList(false)
    }
  };


  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {allProduct.map((links) => (
          <ListItem
            key={links.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link
              className="mobileNvlink"
              onClick={links.children ? toggleDrawer3(links) : toggleDrawer(false)}
              to={links.link ? `${links.link}` : "#"}
            >
              <Typography sx={{ fontWeight: 700 }}>{links.name}</Typography>
            </Link>
            {links.children && <NavigateNextIcon />}
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ height: '185%', backgroundColor: 'rgba(229, 229, 229, 1)' }}>
        <List>
          <Link className="mobileNvlink" to={"/MyAccount"} onClick={toggleDrawer(false)}><ListItem>HESABIM</ListItem></Link>
          <Link className="mobileNvlink" to={"#"} onClick={toggleDrawer(false)}><ListItem>MÜŞTERİ YORUMLARI</ListItem></Link>
          <Link className="mobileNvlink" to={"/ContactUs"} onClick={toggleDrawer(false)}><ListItem>İLETİŞİM</ListItem></Link>
        </List>
      </Box>
    </Box>
  );

  const MyCart = (
    <Box width={250} position={'relative'} height={'100%'}>
      <Typography sx={{ fontWeight: 'bolder' }}>SEPETİM</Typography>
      <Divider />
      <Stack sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        p: 2
      }} >
        <Typography variant='subtitle2' textAlign={'end'} mr={5} fontWeight={'bolder'}>Toplam: 499 TL</Typography>
        <Button
          sx={{
            width: '100%',
            px: 10,
            marginBottom: 3,
            backgroundColor: 'black',
            '&:hover': { backgroundColor: 'black' }
          }}
          variant='contained'
        >
          SEPETİM
        </Button>
      </Stack>
    </Box>
  );

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
            <Stack position={'relative'}>
            <Button onClick={toggleDrawer2(true)} className="shoppingCart">
              <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
              <span
              className="shoppingCount"
              >0</span>
            </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box>
          <TextField
            className="mobileSearch"
            size="small"
            placeholder="Aradığınız Ürünü Yazınız"
            sx={{
              my: 1,
              width: "100%",
              maxWidth: '100%',
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
      <Drawer sx={{ zIndex: 99999 }} open={open} onClose={toggleDrawer(false)} disableScrollLock>
        {DrawerList}
      </Drawer>
      <Drawer sx={{ zIndex: 99999 }} anchor="right" open={cartOpen} onClose={toggleDrawer2(false)} disableScrollLock>
        {MyCart}
      </Drawer>
      <Drawer sx={{ zIndex: 99999 }} open={openList} onClose={toggleDrawer3(null)} disableScrollLock>
        {selectedLink && <SecondNavbarComponent
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer3(null)}
        linksClose={toggleDrawer3(null)}
        links={selectedLink}/>
          
        }
      </Drawer>
    </>
  );
};

export default SecondNavbar;

