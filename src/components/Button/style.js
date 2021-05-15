import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  ${(props) => {
    if (props.size === 'large') {
      return `
        font-size: 14px;
        height: 40px;
        letter-spacing: 0.6px;
        font-family: 'Geomanist-Medium';
        font-weight: 500;
        padding-left: 16px;
        padding-right: 16px;
      `;
    }
    return '';
  }}
  ${(props) => {
    if (props.type === 'primary') {
      return `
        background-color: ${props.theme.primary};
        color: ${props.theme.white};
        &:hover {
          background-color: ${props.theme.primaryShade.one};
        }
        &:active {
          background-color: ${props.theme.primaryTint.two};
        }
        ${
          props.disabled &&
          `
          background-color: ${props.theme.background.bgGrey1};
          opacity: 0.3;
          color: ${props.theme.background.darkGrey1};
          cursor: default;
          &:hover {
            background-color: ${props.theme.background.bgGrey1};
          }
          &:active {
            background-color: ${props.theme.background.bgGrey1};
          }
        `
        }
      `;
    }
    if (props.type === 'secondary') {
      return `
        background-color: ${props.theme.white};
        border: 2px solid ${props.theme.primary};
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background-color: transparent;
          z-index: -1;
          border-radius: 4px;
        }
        color: ${props.theme.primary};
        &:hover {
          &:after {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            background-color: ${props.theme.primary};
            z-index: -1;
            border-radius: 4px;
          }
        }
        &:active {
          &:after {
            background-color: ${props.theme.primaryTint.two};
          }
          background-color: ${props.theme.white};
          border-color: ${props.theme.primaryTint.two};
        }
        ${
          props.disabled &&
          `
          opacity: 0.4;
          color: ${props.theme.primary};
          cursor: default;
          &:hover {
            &:after {
              background-color: transparent;
            }
            color: ${props.theme.primary};
          }
          &:active {
            background-color: ${props.theme.white};
          }
        `
        }
      `;
    }
    if (props.type === 'tertiary') {
      return `
        background-color: transparent;
        color: ${props.color || props.theme.primary};
        &:active {
          opacity: 0.8;
        }
        ${
          props.disabled &&
          `
          cursor: default;
          opacity: 0.4;
        `
        }
      `;
    }
    return '';
  }}
`;
