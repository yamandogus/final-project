import { Box, Grid, Stack, Typography } from "@mui/material";
import { photo_url } from "../Bestseller/Bestseller";
import { Link } from "react-router-dom";
import { LinksProps } from "../../services/type";

interface NavbarModalProps {
  links: LinksProps;
  onClose: () => void;
}

const style = {
  position:"absolute",
  top:"120px",
  left:"50%",
  transform: "translate(-50%, 0)",
  width: "70%",
  borderRadius: 2,
  maxHeight: 400,
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 0,
    background: "transparent",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
};

const NavbarModal: React.FC<NavbarModalProps> = ({ links, onClose }) => {
  return (
    <Box sx={style}>
      <Grid container spacing={5}>
        <Grid item lg={4} md={5} bgcolor={"rgb(228, 227, 232)"}>
          <Typography mb={2} variant="h6" textAlign={"center"} fontWeight={700}>
            EN ÇOK SATANLAR
          </Typography>
          {links.top_sellers.map((link, index) => (
            <Grid container px={1} key={`top-seller-${link.slug || index}`}>
              <Grid item xs={12}>
                <Stack direction={"row"} alignItems="center" mb={3}>
                  <img
                    style={{
                      marginRight: "10px",
                      marginBottom: "10px",
                      borderRadius: "5px",
                      width: 80,
                      aspectRatio: 1 / 1,
                      objectFit: "cover",
                    }}
                    width={80}
                    src={photo_url + link.picture_src}
                    alt="Ürün görseli"
                  />
                  <Box>
                    <Typography variant="subtitle1">{link.name}</Typography>
                    <Typography variant="caption">{link.slug}</Typography>
                    <br />
                    <Typography variant="caption">{link.description}</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item lg={8} md={7} bgcolor={"rgb(255, 255, 255)"} borderRadius={"0 5px 5px 0"}>
          <Box>
            <Typography variant='subtitle1' sx={{textDecoration:'underline'}}>{links.name}</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sx={{
              overflowY: "auto",
              display: "flex",
              flexWrap: "wrap",
            }}>
              {links.children.map((linkChild, childIndex) => (
                <Box key={`child-${linkChild.id || childIndex}`} sx={{ flex: "1 1 45%", mt: 2 }}>
                  <h4>{linkChild.name}</h4>
                  <ul>
                    {linkChild.sub_children.map((sub, index) => (
                      <li
                      key={`sub-${linkChild.slug}-${sub.slug}-${index}`}
                        style={{
                          listStyle: "none",
                          margin: "5px 0",
                        }}
                      >
                        <Link
                          onClick={onClose}
                          className="linksNavs"
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                          to={`/products/${sub.slug}`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavbarModal;