import User from './User';
import AfterNoon from './AfterNoon';

export const size = (x, y = x) => ({
  width: x,
  height: y,
  viewBox: `0 0 ${x} ${y}`
});

export const iconList = {
  user: User,
  afternoon: AfterNoon
};

export const getIcon = (type) => iconList[type];
