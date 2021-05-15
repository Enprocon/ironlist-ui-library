import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { ChevronleftThick, ChevronrightThick } from '@ironlist/ironlist-icons';
import { useKeenSlider } from 'keen-slider/react';
import { useThemeContext } from '../ThemeProvider';
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
  const theme = useThemeContext();

  if (disabled) {
    return null;
  }

  return (
    <ArrowWrapper theme={theme} onClick={onClick} left>
      <ChevronleftThick />
    </ArrowWrapper>
  );
};

const ArrowRight = ({ disabled, onClick }) => {
  const theme = useThemeContext();
  if (disabled) {
    return null;
  }
  return (
    <ArrowWrapper theme={theme} onClick={onClick} right>
      <ChevronrightThick />
    </ArrowWrapper>
  );
};

const Slider = ({ children, hasArrow, hasDots, autoScroll, keenSliderProps, slideProps }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const theme = useThemeContext();
  const { slidesToPreview, duration } = keenSliderProps;
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: slidesToPreview || 1,
    ...keenSliderProps,
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
    <>
      <GlobalStyle />
      <SliderContainer>
        <NavigtationWrapper>
          <SliderWrapper ref={sliderRef} className="keen-slider">
            {Children.map(children, (child) => cloneElement(child, { className: 'keen-slider__slide', ...slideProps }))}
          </SliderWrapper>
        </NavigtationWrapper>
        {slider && hasArrow && (
          <>
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1 - slidesToPreview}
            />
          </>
        )}
        {slider && hasDots && (
          <Dots>
            {[...Array(slider.details().size).keys()].slice(0, slider.details().size - slidesToPreview).map((idx) => (
              <SliderDot
                key={idx}
                theme={theme}
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
    </>
  );
};

export default Slider;

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  hasArrow: PropTypes.bool,
  hasDots: PropTypes.bool,
  autoScroll: PropTypes.bool,
  keenSliderProps: PropTypes.shape({
    centered: PropTypes.bool,
    loop: PropTypes.bool,
    mode: PropTypes.string,
    duration: PropTypes.number,
    slidesToPreview: PropTypes.number
  }),
  slideProps: PropTypes.objectOf(PropTypes.any)
};

Slider.defaultProps = {
  children: [],
  hasArrow: false,
  hasDots: false,
  autoScroll: false,
  keenSliderProps: {
    centered: true,
    loop: true,
    mode: 'snap',
    duration: 3000,
    slidesToPreview: 1
  },
  slideProps: {}
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
