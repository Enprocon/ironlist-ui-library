import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Navigation = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} height={height} width={width} viewBox="0 0 16 16">
    <g fill="none" fillRule="evenodd" opacity=".8">
      <g fill={fill || '#62656E'}>
        <g>
          <g>
            <path
              d="M5.805 1.529l3.529 3.528V6H8.39l-.848-.847L6 3.609V14l-.667.667L4.667 14V3.61L3.123 5.152 2.277 6h-.943v-.943l.848-.847 2.681-2.681h.943zm4.862-.196l.666.667v10.39l1.544-1.543.847-.847h.943v.943l-.847.847-2.682 2.681h-.943l-3.528-3.528V10h.942l.848.847L10 12.39V2l.667-.667z"
              transform="translate(-148 -676) translate(128 664) translate(20 12)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
Navigation.defaultProps = {
  className: '',
  fill: '',
  height: 16,
  width: 16
};
