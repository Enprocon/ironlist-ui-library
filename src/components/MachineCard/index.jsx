import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import Tag from '../Tag';
import Icons from '../Icons';
import {
  CardWrapper,
  CardImageWrapper,
  CardImage,
  CardTitle,
  CardSubtitle,
  Distance,
  Location,
  SaleWrapper,
  Dealer,
  DotSeprator,
  infoWrapper,
  headerWrapper,
  iconWrapper,
  cardTag
} from './style';

const MachineCard = ({
  itemInfo,
  image,
  title,
  subTitle,
  distance,
  location,
  dealer,
  saleInfo,
  onShareClick,
  onLikeClick,
  tag
}) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const theme = useThemeContext();
  const imageObject = new Image();
  imageObject.onload = () => {
    setBackgroundImage(image);
  };
  imageObject.src = image;
  return (
    <CardWrapper>
      <div className={headerWrapper}>
        <CardImageWrapper />
        <CardImage src={backgroundImage} />
        <div className={iconWrapper}>
          <Icons type="social-share" fill={theme.white} className="card-icon" onClick={() => onShareClick(itemInfo)} />
          <Icons type="like" fill={theme.white} className="card-icon" onClick={() => onLikeClick(itemInfo)} />
        </div>
        <Tag isOnCard hasRoundBorder backgroundColor={tag.backgroundColor} className={cardTag}>
          {tag.label}
        </Tag>
      </div>
      <CardTitle theme={theme}>{title}</CardTitle>
      <CardSubtitle>{subTitle}</CardSubtitle>
      <SaleWrapper>
        {saleInfo}
        <DotSeprator />
        <Dealer>{dealer}</Dealer>
      </SaleWrapper>
      <div className={infoWrapper}>
        <Location theme={theme}>
          <Icons type="location" />
          {location}
        </Location>
        <Distance theme={theme}>{distance}</Distance>
      </div>
    </CardWrapper>
  );
};

MachineCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  distance: PropTypes.string,
  location: PropTypes.string,
  dealer: PropTypes.string,
  itemInfo: PropTypes.objectOf(PropTypes.any),
  saleInfo: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  onShareClick: PropTypes.func,
  onLikeClick: PropTypes.func,
  tag: PropTypes.shape({
    label: PropTypes.string,
    backgroundColor: PropTypes.string
  })
};

MachineCard.defaultProps = {
  image: `https://d3g7ucapfhrqqt.cloudfront.net/images/ant-rozetsky-unsplash_2_11zon.jpg`,
  title: '1994 Wilson 53Ft Cattle Liner',
  subTitle: 'Cattle Liner',
  distance: '1,000kms away',
  location: 'Atlanta, Georgia, US',
  dealer: 'RB Auctions',
  saleInfo: <div>Auction Date : 12.4.2020</div>,
  itemInfo: {},
  onShareClick: () => {},
  onLikeClick: () => {},
  tag: {
    label: '',
    backgroundColor: 'red'
  }
};

export default MachineCard;
