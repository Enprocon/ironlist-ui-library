import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { size } from './helper';

const Down = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} {...size(height, width)}>
    <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
      <g fill={fill || '#62656E'}>
        <g>
          <g>
            <path
              d="M4.334 1.333L4.334 2.276 5.182 3.123 10.058 8 5.182 12.877 5.182 12.876 4.334 13.724 4.334 14.667 5.277 14.667 6.124 13.819 11.001 8.943 11.001 8.943 11.668 8.276 11.668 7.725 9.04 5.096 9.04 5.096 6.124 2.18 5.277 1.333z"
              transform="translate(-1039 -32) translate(987 20) translate(52 12) matrix(0 1 1 0 0 0)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Down;

Down.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Down.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
