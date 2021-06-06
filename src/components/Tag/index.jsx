import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { useThemeContext } from '../ThemeProvider';
import { tagContainer } from './style';

const Tag = ({ children, backgroundColor, hasRoundBorder, isOnCard, className }) => {
  const theme = useThemeContext();
  return <div className={c(tagContainer(theme, backgroundColor, hasRoundBorder, isOnCard), className)}>{children}</div>;
};

export default Tag;

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backgroundColor: PropTypes.string,
  hasRoundBorder: PropTypes.bool,
  isOnCard: PropTypes.bool
};

Tag.defaultProps = {
  className: '',
  children: '',
  backgroundColor: 'black',
  hasRoundBorder: false,
  isOnCard: false
};
