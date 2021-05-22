import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { checkbox } from './style';

const Checkbox = ({ children, isActive, className, onChange, value }) => {
  return (
    <div className={c(checkbox, className)}>
      <label className="container">
        {children}
        <input type="radio" checked={isActive ? 'checked' : ''} name="radio" onChange={() => onChange(value)} />
        <span className="checkmark" />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
Checkbox.defaultProps = {
  isActive: false,
  children: '',
  className: '',
  onChange: () => {},
  value: ''
};

export default Checkbox;
