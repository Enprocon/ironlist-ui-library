import User from './User';
import AfterNoon from './AfterNoon';
import Filter from './Filter';
import Navigation from './Navigation';
import Up from './Up';
import Down from './Down';
import Location from './Location';
import Search from './Search';
import RightArrow from './RightArrow';
import SocialShare from './SocialShare';
import Like from './Like';

const size = (x, y = x) => ({
  width: x,
  height: y,
  viewBox: `0 0 ${x} ${y}`
});

const iconList = {
  user: User,
  afternoon: AfterNoon,
  filter: Filter,
  navigation: Navigation,
  up: Up,
  down: Down,
  location: Location,
  search: Search,
  rightArrow: RightArrow,
  'social-share': SocialShare,
  like: Like
};

const getIcon = (type) => iconList[type];

export { iconList, getIcon, size };
