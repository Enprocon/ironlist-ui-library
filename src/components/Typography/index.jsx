import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import { useThemeContext } from '../ThemeProvider';
import { getDefaultComponent } from './utils';
import {
  textAlignStyles,
  textColorStyles,
  textTransformStyles,
  variantStyles,
  opacityStyles,
  weightStyles
} from './styles';

function Typography(props) {
  const { children, variant, className, opacity, transform, align, color, weight, device, ...rest } = props;
  const As = getDefaultComponent(variant);
  const theme = useThemeContext();

  return (
    <As
      className={c(
        className,
        textColorStyles(color || theme.background.darkGrey1),
        variant,
        variantStyles(device),
        `align-${align}`,
        textAlignStyles,
        `transform-${transform}`,
        textTransformStyles,
        `opacity-${opacity}`,
        opacityStyles,
        {
          [`weight-${weight}`]: weight !== ''
        },
        weightStyles
      )}
      {...rest}
    >
      {children}
    </As>
  );
}

Typography.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  device: PropTypes.string,
  opacity: PropTypes.oneOf([100, 70, 60, 50, 30]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  transform: PropTypes.oneOf(['capitalize', 'uppercase', 'initial']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'h7',
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
    'p6',
    'p7',
    'p8',
    'p9',
    'l1',
    'l2',
    'l3',
    'l4'
  ]),
  weight: PropTypes.oneOf(['medium', 'regular', ''])
};

Typography.defaultProps = {
  opacity: 100,
  className: '',
  device: '',
  color: '',
  align: 'left',
  transform: 'initial',
  variant: 'p1',
  weight: ''
};

export default Typography;
