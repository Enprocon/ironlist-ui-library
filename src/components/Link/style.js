import { css } from '@emotion/css';

export const link = (theme, isActive) => css`
  color: ${theme.background.darkGrey1};
  opacity: 0.7;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-decoration: none;
  ${isActive
    ? `
    font-family: Geomanist-Medium;
    font-weight: 500;
  `
    : ''}
`;
