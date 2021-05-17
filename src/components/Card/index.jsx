import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardText,
  CardContent,
  CardInfo,
  CardNameImage,
  CardName,
  CardDescription,
  Image
} from './style';

const Card = ({ text, info, className }) => {
  return (
    <CardContainer className={className}>
      <CardText>{text}</CardText>
      <CardContent>
        {info.image ? <Image src={info.image} /> : <CardNameImage>{info.name[0]}</CardNameImage>}
        <CardInfo>
          <CardName>{info.name}</CardName>
          <CardDescription>{info.description}</CardDescription>
        </CardInfo>
      </CardContent>
    </CardContainer>
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
