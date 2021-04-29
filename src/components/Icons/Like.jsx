import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { size } from './helper';

const Like = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} {...size(height, width)}>
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#62656E'}>
        <g>
          <g>
            <path
              d="M19.472 10.515L12 19.655l-7.45-9.11c-.479-.638-.732-1.392-.732-2.181 0-2.006 1.632-3.637 3.637-3.637 1.69 0 3.11 1.162 3.516 2.728h2.058c.405-1.566 1.826-2.728 3.516-2.728 2.005 0 3.637 1.631 3.637 3.637 0 .79-.253 1.543-.71 2.151M16.545 2.91c-1.895 0-3.567.971-4.545 2.442C11.022 3.88 9.35 2.91 7.455 2.91 4.447 2.91 2 5.355 2 8.364c0 1.187.38 2.319 1.12 3.302l7.706 9.425h2.348l7.728-9.454C21.62 10.683 22 9.551 22 8.364c0-3.009-2.447-5.455-5.455-5.455"
              transform="translate(-372 -2100) translate(108 2092) translate(264 8)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Like;

Like.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Like.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
