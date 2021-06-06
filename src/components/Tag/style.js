import { css } from '@emotion/css';

export const tagContainer = (theme, backgroundColor, hasRoundBorder, isOnCard) => css`
  padding: 0 8px;
  height: 20px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${theme.white};
  background-color: ${backgroundColor};
  ${hasRoundBorder && `border-radius: 3px;`}
  ${isOnCard &&
  `
      border: 1px solid ${theme.white};
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  `}
`;
