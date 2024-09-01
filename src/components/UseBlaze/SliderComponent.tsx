import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
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
          autoplayInterval:2000,
          transitionDuration:300,
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
    <>
      <Box>
        <Box sx={{ my: 3 }} className="pic2Border">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} textAlign={"center"}>
              GERÇEK MÜŞTERİ YORUMLARI
            </Grid>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Typography>
                <Rating name="half-rating" defaultValue={5} readOnly />
                <span style={{ textDecoration: "underline", margin: "0 4px" }}>
                  198543 Yorum
                </span>
                <div className="my-structure">
                  <button
                    style={{marginRight:10}}
                    className="blaze-prev"
                    aria-label="Go to previous slide"
                  >
                    <KeyboardArrowLeftIcon />
                  </button>
                  <button className="blaze-next" aria-label="Go to next slide">
                    <ChevronRightIcon />
                  </button>
                </div>
              </Typography>
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
                          <Stack direction={"column"}>
                            <Typography variant="subtitle2">
                              {comment.date}
                            </Typography>
                            <strong>{comment.title}</strong>
                            <p>{comment.details}</p>
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
    </>
  );
};

export default SliderComponent;
