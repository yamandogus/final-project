import { Grid, Typography, Button, Card, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface ProductPropsHome {
  name: string;
  image?: string;
  description?: string;
  review: string;
  link: string;
  bg: string;
}
const CategoryProducts = ({ name, image, review, link, bg }: ProductPropsHome) => {
  const CategoryLink= ()=>{
    if(link ==="/AllProducts"){
      return link
    }else{
      return `/category/${link}/${encodeURIComponent(name)}`;
    }
  }
  return (
    <Grid item xs={6} sm={4}>
      <Box>
        <Card
          className="cardTyp"
          sx={{ backgroundColor: bg, height: 165, borderRadius: 3 }}
        >
          <Grid container>
            <Grid item xs={6}>
              <img
                className="homeConmtImg"
                style={{ height: 164, width: 294 }}
                height={"auto"}
                src={image}
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                pr: 2,
              }}
            >
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "end",
                    fontWeight: 900,
                    fontSize: "x-large",
                    width: "min-content",
                  }}
                  className="nameComp"
                >
                  {name}
                </Typography>
                <Link to={CategoryLink()} style={{ textDecoration: "none" }}>
                  <Button
                    className="buttonComp"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 1)",
                      borderRadius: 2,
                      width: "100%",
                      fontWeight: "bolder",
                      px: 4,
                      "&:hover": { backgroundColor: "rgba(0, 0, 0, 1)" },
                    }}
                    variant="contained"
                  >
                    {review}
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default CategoryProducts;
