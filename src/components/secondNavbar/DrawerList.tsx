import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { LinksProps } from "../../services/type";
import { photo_url } from "../Bestseller/Bestseller";
import { LoaderData } from "../../Layout/Navbar";
import { userCartStore } from "../../store/cartStore";

interface DrawerListProps {
  allProduct: LinksProps[];
  toggleDrawerLink: (link: LinksProps | null) => () => void;
  toggleDrawer: (newOpen: boolean) => () => void;
}



const DrawerListMenu = ({
  allProduct,
  toggleDrawerLink,
  toggleDrawer,
}: DrawerListProps) => {
  const { user } = useLoaderData() as LoaderData;
  const {updateCartData} = userCartStore()
  const navigate = useNavigate();
  
  const handlelogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
    navigate("/");
    updateCartData({
      items: [],
      total_price: 0,
    });
  };



  return (
    <Box sx={{ width: 280}}>
      <Box sx={{backgroundColor:'white'}}>
      <List>
        {allProduct.map((links, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "black",
            }}
            component={Link}
            to={links.link ? `${links.link}` : "#"}
            onClick={
              links.children ? toggleDrawerLink(links) : toggleDrawer(false)
            }
          >
            <Stack flexDirection={"row"}>
              <Avatar
              variant="square"
                src={
                  links?.top_sellers?.[0].picture_src
                    ? `${photo_url}${links?.top_sellers?.[0].picture_src}`
                    : undefined
                }
                sx={{ mr: 2 }}
              />
              <Typography sx={{ fontWeight: 700 }}>{links.name}</Typography>
            </Stack>
            {links.children && <NavigateNextIcon />}
          </ListItem>
        ))}
      </List>
      </Box>
      <Divider />
      <Box>
        <List>
          {user && user?.first_name ? (
           <>
            <ListItem
              sx={{color:'black'}}
              component={Link}
              to={"MyAccount"}
              onClick={toggleDrawer(false)}
            >
              HESABIM
            </ListItem>
            <ListItem
            sx={{color:'black'}}
              component={Link}
              to={"MyAccount"}
              onClick={handlelogout}
            >
              ÇIKIŞ YAP
            </ListItem>
           </>
          ) : (
            <>
              <ListItem
              sx={{color:'black'}}
                component={Link}
                to={
                  user && user?.first_name
                    ? "MyAccount"
                    : `Account?value=${"1"}`
                }
                onClick={toggleDrawer(false)}
              >
                ÜYE GİRİŞİ
              </ListItem>
              <ListItem
              sx={{color:'black'}}
                component={Link}
                to={
                  user && user?.first_name
                    ? "MyAccount"
                    : `Account?value=${"2"}`
                }
                onClick={toggleDrawer(false)}
              >
                ÜYE OL
              </ListItem>
            </>
          )}

          <ListItem onClick={toggleDrawer(false)}>MÜŞTERİ YORUMLARI</ListItem>
          <ListItem
            component={Link}
            to={"ContactUs"}
            onClick={toggleDrawer(false)}
          >
            İLETİŞİM
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DrawerListMenu;
