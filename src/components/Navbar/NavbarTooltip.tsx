import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
const dummyData = [
  {
    imgSrc: "../../../images/page3/page1.png",
    title: "Whey Protein",
    rating: 5,
    comments: 0,
  },
  {
    imgSrc: "../../../images/page3/page2.jpeg",
    title: "Creatine",
    rating: 4,
    comments: 12,
  },
  {
    imgSrc: "../../../images/page3/page3.jpeg",
    title: "BCAA",
    rating: 4.5,
    comments: 5,
  },
  {
    imgSrc: "../../../images/page3/page4.jpeg",
    title: "Glutamine",
    rating: 3.5,
    comments: 7,
  },
  {
    imgSrc: "../../../images/page3/page5.jpeg",
    title: "Pre-Workout",
    rating: 4.8,
    comments: 9,
  },
];
const NavbarTooltip = () => {
  return (
    <>
      <Box my={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography mb={2} variant="h6" fontWeight={700}>
              ÇOK SATANLAR
            </Typography>
            {dummyData.map((dumy, index) => (
              <Grid container>
                <Grid key={index}>
                  <Stack direction={"row"} alignItems="center">
                    <img
                      style={{ marginRight: "10px", marginBottom: "10px", borderRadius:'5px' }}
                      width={70}
                      src={dumy.imgSrc}
                      alt="Ürün görseli"
                    />
                    <Box>
                      <Typography variant="subtitle1">{dumy.title}</Typography>
                      <Stack direction={"row"} alignItems="center" spacing={1}>
                        <Rating value={dumy.rating} size="small" />
                        <span>{dumy.comments} Yorum</span>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={8} bgcolor={'rgb(178, 220, 240)'} borderRadius={"0 5px 5px 0"}>
            <h2>SPOR GIDALARI </h2>
            <h2 className="tool2">Product 1</h2>
            <ul className="listeLi">
              <li>Item lorem2</li>
              <li>Item lorem2</li>
              <li>Item lorem3</li>
              <li>Item lorem3</li>
              <li>Item lorem3</li>
            </ul>
            <h2 className="tool2">Product 2</h2>
            <ul className="listeLi">
              <li>Item lorem2</li>
              <li>Item lorem2</li>
              <li>Item lorem3</li>
              <li>Item lorem3</li>
              <li>Item lorem3</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NavbarTooltip;
