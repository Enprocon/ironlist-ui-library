import styled from '@emotion/styled';

export const InputContainer = styled.input`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) => props.theme.background.bgGrey2};
  ${(props) => {
    switch (props.size) {
      case 'medium':
        return `
          height: 32px;
          font-size: 14px;
          line-height: 1.14;
          letter-spacing: 0.8px;
        `;
      case 'small':
        return `
          height: 32px;
          font-size: 12px;
          line-height: 1.14;
          letter-spacing: 0.8px;
        `;
      case 'large':
        return `
          height: 48px;
          font-size: 16px;
          line-height: 1.25;
          letter-spacing: 0.1px;
        `;
      default:
        return ``;
    }
  }};
  border-bottom: 2px solid transparent;
  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.background.darkGrey1};
  }
  padding: 8px;
  color: ${(props) => props.theme.background.darkGrey1};
  ::placeholder {
    color: ${(props) => props.theme.background.darkGrey1};
    opacity: 0.5;
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.background.darkGrey1};
    opacity: 0.5;
  }

  ::-ms-input-placeholder {
    color: ${(props) => props.theme.background.darkGrey1};
    opacity: 0.5;
  }
`;
