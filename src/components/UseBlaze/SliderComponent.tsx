import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import { useEffect, useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Comments } from "../../data/comment-dumy";


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
          slidesToShow: 4,
        },
        "(max-width: 480px)": {
          slidesToShow: 2,
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
          <Grid item xs={12} sm={6} sx={{fontWeight:'bolder'}}>
            GERÇEK MÜŞTERİ YORUMLARI
          </Grid>
           <Grid item xs={12} sm={6} sx={{display:{xs:"",sm:'flex'}, justifyContent:{xs:"",sm:'end'}}}>
            <Stack direction={'row'} sx={{display:'flex', justifyContent:{xs:'space-between',sm:'center'}, alignItems:'center'}}>
              <Box sx={{display:'flex', alignItems:'center'}}>
              <Rating name="half-rating" defaultValue={5} readOnly />
              <span style={{ textDecoration: "underline", margin: "0 4px" }}>
                198543 Yorum
              </span>
              </Box>
               <Stack direction={'row'} className="my-structure">
                  <KeyboardArrowLeftIcon className="blaze-prev" aria-label="Go to previous slide"/>
                  <ChevronRightIcon className="blaze-next" aria-label="Go to next slide"/>
              </Stack>
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
                    <Grid container mt={3}>
                      <Grid item xs={12} sm={12}>
                        <Box>
                          <Typography variant="subtitle2">
                            {comment.date}
                          </Typography>
                          <Typography sx={{display:'flex', justifyContent:'start'}} fontWeight={'bolder'} variant="body2">
                            {comment.title}
                          </Typography>
                           <Typography variant='body2' sx={{display:'flex', justifyContent:'start'}}>
                            {comment.details}
                          </Typography>
                        </Box>
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