import React, { useState, Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import useOutSideClick from './useOutSideClick';
import { theme } from '../theme';
import Icons from '../Icons';
import { SelectContainer, OptionList, OptionContainer, SelectedText } from './style';

const Select = ({ defaultValue, children, onChange, isMenuOpen, onSelectBoxClick, placeholder, width }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const handleClick = (e) => {
    const isIcon = e.target && e.target.className && e.target.className.baseVal;
    if (!selectRef.current.contains(e.target) && !(isIcon && isIcon.includes('select-icon'))) {
      setIsOpen(false);
    }
  };
  useOutSideClick(handleClick);
  const onOptionClick = (option) => {
    onChange(option);
    setSelectedValue(option);
    setIsOpen(false);
  };
  const onSelectClick = (e) => {
    setIsOpen(!isOpen);
    onSelectBoxClick(e);
  };
  const selectWidth = width || selectRef?.current?.offsetWidth;
  const arrowType = isOpen ? 'up' : 'down';
  return (
    <ThemeProvider theme={theme}>
      <SelectContainer ref={selectRef} onClick={(e) => onSelectClick(e)} width={selectWidth}>
        {selectedValue ? <SelectedText>{selectedValue.label}</SelectedText> : placeholder}
        <Icons type={arrowType} height={16} width={16} fill={theme.white} className="select-icon" />
      </SelectContainer>
      {isOpen && (
        <OptionList style={{ width: selectWidth || selectRef.current.offsetWidth }}>
          {Children.map(children, (child, index) =>
            cloneElement(child, {
              onClick: onOptionClick,
              isFirst: index === 0,
              isLast: index === children.length - 1
            })
          )}
        </OptionList>
      )}
    </ThemeProvider>
  );
};

const Option = ({ value, children, onClick, isFirst, isLast }) => (
  <OptionContainer isFirst={isFirst} isLast={isLast} onClick={() => onClick({ label: children, value })}>
    {children}
  </OptionContainer>
);

export { Select, Option };
export default Select;

Select.propTypes = {
  defaultValue: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  }),
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf([PropTypes.node, PropTypes.element])),
    PropTypes.oneOfType([PropTypes.node, PropTypes.element])
  ]),
  onChange: PropTypes.func,
  onSelectBoxClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  width: PropTypes.string
};

Select.defaultProps = {
  defaultValue: { label: '', value: '' },
  placeholder: 'Select from options...',
  children: [],
  onChange: () => {},
  onSelectBoxClick: () => {},
  isMenuOpen: false,
  width: ''
};

Option.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
};

Option.defaultProps = {
  value: '',
  children: '',
  onClick: () => {},
  isFirst: false,
  isLast: false
};
