import { css } from '@emotion/css';

export const variantStyles = (device) => css`
  margin: 0;

  &.h1 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.8px;
    font-family: Geomanist-Medium;
    font-weight: 500;

    ${device === 'mobile'
      ? `
      font-size: 40px;
      line-height: 1;
      letter-spacing: 0.5px;
    `
      : ''}
  }

  &.h2 {
    font-size: 40px;
    line-height: 36px;
    letter-spacing: 0.3px;
    font-family: Geomanist-Medium;
    font-weight: 500;
    ${device === 'mobile'
      ? `
        font-size: 32px;
        line-height: 1.13;
        letter-spacing: 0.3px;
      `
      : ''}
  }

  &.h3,
  &.h4 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.3px;
    ${device === 'mobile'
      ? `
        font-size: 24px;
        line-height: 26px;
        letter-spacing: 0.3px;
      `
      : ''}
  }

  &.h3 {
    font-family: Geomanist-Medium;
    font-weight: 500;
  }

  &.h4 {
    font-family: Geomanist-Regular;
  }

  &.h5,
  &.h6 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.2px;
  }

  &.h5 {
    font-family: Geomanist-Medium;
    font-weight: 500;

    ${device === 'mobile'
      ? `
        opacity: 0.7;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.2px;
    `
      : ''}
  }

  &.h6 {
    font-family: Geomanist-Regular;
    ${device === 'mobile'
      ? `
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.2px;
    `
      : ''}
  }
  &.h7 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.09;
    font-family: Geomanist-Medium;
  }

  &.p1 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.1px;
    font-family: Geomanist-Regular;
    ${device === 'mobile'
      ? `
      font-size: 18px;
    `
      : ''}
  }

  &.p2,
  &.p3 {
    font-size: 18px;
    line-height: 24px;
    ${device === 'mobile'
      ? `
      font-size: 16px;
      line-height: 20px;
    `
      : ''}
  }

  &.p2 {
    letter-spacing: 0.1px;
    font-family: Geomanist-Regular;
  }

  &.p3 {
    letter-spacing: 0.1px;
    font-family: Geomanist-Medium;
    font-weight: 500;
  }

  &.p4,
  &.p5,
  &.p6 {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
    ${device === 'mobile'
      ? `
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
    `
      : ''}
  }

  ${device === 'mobile' &&
  `
    &.p5 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
    }

    &.p7 {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.2px;
    }
  `}

  &.p4 {
    font-family: Geomanist-Regular;
    font-weight: 300;
  }

  &.p5 {
    font-family: Geomanist-Regular;
  }

  &.p6 {
    font-family: Geomanist-Medium;
    letter-spacing: 0.1px;
    font-weight: 500;
  }

  &.p7,
  &.p8,
  &.p9 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    ${device === 'mobile'
      ? `
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.2px;
    `
      : ''}
  }

  &.p7 {
    font-family: Geomanist-Regular;
    letter-spacing: 0;
  }

  &.p8 {
    font-family: Geomanist-Medium;
    letter-spacing: 0.2px;
  }

  &.p9 {
    font-family: Geomanist-Regular;
    font-style: italic;
    letter-spacing: 0.2px;
  }

  &.l1 {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.8px;
    font-family: Geomanist-Medium;
    font-weight: 500;

    ${device === 'mobile'
      ? `
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.8px;
    `
      : ''}
  }

  &.l2,
  &.l3 {
    font-size: 14px;
    line-height: 16px;
    font-family: Geomanist-Regular;
    ${device === 'mobile'
      ? `
      font-size: 12px;
      line-height: 16px;
    `
      : ''}
  }

  &.l2 {
    letter-spacing: 0.8px;
  }

  &.l3 {
    letter-spacing: 0.4px;
  }

  &.l4 {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    font-family: Geomanist-Regular;
    ${device === 'mobile'
      ? `
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 1px;
    `
      : ''}
  }
`;

export const textAlignStyles = css`
  &.align-left {
    text-align: left;
  }

  &.align-center {
    text-align: center;
  }

  &.align-right {
    text-align: right;
  }
`;

export const textTransformStyles = css`
  &.transform-capitalize {
    text-transform: capitalize;
  }

  &.transform-uppercase {
    text-transform: uppercase;
  }
`;

export const opacityStyles = css`
  &.opacity-100 {
    opacity: 1;
  }

  &.opacity-70 {
    opacity: 0.7;
  }

  &.opacity-60 {
    opacity: 0.6;
  }

  &.opacity-50 {
    opacity: 0.5;
  }

  &.opacity-30 {
    opacity: 0.3;
  }
`;

export const weightStyles = css`
  &.weight-regular {
    font-family: Geomanist-Regular;
  }

  &.weight-medium: {
    font-family: Geomanist-Medium;
  }
`;

export const textColorStyles = (color) => css`
  color: ${color};
`;
