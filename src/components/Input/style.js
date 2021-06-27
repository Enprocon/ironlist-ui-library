import { css } from '@emotion/css';

export const inputWrapper = (theme, isInputFocus, disabled) => css`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;

  .focus-indicator {
    ${isInputFocus
      ? `
      position: absolute;
      background-color: ${theme.background.darkGrey1};
      bottom: 0;
      height: 2px;
      width: 100%;
    `
      : ''}
  }

  .input-label {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 4px;
    color: ${theme.background.darkGrey1};
    opacity: ${disabled ? 0.3 : 1};
  }
`;

export const inputStyles = (theme, size, disabled) => css`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  resize: none;
  background-color: ${theme.background.bgGrey2};
  font-family: Geomanist-Regular;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.1px;
  border-radius: 4px;

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

  padding: 15px 16px 13px 16px;

  color: ${theme.background.darkGrey1};

  ::placeholder {
    color: ${theme.background.darkGrey1};
    opacity: ${disabled ? 0.3 : 0.5};
  }

  :-ms-input-placeholder {
    color: ${theme.background.darkGrey1};
    opacity: ${disabled ? 0.3 : 0.5};
  }

  ::-ms-input-placeholder {
    color: ${theme.background.darkGrey1};
    opacity: ${disabled ? 0.3 : 0.5};
  }
`;
