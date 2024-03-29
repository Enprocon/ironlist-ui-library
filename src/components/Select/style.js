import styled from 'styled-components';
import { css } from '@emotion/css';

export const selectWrapper = css`
  position: relative;
`;

export const selectContainer = (theme, width) => css`
  height: 32px;
  padding-right: 8px;
  padding-left: 12px;
  border-radius: 4px;
  border: 2px solid ${theme.background.bgGrey1};
  width: ${width || 'fit-content'};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  font-family: Geomanist-Medium;
  font-size: 14px;
  line-height: 31px;
  letter-spacing: 0.6px;
  .select-icon {
    margin-left: 16px;
    opacity: 0.7;
  }
`;

export const OptionList = styled.div`
  box-shadow: 0 6px 10px 0 rgba(55, 70, 95, 0.12);
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 999;
`;

export const SelectedText = styled.div`
  color: ${(props) => props.theme.background.darkbgGrey1};
  opacity: 0.7;
`;

export const OptionContainer = styled.div`
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => (props.optionBackgroundColor ? props.optionBackgroundColor : props.theme.white)};
  ${(props) =>
    props.isFirst &&
    `
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    `}
  ${(props) =>
    props.isLast &&
    `
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    `}
  &:hover {
    background-color: ${(props) => props.theme.background.bgGrey2};
  }
`;
