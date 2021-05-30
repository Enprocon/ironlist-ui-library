import React from 'react';
import PropTypes from 'prop-types';
import { LocationPinThick, MoreThick, IcCompare, Share, LikeThick } from '@ironlist/ironlist-icons';
import { useThemeContext } from '../ThemeProvider';
import Tag from '../Tag';
import Typography from '../Typography';
import { card, cardImage } from './style';

const HorizontalMachineCard = ({
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
  const theme = useThemeContext();
  return (
    <div className={card(theme)}>
      <div className={cardImage(image)} />
      <div className="card-content-wrapper">
        <div>
          <Tag isOnCard={false} backgroundColor={tag.backgroundColor} className="card-tag">
            {tag.label}
          </Tag>
        </div>
        <Typography variant="h7" color={theme.background.darkGrey1} className="card-title">
          {title}
        </Typography>
        <Typography variant="p7" color={theme.background.darkGrey1} className="card-subtitle">
          {subTitle}
        </Typography>
        <div className="sale-info">
          <Typography variant="l3" color={theme.background.darkGrey1}>
            {saleInfo}
          </Typography>
        </div>
        <Typography variant="p8" color={theme.background.darkGrey1} opacity={50} className="card-dealer">
          {dealer}
        </Typography>
        <div className="card-bottom">
          <div className="card-location-wrapper">
            <LocationPinThick />
            <Typography variant="p8" color={theme.background.darkGrey1} opacity={70} className="card-location">
              {location}
            </Typography>
            <Typography variant="p7" color={theme.background.darkGrey1} opacity={70} className="card-location">
              {distance}
            </Typography>
          </div>
          <div>
            <MoreThick className="card-icon" height={24} width={24} />
            <IcCompare className="card-icon" height={24} width={24} />
            <Share className="card-icon" height={24} width={24} onClick={onShareClick} />
            <LikeThick className="card-icon" height={24} width={24} onClick={onLikeClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalMachineCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  distance: PropTypes.string,
  location: PropTypes.string,
  dealer: PropTypes.string,
  itemInfo: PropTypes.string,
  saleInfo: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  onShareClick: PropTypes.func,
  onLikeClick: PropTypes.func,
  tag: PropTypes.shape({
    label: PropTypes.string,
    backgroundColor: PropTypes.string
  })
};

HorizontalMachineCard.defaultProps = {
  image: `https://d3g7ucapfhrqqt.cloudfront.net/images/ant-rozetsky-unsplash_2_11zon.jpg`,
  title: '1994 Wilson 53Ft Cattle Liner',
  subTitle: 'Cattle Liner',
  distance: '1,000kms away',
  location: 'Atlanta, Georgia, US',
  dealer: 'RB Auctions',
  saleInfo: 'Auction Date : 12.4.2020',
  itemInfo: {},
  onShareClick: () => {},
  onLikeClick: () => {},
  tag: {
    label: '',
    backgroundColor: 'red'
  }
};

export default HorizontalMachineCard;
