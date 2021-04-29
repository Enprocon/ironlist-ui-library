import styled from '@emotion/styled';
import { css } from '@emotion/css';

export const CardWrapper = styled.div`
  width: 296px;
  box-sizing: border-box;
  position: relative;
`;

export const headerWrapper = css`
  position: relative;
`;

export const iconWrapper = css`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  .card-icon {
    margin: 8px;
    cursor: pointer;
  }
`;

export const cardTag = css`
  position: absolute;
  bottom: 12px;
`;

export const CardImageWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  border-radius: 4px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
`;

export const CardImage = styled.div`
  ${(props) =>
    props.src
      ? `background: url(${props.src}) center center no-repeat;`
      : `
          @keyframes placeHolderShimmer{
            0%{
                background-position: -468px 0
            }
            100%{
                background-position: 468px 0
            }
          }
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: #f6f7f8;
          background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
          background-size: 800px 104px;
          height: 96px;
          position: relative;
  `}
  background-size: cover;
  border-radius: 4px;
  height: 194px;
  width: auto;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  margin-top: 12px;
  letter-spacing: 0;
  font-family: Geomanist-Medium;
  color: ${(props) => props.theme.background.darkGrey1};
  margin-bottom: 0;
  padding-right: 48px;
`;

export const CardSubtitle = styled.p`
  margin-top: 4px;
  font-size: 14px;
  letter-spacing: 0;
  margin-bottom: 0;
  opacity: 0.5;
`;

export const infoWrapper = css`
  display: flex;
  margin-top: 12px;
  margin-bottom: 0;
`;

export const DotSeprator = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Location = styled.p`
  font-family: Geomanist-Medium;
  opacity: 0.7;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${(props) => props.theme.background.darkGrey1};
`;

export const Distance = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  line-height: 1.43;
  color: ${(props) => props.theme.background.darkGrey1};
`;

export const SaleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 0;
`;

export const Dealer = styled.p`
  margin: 0;
  font-family: Geomanist-Medium;
  font-size: 14px;
  letter-spacing: 0;
  opacity: 0.5;
`;
