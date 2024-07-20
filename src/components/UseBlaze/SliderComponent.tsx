import "blaze-slider/dist/blaze.css";
import { useBlazeSlider } from "./UseBlazeSlider";
import { Grid, Typography } from "@mui/material";

const SliderComponent = () => {
  const { sliderElRef } = useBlazeSlider();

  return (
    <div className="blaze-slider" ref={sliderElRef}>
      <div className="blaze-container">
        <div className="blaze-track">
          <div className="blaze-slide">
            {" "}
            <Grid container spacing={2}>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <Grid sx={{px:1}} item xs={12} sm={6} md={3} key={index}>
                    <Typography variant="subtitle2">03/05/24</Typography>
                    <Typography variant="h6">Beğendim gayet güzeldi</Typography>
                    <Typography>
                      Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor
                      insanı teşekkürler.
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </div>
          <div className="blaze-slide">
            {" "}
            <Grid container spacing={2}>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Typography variant="subtitle2">03/05/24</Typography>
                    <Typography variant="h6">Beğendim gayet güzeldi</Typography>
                    <Typography>
                      Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor
                      insanı teşekkürler.
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </div>
          <div className="blaze-slide">
            {" "}
            <Grid container spacing={2}>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Typography variant="subtitle2">03/05/24</Typography>
                    <Typography variant="h6">Beğendim gayet güzeldi</Typography>
                    <Typography>
                      Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor
                      insanı teşekkürler.
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
