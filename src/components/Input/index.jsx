import React, { useCallback } from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import { inputStyles } from './style';

const Input = ({ type, placeholder, size, defaultValue, onChange, multiline, rows, className, value }) => {
  const theme = useThemeContext();
  const Component = multiline ? 'textarea' : 'input';

  const handleOnChange = useCallback(
    (e) => {
      onChange(e.target.value, e);
    },
    [onChange]
  );

  return (
    <Component
      type={type}
      rows={rows}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={handleOnChange}
      className={c(inputStyles(theme, size), className)}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  value: undefined,
  className: '',
  multiline: false,
  rows: 3,
  placeholder: 'Enter your text here...',
  defaultValue: undefined,
  onChange: () => {}
};
