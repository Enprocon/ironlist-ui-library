import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { size } from './helper';

const RightArrow = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} {...size(height, width)}>
    <defs>
      <filter id="qofiktl8ca">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g filter="url(#qofiktl8ca)" transform="translate(-1031 -348)">
        <g>
          <path
            fill={fill || '#002F34'}
            d="M4.333 1.333L4.333 2.276 5.181 3.123 10.057 8 5.181 12.877 5.181 12.876 4.333 13.724 4.333 14.667 5.276 14.667 6.123 13.819 11 8.943 11 8.943 11.667 8.276 11.667 7.725 9.039 5.096 9.039 5.096 6.123 2.18 5.276 1.333z"
            transform="translate(1031 348)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default RightArrow;

RightArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
RightArrow.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
