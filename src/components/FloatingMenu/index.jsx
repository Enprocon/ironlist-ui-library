import React from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import Icons from '../Icons';
import { FloatingButton, MenuWrapper, IconWrapper, ActiveCircle, Seprator } from './style';

const FloatingMenu = ({ menuList, onMenuClick }) => {
  const theme = useThemeContext();

  const onClick = (menu, e) => {
    onMenuClick(menu, e);
  };

  return (
    <FloatingButton>
      {menuList.map((menu, index) => (
        <>
          <MenuWrapper isFirst={index === 0} isLast={index === menuList.length - 1} onClick={(e) => onClick(menu, e)}>
            <IconWrapper>
              {menu.isActive && <ActiveCircle theme={theme} />}
              <Icons type={menu.icon} />
            </IconWrapper>
          </MenuWrapper>
          {index !== menuList.length - 1 ? <Seprator theme={theme} /> : null}
        </>
      ))}
    </FloatingButton>
  );
};

FloatingMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object),
  onMenuClick: PropTypes.func
};

FloatingMenu.defaultProps = {
  menuList: [
    {
      icon: 'navigation',
      isActive: false
    },
    {
      icon: 'filter',
      isActive: true
    }
  ],
  onMenuClick: () => {}
};

export default FloatingMenu;
