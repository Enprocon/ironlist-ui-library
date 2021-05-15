import styled from 'styled-components';
import { css } from '@emotion/css';

export const inputStyles = (theme, size) => css`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  resize: none;
  background-color: ${theme.background.bgGrey2};

  ${size === 'medium' ||
  (size === 'small' &&
    `
      height: 32px;
      font-size: 14px;
      line-height: 1.14;
      letter-spacing: 0.8px;
  `)}

  ${size === 'large' &&
  `
      height: 48px;
      font-size: 16px;
      line-height: 1.25;
      letter-spacing: 0.1px;
  `}

  border-bottom: 2px solid transparent;

  &:focus {
    border-bottom: 2px solid ${theme.background.darkGrey1};
  }

  padding: 8px;

  color: ${theme.background.darkGrey1};

  ::placeholder {
    color: ${theme.background.darkGrey1};
    opacity: 0.5;
  }

  :-ms-input-placeholder {
    color: ${theme.background.darkGrey1};
    opacity: 0.5;
  }

  ::-ms-input-placeholder {
    color: ${theme.background.darkGrey1};
    opacity: 0.5;
  }
`;
