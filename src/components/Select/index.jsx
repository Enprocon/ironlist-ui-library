import React, { useState, Children, cloneElement, useRef } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import { ChevronupThick, ChevrondownThick } from '@ironlist/ironlist-icons';
import { useThemeContext } from '../ThemeProvider';
import useOutSideClick from './useOutSideClick';
import { selectContainer, OptionList, OptionContainer, SelectedText } from './style';

const Select = ({
  className,
  defaultValue,
  children,
  onChange,
  isMenuOpen,
  onSelectBoxClick,
  placeholder,
  width,
  prefix
}) => {
  const theme = useThemeContext();
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
  const ArrowType = isOpen ? ChevronupThick : ChevrondownThick;

  return (
    <>
      <div
        ref={selectRef}
        onClick={(e) => onSelectClick(e)}
        className={c(
          selectContainer(theme, selectWidth),
          `${prefix ? `${prefix}select-container` : ''} select-container`,
          className
        )}
        role="presentation"
      >
        {selectedValue ? (
          <SelectedText theme={theme} className={`${prefix ? `${prefix}select-text` : ''} select-text`}>
            {selectedValue.label}
          </SelectedText>
        ) : (
          placeholder
        )}
        <ArrowType
          height={16}
          width={16}
          fill={theme.background.darkGrey1}
          className={`${prefix ? `${prefix}select-icon` : ''} select-icon`}
        />
      </div>
      {isOpen && (
        <OptionList
          theme={theme}
          style={{ width: selectWidth || selectRef.current.offsetWidth }}
          className={`${prefix ? `${prefix}select-option-list` : ''} select-option-list`}
        >
          {Children.map(children, (child, index) =>
            cloneElement(child, {
              onClick: onOptionClick,
              isFirst: index === 0,
              isLast: index === children.length - 1,
              prefix
            })
          )}
        </OptionList>
      )}
    </>
  );
};

const Option = ({ value, children, onClick, isFirst, isLast, prefix }) => {
  const theme = useThemeContext();

  return (
    <OptionContainer
      theme={theme}
      isFirst={isFirst}
      isLast={isLast}
      onClick={() => onClick({ label: children, value })}
      className={`${prefix ? `${prefix}select-option` : ''} select-option`}
    >
      {children}
    </OptionContainer>
  );
};

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
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSelectBoxClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  width: PropTypes.string,
  prefix: PropTypes.string
};

Select.defaultProps = {
  defaultValue: { label: '', value: '' },
  placeholder: 'Select from options...',
  children: [],
  className: '',
  onChange: () => {},
  onSelectBoxClick: () => {},
  isMenuOpen: false,
  width: '',
  prefix: ''
};

Option.propTypes = {
  value: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  prefix: PropTypes.string
};

Option.defaultProps = {
  value: '',
  children: '',
  onClick: () => {},
  isFirst: false,
  isLast: false,
  prefix: ''
};
