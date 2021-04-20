import styled, { css } from 'styled-components';

export const TagContainer = styled.div`
  padding: 0 8px;
  height: 20px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.white};
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};
  ${(props) =>
    props.hasRoundBorder &&
    css`
      border-radius: 3px;
    `};
`;
