import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { useThemeContext } from '../ThemeProvider';
import { breadcrumbs, seprator } from './style';

const Breadcrumbs = ({ children, className }) => {
  const theme = useThemeContext();
  return (
    <div className={c(breadcrumbs, className)}>
      {children.length
        ? children.map((child, index) => (
            <Fragment key={child.props.children}>
              {child}
              {index !== children.length - 1 && <div className={seprator(theme)}>/</div>}
            </Fragment>
          ))
        : children}
    </div>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  className: PropTypes.string
};

Breadcrumbs.defaultProps = {
  children: [],
  className: ''
};

export default Breadcrumbs;
