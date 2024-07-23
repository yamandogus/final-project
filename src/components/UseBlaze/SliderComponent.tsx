import BlazeSlider from 'blaze-slider';
import { useEffect, useRef } from 'react';
import 'blaze-slider/dist/blaze.css'


const SliderComponent = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      new BlazeSlider(sliderRef.current);
    }
  }, []);

  return (
    <div className="blaze-slider">
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
        <div className="my-structure">
          <button className="blaze-prev" aria-label="Go to previous slide"></button>
          <div className="blaze-pagination"></div>
          <button className="blaze-next" aria-label="Go to next slide"></button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;

