import { css } from '@emotion/css';

export const tabs = css`
  display: flex;
`;

export const tab = (isLast) => css`
  margin-right: 36px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${isLast ? 'margin-right: 0;' : ''}
  text-align: center;
  position: relative;
  cursor: pointer;
`;

export const isActiveClass = (theme) => css`
  height: 4px;
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: ${theme.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
