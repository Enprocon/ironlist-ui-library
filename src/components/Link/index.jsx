import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { useThemeContext } from '../ThemeProvider';
import { link } from './style';

const Link = ({ children, href, isActive, onClick, className }) => {
  const theme = useThemeContext();
  return (
    <a href={href} onClick={onClick} className={c(link(theme, isActive), className)}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  href: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Link.defaultProps = {
  children: [],
  href: '',
  isActive: false,
  onClick: () => {},
  className: ''
};

export default Link;
