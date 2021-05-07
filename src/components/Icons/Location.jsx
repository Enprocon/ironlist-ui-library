import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Location = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} height={height} width={width} viewBox="0 0 20 20">
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#8F9197'}>
        <g>
          <g>
            <path
              d="M10 1.667c4.136 0 7.5 3.364 7.5 7.5 0 3.917-4.195 7.663-6.107 9.166H8.607C6.696 16.83 2.5 13.084 2.5 9.167c0-4.136 3.365-7.5 7.5-7.5zm0 1.666c-3.216 0-5.833 2.617-5.833 5.834 0 3.125 3.845 6.65 5.829 8.136 1.461-1.108 5.837-4.713 5.837-8.136 0-3.217-2.616-5.834-5.833-5.834zm0 2.5c1.838 0 3.333 1.496 3.333 3.334 0 1.837-1.495 3.333-3.333 3.333s-3.333-1.496-3.333-3.333c0-1.838 1.495-3.334 3.333-3.334zM10 7.5c-.919 0-1.667.747-1.667 1.667 0 .919.748 1.666 1.667 1.666.92 0 1.667-.747 1.667-1.666 0-.92-.748-1.667-1.667-1.667z"
              transform="translate(-752 -300) translate(395 286) translate(357 14)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Location;

Location.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Location.defaultProps = {
  className: '',
  fill: '',
  height: 20,
  width: 20
};
