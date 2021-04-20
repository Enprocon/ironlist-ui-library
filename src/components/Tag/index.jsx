import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { TagContainer } from './style';

export const Tag = ({ children, backgroundColor, hasRoundBorder }) => (
  <ThemeProvider theme={theme}>
    <TagContainer backgroundColor={backgroundColor} hasRoundBorder={hasRoundBorder}>
      {children}
    </TagContainer>
  </ThemeProvider>
);

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backgroundColor: PropTypes.string,
  hasRoundBorder: PropTypes.bool
};

Tag.defaultProps = {
  children: '',
  backgroundColor: 'black',
  hasRoundBorder: false
};
