import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './helper';

const Icons = ({ type, ...rest }) => {
  const Icon = getIcon(type);
  return <Icon {...rest} />;
};

export default Icons;

Icons.propTypes = {
  type: PropTypes.string
};

Icons.defaultProps = {
  type: ''
};
