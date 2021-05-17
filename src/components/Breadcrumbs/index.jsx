import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import { breadcrumbs, seprator } from './style';

const Breadcrumbs = ({ children }) => {
  const theme = useThemeContext();
  return (
    <div className={breadcrumbs}>
      {children.map((child, index) => (
        <Fragment key={child.props.children}>
          {child}
          {index !== children.length - 1 && <div className={seprator(theme)}>/</div>}
        </Fragment>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
};

Breadcrumbs.defaultProps = {
  children: []
};

export default Breadcrumbs;
