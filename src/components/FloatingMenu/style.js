import styled from '@emotion/styled';

export const FloatingButton = styled.div`
  display: flex;
  height: 40px;
  box-sizing: border-box;
  width: fit-content;
  border-radius: 24px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
    0 24px 38px 3px rgba(0, 0, 0, 0.14);
`;

export const MenuWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: ${(props) => (props.isFirst ? '20px' : '16px')};
  padding-right: ${(props) => (props.isLast ? '20px' : '16px')};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const ActiveCircle = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
`;

export const Seprator = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${(props) => props.theme.background.bgGrey1};
  margin-top: 8px;
  margin-bottom: 8px;
`;
