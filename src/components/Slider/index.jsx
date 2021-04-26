import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Icons from '../Icons';
import {
  Dots,
  SliderDot,
  NavigtationWrapper,
  SliderWrapper,
  ArrowWrapper,
  GlobalStyle,
  SliderContainer
} from './style';

const ArrowLeft = ({ disabled, onClick }) => {
  if (disabled) {
    return null;
  }
  return (
    <ArrowWrapper onClick={onClick} left>
      <Icons type="rightArrow" />
    </ArrowWrapper>
  );
};

const ArrowRight = ({ disabled, onClick }) => {
  if (disabled) {
    return null;
  }
  return (
    <ArrowWrapper onClick={onClick} right>
      <Icons type="rightArrow" />
    </ArrowWrapper>
  );
};

const Slider = ({ children, hasArrow, hasDots, slidesToPreview, duration, autoScroll }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    spacing: 64,
    slidesPerView: slidesToPreview || 1,
    centered: true,
    loop: true,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: slidesToPreview || 2,
        mode: 'free-snap'
      },
      '(min-width: 1200px)': {
        slidesPerView: slidesToPreview || 3,
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
    if (autoScroll) {
      timer.current = setInterval(() => {
        if (!pause && slider) {
          slider.next();
        }
      }, duration);
      // 3s interval between each slide, suggested by design team
      return () => {
        clearInterval(timer.current);
      };
    }
    return {};
  }, [pause, slider, duration, autoScroll]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SliderContainer>
        <NavigtationWrapper>
          <SliderWrapper ref={sliderRef} className="keen-slider">
            {Children.map(children, (child) => cloneElement(child, { className: 'keen-slider__slide' }))}
          </SliderWrapper>
        </NavigtationWrapper>
        {slider && hasArrow && (
          <>
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
        {slider && hasDots && (
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
      </SliderContainer>
    </ThemeProvider>
  );
};

export default Slider;

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  hasArrow: PropTypes.bool,
  hasDots: PropTypes.bool,
  slidesToPreview: PropTypes.number,
  duration: PropTypes.number,
  autoScroll: PropTypes.bool
};

Slider.defaultProps = {
  children: [],
  hasArrow: false,
  hasDots: false,
  slidesToPreview: 1,
  autoScroll: false,
  duration: 3000
};

ArrowLeft.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
ArrowLeft.defaultProps = {
  disabled: false,
  onClick: () => {}
};

ArrowRight.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
ArrowRight.defaultProps = {
  disabled: false,
  onClick: () => {}
};
