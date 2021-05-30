import { css } from '@emotion/css';

export const card = (theme) => css`
  width: 922px;
  border-radius: 4px;
  border: solid 1px #d3d9de;
  display: flex;

  .card-content-wrapper {
    padding: 12px;
    width: 100%;
  }
  .card-tag {
    margin-bottom: 8px;
  }
  .card-title {
    margin-bottom: 2px;
  }
  .card-subtitle {
    margin-bottom: 16px;
  }
  .card-location-wrapper {
    display: flex;
    align-items: flex-end;
  }
  .card-location {
    margin-left: 8px;
    margin-right: 8px;
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;
  }
  .card-icon {
    margin-left: 16px;
  }
  .sale-info {
    padding: 4px 8px;
    background-color: ${theme.background.bgGrey1};
    width: fit-content;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`;

export const cardImage = (image) => css`
  background: url('${image}') no-repeat center center;
  background-size: cover;
  height: 194px;
  min-width: 296px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
