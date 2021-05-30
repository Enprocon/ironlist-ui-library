import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { useThemeContext } from '../ThemeProvider';
import { tabs, tab, isActiveClass } from './style';

const Tabs = ({ children, className, activeValue, onChange }) => {
  return (
    <div className={c(tabs, className)}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isLast: index === children.length,
          isActive: activeValue === child.props.value,
          onChange
        })
      )}
    </div>
  );
};

const Tab = ({ children, onChange, value, className, isActive, isLast }) => {
  const theme = useThemeContext();
  return (
    <div className={c(tab(isLast), className)} onClick={() => onChange(value)} role="presentation">
      {children}
      {isActive && <div className={isActiveClass(theme)} />}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
  activeValue: PropTypes.string,
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  children: [],
  className: '',
  activeValue: '',
  onChange: () => {}
};

Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  isActive: PropTypes.bool,
  isLast: PropTypes.bool
};

Tab.defaultProps = {
  children: [],
  className: '',
  onChange: () => {},
  value: '',
  isActive: false,
  isLast: false
};

export default Tabs;
export { Tabs, Tab };
