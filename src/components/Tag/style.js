import styled from 'styled-components';

export const TagContainer = styled.div`
  padding: 0 8px;
  height: 20px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.hasRoundBorder && `border-radius: 3px;`}
  ${(props) =>
    props.isOnCard &&
    `
      border: 1px solid ${props.theme.white};
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  `}
`;
