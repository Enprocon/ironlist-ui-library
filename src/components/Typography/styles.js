import { css } from '@emotion/css';

export const variantStyles = css`
  margin: 0;

  &.h1 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.8px;
    font-family: Geomanist-Medium;
  }

  &.h2 {
    font-size: 40px;
    line-height: 36px;
    letter-spacing: 0.3px;
    font-family: Geomanist-Medium;
  }

  &.h3,
  &.h4 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.3px;
  }

  &.h3 {
    font-family: Geomanist-Medium;
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
  }

  &.h6 {
    font-family: Geomanist-Regular;
  }

  &.p1 {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.1px;
    font-family: Geomanist-Regular;
  }

  &.p2,
  &.p3 {
    font-size: 18px;
    line-height: 24px;
  }

  &.p2 {
    letter-spacing: 0.11px;
    font-family: Geomanist-Regular;
  }

  &.p3 {
    letter-spacing: 0.1px;
    font-family: Geomanist-Medium;
  }

  &.p4,
  &.p5,
  &.p6 {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }

  &.p4 {
    font-family: Geomanist-Light;
  }

  &.p5 {
    font-family: Geomanist-Regular;
  }

  &.p6 {
    font-family: Geomanist-Medium;
  }

  &.p7,
  &.p8,
  &.p9 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }

  &.p7 {
    font-family: Geomanist-Regular;
  }

  &.p8 {
    font-family: Geomanist-Medium;
  }

  &.p9 {
    font-family: Geomanist-Regular;
    font-style: italic;
  }

  &.l1 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.8px;
    font-family: Geomanist-Medium;
  }

  &.l2,
  &.l3 {
    font-size: 14px;
    line-height: 16px;
    font-family: Geomanist-Regular;
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

  &.opacity-50 {
    opacity: 0.5;
  }

  &.opacity-30 {
    opacity: 0.3;
  }
`;

export const textColorStyles = (color) => css`
  color: ${color};
`;
