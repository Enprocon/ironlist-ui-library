import styled from 'styled-components';

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
