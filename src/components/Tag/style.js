import styled, { css } from 'styled-components';

export const TagContainer = styled.div`
  padding: 0 8px;
  height: 20px;
  display: inline-block;
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};
  ${(props) =>
    props.hasBorderRadius &&
    css`
      border-radius: 3px;
    `};
`;
