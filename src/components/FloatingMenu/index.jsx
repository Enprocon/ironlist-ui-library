import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Icons from '../Icons';
import { FloatingButton, MenuWrapper, IconWrapper, ActiveCircle, Seprator } from './style';
import { theme } from '../../theme';

const FloatingMenu = ({ menuList, onMenuClick }) => {
  const onClick = (menu, e) => {
    onMenuClick(menu, e);
  };
  return (
    <ThemeProvider theme={theme}>
      <FloatingButton>
        {menuList.map((menu, index) => (
          <>
            <MenuWrapper isFirst={index === 0} isLast={index === menuList.length - 1} onClick={(e) => onClick(menu, e)}>
              <IconWrapper>
                {menu.isActive && <ActiveCircle />}
                <Icons type={menu.icon} />
              </IconWrapper>
            </MenuWrapper>
            {index !== menuList.length - 1 ? <Seprator /> : null}
          </>
        ))}
      </FloatingButton>
    </ThemeProvider>
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
