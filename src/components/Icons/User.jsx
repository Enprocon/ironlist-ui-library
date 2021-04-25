import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { size } from './helper';

const User = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} {...size(height, width)}>
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#62656E'}>
        <g>
          <path
            d="M12 12c4.963 0 9 4.038 9 9l-1 1H4l-1-1c0-4.962 4.037-9 9-9zm0 2c-3.52 0-6.442 2.613-6.929 6H18.93c-.487-3.387-3.409-6-6.93-6zm0-12c2.481 0 4.5 2.018 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5S7.5 8.981 7.5 6.5C7.5 4.018 9.519 2 12 2zm0 2c-1.379 0-2.5 1.121-2.5 2.5C9.5 7.878 10.621 9 12 9s2.5-1.122 2.5-2.5C14.5 5.121 13.379 4 12 4z"
            transform="translate(-73 -180) translate(73 180)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default User;

User.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
User.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
