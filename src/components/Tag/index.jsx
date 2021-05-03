import React from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import { TagContainer } from './style';

const Tag = ({ children, backgroundColor, hasRoundBorder, isOnCard, className }) => {
  const theme = useThemeContext();

  return (
    <TagContainer
      theme={theme}
      backgroundColor={backgroundColor}
      hasRoundBorder={hasRoundBorder}
      isOnCard={isOnCard}
      className={className}
    >
      {children}
    </TagContainer>
  );
};

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
