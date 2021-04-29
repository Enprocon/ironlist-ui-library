import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { TagContainer } from './style';

const Tag = ({ children, backgroundColor, hasRoundBorder, isOnCard, className }) => (
  <ThemeProvider theme={theme}>
    <TagContainer
      backgroundColor={backgroundColor}
      hasRoundBorder={hasRoundBorder}
      isOnCard={isOnCard}
      className={className}
    >
      {children}
    </TagContainer>
  </ThemeProvider>
);

export default Tag;

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backgroundColor: PropTypes.string,
  hasRoundBorder: PropTypes.bool,
  isOnCard: PropTypes.bool
};

Tag.defaultProps = {
  className: '',
  children: '',
  backgroundColor: 'black',
  hasRoundBorder: false,
  isOnCard: false
};
