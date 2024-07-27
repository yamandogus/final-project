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
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quae cupiditate voluptas illum hic culpa assumenda corrupti soluta nulla?</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id!</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
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
