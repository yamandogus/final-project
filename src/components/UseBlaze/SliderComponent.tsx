import { Box, Button, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import { useEffect, useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Comments = Array(20).fill({
  date: "03/05/24",
  title: "Beğendim Gayet Güzeldi",
  details:
    "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
});

const SliderComponent = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new BlazeSlider(sliderRef.current, {
        all: {
          slidesToShow: 4,
          slidesToScroll: 1,
          enableAutoplay: true,
          autoplayInterval: 3000,
          transitionDuration: 300,
        },
        "(max-width: 768px)": {
          slidesToShow: 2,
        },
        "(max-width: 480px)": {
          slidesToShow: 1,
        },
      });
      const prevButton = document.querySelector(".blaze-prev");
      const nextButton = document.querySelector(".blaze-next");
      if (prevButton) {
        prevButton.addEventListener("click", () => slider.prev());
      }
      if (nextButton) {
        nextButton.addEventListener("click", () => slider.next());
      }
    }
  }, []);

  return (
    <Box>
      <Box sx={{ mt: 3 }} className="pic2Border">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{fontWeight:'bolder'}}>
            GERÇEK MÜŞTERİ YORUMLARI
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'end'}}>
            <Stack direction={'row'} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} spacing={3}>
              <Rating name="half-rating" defaultValue={5} readOnly />
              <span style={{ textDecoration: "underline", margin: "0 4px" }}>
                198543 Yorum
              </span>
              <div className="my-structure">
                <Button
                  style={{ backgroundColor:'none'}}
                  className="blaze-prev"
                  aria-label="Go to previous slide"
                >
                  <KeyboardArrowLeftIcon />
                </Button>
                <Button className="blaze-next" aria-label="Go to next slide">
                  <ChevronRightIcon />
                </Button>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <div className="blaze-slider" ref={sliderRef}>
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {Comments.map((comment, index) => (
                  <div key={index}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Stack direction="column">
                          <Typography variant="subtitle2">
                            {comment.date}
                          </Typography>
                          <Typography variant="body1" component="strong">
                            {comment.title}
                          </Typography>
                          <Typography variant="body2">
                            {comment.details}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default SliderComponent;