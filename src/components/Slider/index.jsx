import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Dots, SliderDot, NavigtationWrapper, SliderWrapper, GlobalStyle } from './style';

const Slider = ({ children, hasArrow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    spacing: 64,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 2,
        mode: 'free-snap'
      },
      '(min-width: 1200px)': {
        slidesPerView: 3,
        mode: 'snap'
      }
    },
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slideChanged: (s) => {
      setCurrentSlide(s.details().relativeSlide);
    }
  });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    // 3s interval between each slide, suggested by design team
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigtationWrapper>
        <SliderWrapper ref={sliderRef} className="keen-slider">
          {React.Children.map(children, (child) => React.cloneElement(child, { className: 'keen-slider__slide' }))}
        </SliderWrapper>
      </NavigtationWrapper>
      {hasArrow && <div>Has Arraow</div>}
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <SliderDot
              key={idx}
              role="presentation"
              onClick={() => {
                slider.moveToSlideRelative(idx);
              }}
              isActive={currentSlide === idx}
            />
          ))}
        </Dots>
      )}
    </ThemeProvider>
  );
};

export default Slider;

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  hasArrow: PropTypes.bool
};

Slider.defaultProps = {
  children: [],
  hasArrow: false
};
