import { Box, Container } from "@mui/material";
import BlazeSlider from "blaze-slider";
import 'blaze-slider/dist/blaze.css'
import { useEffect, useRef } from "react";



const SliderComponent = () => {
    const sliderRef = useRef(null)
    
    useEffect(() =>{
        if(sliderRef.current){
            new BlazeSlider(sliderRef.current)
        }
    },[])

  return (
    <>
      <Box>
        <Container>
          <div className="blaze-slider" ref={sliderRef}>
            <div className="blaze-container">
              <div className="blaze-track-container">
                <div className="blaze-track">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
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
