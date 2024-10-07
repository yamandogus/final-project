import { Box, Grid, Stack, Typography } from "@mui/material";
import { LinksProps } from "../../Layout/Navbar/Navbar";
import { photo_url } from "../Bestseller/CokSatanlar";
import { Link } from "react-router-dom";

interface NavbarModalProps {
  links: LinksProps;
  onClose: () => void;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height:400,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};
const NavbarModal: React.FC<NavbarModalProps> = ({ links, onClose }) => {
  return (
    <>
      <Box sx={style}>
        <Grid container spacing={5} p={1} bgcolor={"rgb(228, 227, 232)"}>
          <Grid item xs={4}>
            <Typography mb={2} variant="h6" textAlign={'center'} fontWeight={700}>EN ÇOK SATANLAR</Typography>
            {links.top_sellers.map((link, index) => (
              <Grid container>
                <Grid key={index}>
                  <Stack direction={"row"} alignItems="center" gap={2} mb={3}>
                    <img
                      style={{
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                      }}
                      width={80}
                      src={photo_url + link.picture_src}
                      alt="Ürün görseli"
                    />
                    <Box>
                      <Typography variant="subtitle1">{link.name}</Typography>
                      <Typography variant='caption'>{link.slug}</Typography><br />
                      <Typography variant="caption">
                        {link.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={8}
            bgcolor={"rgb(255, 255, 255)"}
            borderRadius={"0 5px 5px 0"}
            sx={{
              overflowY:"auto",
              display:"flex",
              flexWrap:"wrap",
            }}
          >
            {links.children.map((linkChild) => (
              <>
              <Box key={linkChild.id} sx={{ flex: "1 1 45%", mt:2 }}>
                <h4 >{linkChild.name}</h4>
                <ul>
                  {linkChild.sub_children.map((sub) => (
                    <li
                    style={{
                      listStyle:'none',
                      margin:"5px 0"
                    }}
                    >
                      <Link 
                      onClick={()=>onClose()}
                       className="linksNavs"
                      style={{
                        color:'black',
                        textDecoration:'none',
                      }}
                      to={`/products/`+ sub.slug}>{sub.name}</Link>
                    </li>
                  ))}
                  </ul>
                  </Box>
              </>
            ))}
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NavbarModal;
