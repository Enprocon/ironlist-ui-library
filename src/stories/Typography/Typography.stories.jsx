import React from 'react';
import { css } from '@emotion/css';
import Typography from '../../components/Typography';

export default {
  title: 'Example/Typography',
  component: Typography
};

const containerStyles = css`
  display: flex;
  flex-direction: column;

  * + * {
    margin-top: 12px;
  }
`;

const variants = [
  { variant: 'h1', children: 'Headline 1' },
  { variant: 'h2', children: 'Headline 2', opacity: 70 },
  { variant: 'h3', children: 'Headline 3', color: '#f88932' },
  { variant: 'h4', children: 'Headline 4', opacity: 50 },
  { variant: 'h5', children: 'Headline 5', color: '#de1609' },
  { variant: 'h6', children: 'Headline 6', opacity: 30 },
  { variant: 'p1', children: 'Paragraph 1', color: '#f88932' },
  { variant: 'p2', children: 'Paragraph 2' },
  { variant: 'p3', children: 'Paragraph 3', color: '#de1609' },
  { variant: 'p4', children: 'Paragraph 4', opacity: 70 },
  { variant: 'p5', children: 'Paragraph 5' },
  { variant: 'p6', children: 'Paragraph 6', color: '#f88932' },
  { variant: 'p7', children: 'Paragraph 7' },
  { variant: 'p8', children: 'Paragraph 8', opacity: 30 },
  { variant: 'p9', children: 'Paragraph 9', color: '#f88932' },
  { variant: 'l1', children: 'Label 1' },
  { variant: 'l2', children: 'Label 2', color: '#f88932' },
  { variant: 'l3', children: 'Label 3' },
  { variant: 'l4', children: 'Label 4', color: '#de1609' }
];

export const Default = () => (
  <div className={containerStyles}>
    {variants.map(({ variant, children, color, opacity }) => (
      <Typography variant={variant} color={color} opacity={opacity}>
        {children}
      </Typography>
    ))}
  </div>
);
