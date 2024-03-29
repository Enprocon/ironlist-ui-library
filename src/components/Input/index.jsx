import React, { useCallback, useState } from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import { inputStyles, inputWrapper } from './style';

const Input = ({
  type,
  placeholder,
  size,
  defaultValue,
  onChange,
  multiline,
  rows,
  className,
  value,
  disabled,
  label
}) => {
  const theme = useThemeContext();
  const Component = multiline ? 'textarea' : 'input';
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleOnChange = useCallback(
    (e) => {
      onChange(e.target.value, e);
    },
    [onChange]
  );

  return (
    <div className={inputWrapper(theme, isInputFocus, disabled)}>
      {label && (
        <label className="input-label" htmlFor={label}>
          {label}
        </label>
      )}
      <Component
        type={type}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={c(inputStyles(theme, size), className)}
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
        disabled={disabled}
        id={label}
      />
      <div className="focus-indicator" />
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  label: '',
  type: 'text',
  size: 'medium',
  value: undefined,
  className: '',
  multiline: false,
  rows: 3,
  placeholder: 'Enter your text here...',
  defaultValue: undefined,
  onChange: () => {},
  disabled: false
};
