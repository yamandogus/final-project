import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { LinksProps } from "../../services/Type";

interface DrawerListProps {
  allProduct: LinksProps[];
  toggleDrawerLink: (link: LinksProps | null) => () => void;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const DrawerList = ({ allProduct, toggleDrawerLink, toggleDrawer }: DrawerListProps) => {
  return (
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
                links.children ? toggleDrawerLink(links) : toggleDrawer(false)
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
};

export default DrawerList;
