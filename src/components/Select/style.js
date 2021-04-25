import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  height: 32px;
  padding: 8px;
  padding-left: 12px;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.black};
  width: fit-content;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-family: Geomanist-Medium;
  .select-icon {
    margin-left: 16px;
  }
`;

export const OptionList = styled.div`
  box-shadow: 0 6px 10px 0 rgba(55, 70, 95, 0.12);
`;

export const OptionContainer = styled.div`
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  ${(props) =>
    props.optionBackgroundColor
      ? css`
          background-color: ${props.optionBackgroundColor};
        `
      : `background-color: ${props.theme.white}`}
  ${(props) =>
    props.isFirst &&
    css`
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    `}
  ${(props) =>
    props.isLast &&
    css`
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    `}
  &:hover {
    background-color: ${(props) => props.theme.background.bgGrey2};
  }
`;
