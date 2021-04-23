import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .keen-slider {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .keen-slider,
  .keen-slider__slide {
    overflow: hidden;
    position: relative;
  }
  .keen-slider__slide {
    width: 100%;
    min-height: 100%;
  }
  .keen-slider[data-keen-slider-v] {
    flex-wrap: wrap;
  }
  .keen-slider[data-keen-slider-v] .keen-slider__slide {
    width: 100%;
  }
  .keen-slider[data-keen-slider-moves] * {
    pointer-events: none;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
`;

export const SliderDot = styled.button`
  border: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 4px;
  padding: 4px;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => (props.isActive ? props.theme.background.darkGrey2 : props.theme.background.bgGrey1)};
`;

export const SliderWrapper = styled.div`
  padding-bottom: 48px;
`;

export const NavigtationWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 42px;
`;
