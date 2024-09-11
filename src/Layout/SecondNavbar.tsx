import {
  AppBar,
  Box,
  Button,
  Card,
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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { usePaymentStore } from "../pages/Payement";
import { useStore } from "./Count";
import { photo_url } from "../components/Bestseller/CokSatanlar";
import DeleteIcon from '@mui/icons-material/Delete';

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
  const { basketItems, removeItems } = usePaymentStore();
  const {removeCount, countBasket} = useStore()
  const totalAll: number = Math.ceil(basketItems.reduce((arr, index)=> arr + index.price, 0))
  

  const hadleRemove= (index: number) =>{
    removeItems(index)
    removeCount()
  }

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
    <Box width={300} position={'relative'} height={'100%'}>
        <Typography 
        sx={{ 
          fontWeight: "bolder", 
          fontSize: 14, 
          pt: 1, 
          backgroundColor: "white" 
        }}
      >
        SEPETİM
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Box 
        sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          overflowX: 'hidden',
          height:490,
          p: 1
        }}
      >
        {basketItems.length === 0 ? (
          <Typography>Sepet Boş</Typography>
        ) : (
          basketItems.map((basket, index) => (
            <Box mb={1} key={index}>
              <Card
                style={{
                  padding: "5px 0",
                  backgroundColor: "rgb(247, 247, 247)"
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <img width={70} height={55} src={photo_url + basket.img} alt="Product" />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography fontSize={11} mt={1} fontWeight={'bolder'}>{basket.name}</Typography>
                      <Typography fontSize={10} variant='subtitle1'>{basket.aroma}</Typography>
                      <Typography fontSize={10} variant='subtitle1'>{basket.gram ? basket.gram : ""}</Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1
                        }}
                      >
                        {Math.ceil(basket.price)} TL
                      </Typography>
                      <Typography
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={'white'}
                        
                        sx={{
                          boxShadow:`0 1px 1px rgba(0,1,1,0.5)`
                        }}
                      >
                        <DeleteIcon
                        onClick={()=>hadleRemove(index)}
                          sx={{
                            fontSize: 20,
                            '&:hover': {
                              color: "red"
                            }
                          }}
                        /> 
                        <strong style={{ margin: "0 15px" }}>1</strong>
                        <button className="increase-button">+</button>
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))
        )}
      </Box>
      <Stack
        width={'100%'}
        marginBottom={1}
        textAlign={"center"}
        position={"relative"}
        bottom={0}
      >
        <Typography
          variant="subtitle2"
          fontWeight={"bolder"}
          textAlign={"end"}
          mr={5}
          pt={2}
        >
          {totalAll ? `Toplam ${totalAll} TL`: "Sepet Boş"}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            px: 5,
            mx: 5,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={() => {
            toggleDrawer2(false)
          }}
        >
          <Link
            onClick={()=>toggleDrawer2(false)}
            style={{ textDecoration: "none", color: "white"}}
            to={"PaymentPage"}
          >
            DEVAM ET
          </Link>{" "}
          <ArrowRightIcon />
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
              >{countBasket}</span>
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

