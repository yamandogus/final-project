import { useEffect, useRef } from 'react';
import BlazeSlider, { BlazeConfig } from 'blaze-slider';

export function useBlazeSlider(config?: BlazeConfig) {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const sliderElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sliderRef.current && !!sliderElRef.current) {
      const blazeSlider = new BlazeSlider(sliderElRef.current, config);
      sliderRef.current = blazeSlider;
    }
    // eslint-disable-next-line
  }, [config]);

  return { sliderElRef, sliderRef };
}
