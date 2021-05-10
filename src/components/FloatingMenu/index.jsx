import React from 'react';
import PropTypes from 'prop-types';
import { SortByThick, FilterThick } from '@ironlist/ironlist-icons';
import { useThemeContext } from '../ThemeProvider';
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
              {index === 0 ? (
                <SortByThick height={16} width={16} fill="#62656E" />
              ) : (
                <FilterThick height={16} width={16} fill="#62656E" />
              )}
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
      isActive: false
    },
    {
      isActive: true
    }
  ],
  onMenuClick: () => {}
};

export default FloatingMenu;
