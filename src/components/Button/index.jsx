import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';
import { ButtonWrapper } from './style';

const Button = ({ children, onClick, type, className, size, disabled }) => {
  const onButtonClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper type={type} size={size} disabled={disabled} onClick={onButtonClick} className={className}>
        {children}
      </ButtonWrapper>
    </ThemeProvider>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'xl']),
  className: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: false
};
