import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './helper';

export const Icons = ({ type, ...rest }) => {
  const Icon = getIcon(type);
  return <Icon {...rest} />;
};

Icons.propTypes = {
  type: PropTypes.string
};

Icons.defaultProps = {
  type: ''
};
