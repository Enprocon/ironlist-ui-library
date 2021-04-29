import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme';
import { CardContainer, CardText, CardContent, CardInfo, CardNameImage, CardName, CardDescription } from './style';

const Card = ({ text, info, className }) => {
  return (
    <ThemeProvider theme={theme}>
      <CardContainer className={className}>
        <CardText>{text}</CardText>
        <CardContent>
          {info.image ? null : <CardNameImage>{info.name[0]}</CardNameImage>}
          <CardInfo>
            <CardName>{info.name}</CardName>
            <CardDescription>{info.description}</CardDescription>
          </CardInfo>
        </CardContent>
      </CardContainer>
    </ThemeProvider>
  );
};

export default Card;

Card.propTypes = {
  text: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string
};

Card.defaultProps = {
  text: '',
  info: {},
  className: ''
};
