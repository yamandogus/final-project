import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Card,
  ClickAwayListener,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Modal,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SecondNavbarComponent from "../components/Navbar/SecondNavbarComponet";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { usePaymentStore } from "../pages/Payement";
import { useStore } from "./Count";
import { base_url, photo_url } from "../components/Bestseller/BestSellers";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounce } from "./Navbar/Navbar";
import { SearchPropsPt } from "./Navbar";
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
  const { removeCount, countBasket } = useStore();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchPropsPt[]>([]);
  const [anchorEl, setAnchorEl] = useState(false);
  const totalAll: number = Math.ceil(
    basketItems.reduce((arr, index) => arr + index.price, 0)
  );
  const debouncedSearch = useDebounce(search, 1000);
  const [debounced, setDebounced] = useState("")

  const handleSearchResults = async () => {
    try {
      const response = await fetch(
        base_url + `/products/?limit=1000&search=${debouncedSearch}`
      );
      const responseJson = await response.json();
      
      if(responseJson.data.results.length === 0){
        setDebounced(`${debouncedSearch} adında bir ürün bulunamadı.`)
      }else{
        setSearchResults(responseJson.data.results);
        setDebounced("")
      }
    } catch (error) {
      console.log(error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      handleSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch]);

  const hadleRemove = (index: number) => {
    removeItems(index);
    removeCount();
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleDrawer2 = (newOpen: boolean) => () => {
    setCardOpen(newOpen);
  };

  const toggleDrawer3 = (link: LinksProps | null) => () => {
    if (link) {
      setOpen(false);
      setSelectedLink(link);
      setOpenList(true);
    } else {
      setSelectedLink(null);
      setOpenList(false);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {allProduct.map((links, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link
              className="mobileNvlink"
              onClick={
                links.children ? toggleDrawer3(links) : toggleDrawer(false)
              }
              to={links.link ? `${links.link}` : "#"}
            >
              <Typography sx={{ fontWeight: 700 }}>{links.name}</Typography>
            </Link>
            {links.children && <NavigateNextIcon />}
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ height: "185%", backgroundColor: "rgba(229, 229, 229, 1)" }}>
        <List>
          <Link
            className="mobileNvlink"
            to={"/MyAccount"}
            onClick={toggleDrawer(false)}
          >
            <ListItem>HESABIM</ListItem>
          </Link>
          <Link className="mobileNvlink" to={"#"} onClick={toggleDrawer(false)}>
            <ListItem>MÜŞTERİ YORUMLARI</ListItem>
          </Link>
          <Link
            className="mobileNvlink"
            to={"/ContactUs"}
            onClick={toggleDrawer(false)}
          >
            <ListItem>İLETİŞİM</ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );

  const MyCart = (
    <Box width={300} position={"relative"} height={"100%"}>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontSize: 14,
          pt: 1,
          backgroundColor: "white",
        }}
      >
        SEPETİM
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          height: 490,
          p: 1,
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
                  backgroundColor: "rgb(247, 247, 247)",
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <img
                    width={70}
                    height={60}
                    style={{
                      aspectRatio:1/1,
                      objectFit:"cover"
                    }}
                    src={photo_url + basket.img}
                    alt="Product"
                  />
                  <Stack
                    direction={"row"}
                    spacing={2}
                    width="100%"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography fontSize={11} mt={1} fontWeight={"bolder"}>
                        {basket.name}
                      </Typography>
                      <Typography fontSize={10} variant="subtitle1">
                        {basket.aroma}
                      </Typography>
                      <Typography fontSize={10} variant="subtitle1">
                        {basket.gram ? basket.gram : ""}
                      </Typography>
                    </Box>
                    <Stack spacing={1} alignItems="flex-end" gap={2} pr={1}>
                      <Typography
                        sx={{
                          fontWeight: "bolder",
                          pt: 1,
                        }}
                      >
                        {Math.ceil(basket.price)} TL
                      </Typography>
                      <Typography
                        borderRadius={1}
                        padding={"2px 5px"}
                        bgcolor={"white"}
                        sx={{
                          boxShadow: `0 1px 1px rgba(0,1,1,0.5)`,
                        }}
                      >
                        <DeleteIcon
                          onClick={() => hadleRemove(index)}
                          sx={{
                            fontSize: 20,
                            "&:hover": {
                              color: "red",
                            },
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
        width={"100%"}
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
          {totalAll ? `Toplam ${totalAll} TL` : "Sepet Boş"}
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
            toggleDrawer2(false);
          }}
        >
          <Link
            onClick={() => toggleDrawer2(false)}
            style={{ textDecoration: "none", color: "white" }}
            to={"PaymentPage"}
          >
            DEVAM ET
          </Link>{" "}
          <ArrowRightIcon />
        </Button>
      </Stack>
    </Box>
  );

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopper = () => {
    setAnchorEl(false);
    setSearch("")
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
              <Button onClick={toggleDrawer2(true)} className="shoppingCart">
                <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 30, mx: 1 }} />
                <span className="shoppingCount">{countBasket}</span>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <ClickAwayListener onClickAway={handleClosePopper}>
          <Box>
            <TextField
              id="searchTextField"
              className="mobileSearch"
              size="small"
              placeholder="Aradığınız Ürünü Yazınız"
              value={search}
              onChange={handleSearchChange}
              sx={{
                zIndex:1600,
                my: 1,
                width: "100%",
                maxWidth: "100%",
                
              }}
              InputProps={{
                sx: {
                  borderRadius: 35,
                  backgroundColor:"white",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {searchResults.length > 0 ? (
              <Box>
               <Modal
                open={anchorEl}
                onClose={()=>setAnchorEl(false)}
                style={{width: "100%"}}
                slots={{
                  backdrop:Backdrop
                }}
                slotProps={{
                  backdrop:{
                    timeout:500
                  }
                }}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                disableScrollLock={true}
              >
                <List
                  sx={{
                    left:"2.5%",
                    width:"95%",
                    marginTop:1,
                    padding: 0,
                    top:110,
                    zIndex: 1500,
                    backgroundColor: "#F4FAFF",
                    maxHeight: "400px",
                    overflow: "auto",
                    borderRadius: 2,
                  }}
                >
                  {searchResults.map((product) => (
                    <ListItem
                      key={product.slug}
                      sx={{ borderBottom: "1px solid gray", color: "black" }}
                      to={`/products/${product.slug}`}
                      component={Link}
                      onClick={handleClosePopper}
                    >
                      <img
                        style={{ margin: "0 10px 0 5px" }}
                        width={50}
                        src={photo_url + product.photo_src}
                        alt={product.name}
                      />
                      {product.name}
                    </ListItem>
                  ))}
                {searchResults ? <Link
                to={"/AllProducts"}
                onClick={()=> {
                  setAnchorEl(false)
                  setSearch("")
                }}
                style={{
                  margin:5,
                  display:"flex",
                  textDecoration:'none',
                  textTransform:"none",
                  color:"red"
                }} 
                >Tüm Ürünler <NavigateNextIcon style={{fontSize:20}}/></Link> : ""}
                </List>
              </Modal>
              </Box>
            ):<div>{!debouncedSearch ? " ": <div style={{
              display:"flex",
              width:"90%",
              borderRadius:2,
              transform: "translate(-50%)",
              left:"50%",
              backgroundColor:"white",
              paddingLeft:10,
              zIndex: 1855,
              position: "absolute",
            }}>
              {debounced ?(
             <Typography>{debounced}</Typography>
             ) : null }
            </div>}</div>}
          </Box>
        </ClickAwayListener>
      </Box>
      <Drawer
        sx={{ zIndex: 99999 }}
        open={open}
        onClose={toggleDrawer(false)}
        disableScrollLock
      >
        {DrawerList}
      </Drawer>
      <Drawer
        sx={{ zIndex: 99999 }}
        anchor="right"
        open={cartOpen}
        onClose={toggleDrawer2(false)}
        disableScrollLock
      >
        {MyCart}
      </Drawer>
      <Drawer
        sx={{ zIndex: 99999 }}
        open={openList}
        onClose={toggleDrawer3(null)}
        disableScrollLock
      >
        {selectedLink && (
          <SecondNavbarComponent
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer3(null)}
            linksClose={toggleDrawer3(null)}
            links={selectedLink}
          />
        )}
      </Drawer>
    </>
  );
};

export default SecondNavbar;
