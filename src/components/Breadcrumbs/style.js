import { css } from '@emotion/css';

export const breadcrumbs = css`
  display: flex;
  align-items: center;
`;

export const seprator = (theme) => css`
  margin-left: 8px;
  margin-right: 8px;
  color: ${theme.background.darkGrey1};
  opacity: 0.7;
`;
