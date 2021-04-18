import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { TagContainer } from './style';

export const Tag = ({ children, backgroundColor }) => {
  return (
    <ThemeProvider theme={theme}>
      <TagContainer backgroundColor={backgroundColor}>{children}</TagContainer>
    </ThemeProvider>
  );
};

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backgroundColor: PropTypes.string,
};

Tag.defaultProps = {
  children: '',
  backgroundColor: 'black',
};
