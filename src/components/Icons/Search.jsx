import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Search = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} height={height} width={width} viewBox="0 0 20 20">
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#8F9197'}>
        <g>
          <g>
            <path
              d="M8.75 14.167c-2.987 0-5.417-2.43-5.417-5.417 0-2.987 2.43-5.417 5.417-5.417 2.987 0 5.417 2.43 5.417 5.417 0 2.987-2.43 5.417-5.417 5.417zm8.524 1.929l-2.967-2.967c.953-1.207 1.526-2.726 1.526-4.379 0-3.906-3.177-7.083-7.083-7.083S1.667 4.844 1.667 8.75s3.177 7.083 7.083 7.083c1.653 0 3.172-.573 4.378-1.526l3.497 3.497.53.53h1.178v-1.179l-1.059-1.06z"
              transform="translate(-407 -300) translate(395 286) translate(12 14)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Search;

Search.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Search.defaultProps = {
  className: '',
  fill: '',
  height: 20,
  width: 20
};
