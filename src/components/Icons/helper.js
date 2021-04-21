import User from './User';
import AfterNoon from './AfterNoon';
import Filter from './Filter';
import Navigation from './Navigation';

export const size = (x, y = x) => ({
  width: x,
  height: y,
  viewBox: `0 0 ${x} ${y}`
});

export const iconList = {
  user: User,
  afternoon: AfterNoon,
  filter: Filter,
  navigation: Navigation
};

export const getIcon = (type) => iconList[type];
