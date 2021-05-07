import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const RightArrow = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} height={height} width={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#62656E'}>
        <g>
          <g>
            <path
              d="M6.5 2L6.5 3.414 7.771 4.684 15.086 12 7.771 19.315 7.771 19.314 6.5 20.586 6.5 22 7.914 22 9.184 20.729 16.5 13.414 16.5 13.415 17.5 12.415 17.5 11.587 13.558 7.644 13.559 7.644 9.184 3.27 7.914 2z"
              transform="translate(-1367 -2242) translate(1356 2232) translate(11 10)"
            />
          </g>
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
