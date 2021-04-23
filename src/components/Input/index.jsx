import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { InputContainer } from './style';

const Input = ({ type, placeholder, size, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <ThemeProvider theme={theme}>
      <InputContainer
        type={type}
        placeholder={placeholder}
        size={size}
        value={value}
        onChange={(e) => {
          const text = e.target.value;
          setValue(text);
          onChange(text);
        }}
      />
    </ThemeProvider>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  placeholder: 'Enter your text here...',
  defaultValue: 'Simple text',
  onChange: () => {}
};
