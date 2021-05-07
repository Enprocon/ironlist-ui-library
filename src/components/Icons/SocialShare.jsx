import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const SocialShare = ({ className, fill, height, width }) => (
  <svg className={c('Icon', className)} height={height} width={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <g fill={fill || '#62656E'}>
        <g>
          <path
            d="M18 20c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2M6 14c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2M18 4c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2m0 10c-1.229 0-2.313.565-3.047 1.437l-5.008-2.892c.025-.179.055-.358.055-.545 0-.112-.024-.217-.033-.326l5.116-2.954C15.812 9.503 16.845 10 18 10c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4c0 .333.053.652.129.961L9.304 9.748C8.583 8.693 7.373 8 6 8c-2.209 0-4 1.791-4 4s1.791 4 4 4c1.3 0 2.443-.63 3.174-1.59l4.903 2.83c-.048.247-.077.5-.077.76 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4"
            transform="translate(-74 -1532) translate(74 1532)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SocialShare;

SocialShare.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};
SocialShare.defaultProps = {
  className: '',
  fill: '',
  height: 24,
  width: 24
};
