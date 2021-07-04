import { css } from '@emotion/css';

export const tagContainer = (theme, backgroundColor, hasRoundBorder, isOnCard) => css`
  padding: 0 8px;
  box-sizing: border-box;
  font-size: 10px;
  height: 20px;
  letter-spacing: 1.11px;
  text-transform: uppercase;
  font-family: Geomanist-Medium;
  font-weight: 500;
  color: ${theme.white};
  border-radius: 2px;
  background-color: ${backgroundColor};
  display: inline-block;
  line-height: 22px;
  ${hasRoundBorder && `border-radius: 3px;`}
  ${isOnCard &&
  `
      border: 1px solid ${theme.white};
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  `}
`;
