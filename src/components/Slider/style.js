import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

injectGlobal = injectGlobal`
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

export const ArrowWrapper = styled.div`
  width: 45px;
  height: 45px;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  ${(props) =>
    props.left &&
    `
      left: 5px;
      svg {
        transform: rotate(180deg);
        margin-left: -4px;
      }
    `}
  ${(props) =>
    props.right &&
    `
      left: auto;
      right: 5px;
    `}
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

export const SliderContainer = styled.div`
  position: relative;
`;

export const SliderWrapper = styled.div`
  padding-bottom: 48px;
`;

export const NavigtationWrapper = styled.div`
  position: relative;
  width: fit-content;
`;
