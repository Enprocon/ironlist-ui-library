import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { size } from './helper';

const Filter = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} {...size(height, width)}>
    <g fill="none" fillRule="evenodd" opacity=".8">
      <g fill={fill || '#62656E'}>
        <g>
          <g>
            <path
              d="M5.333 10c.869 0 1.608.558 1.884 1.333H14l.667.667-.667.667H7.217C6.94 13.442 6.202 14 5.333 14c-.868 0-1.608-.558-1.883-1.333H2L1.333 12 2 11.333h1.45C3.725 10.558 4.465 10 5.333 10zm0 1.333c-.367 0-.666.3-.666.667 0 .368.299.667.666.667.368 0 .667-.3.667-.667 0-.368-.299-.667-.667-.667zM10.667 6c.868 0 1.608.558 1.883 1.333H14l.667.667-.667.667h-1.45C12.275 9.442 11.535 10 10.667 10c-.869 0-1.608-.558-1.884-1.333H2L1.333 8 2 7.333h6.783C9.06 6.558 9.798 6 10.667 6zm0 1.333c-.368 0-.667.3-.667.667 0 .368.299.667.667.667.367 0 .666-.3.666-.667 0-.368-.299-.667-.666-.667zM5.333 2c.869 0 1.608.558 1.884 1.333H14l.667.667-.667.667H7.217C6.94 5.442 6.202 6 5.333 6c-.868 0-1.608-.558-1.883-1.333H2L1.333 4 2 3.333h1.45C3.725 2.558 4.465 2 5.333 2zm0 1.333c-.367 0-.666.3-.666.667 0 .368.299.667.666.667.368 0 .667-.3.667-.667 0-.368-.299-.667-.667-.667z"
              transform="translate(-197 -676) translate(128 664) translate(69 12)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Filter;

Filter.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Filter.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
