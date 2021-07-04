import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../../components/Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = ({ children, ...rest }) => <Tag {...rest}>{children}</Tag>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Agriculture',
  backgroundColor: 'red'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Agriculture',
  backgroundColor: 'blue',
  hasRoundBorder: true
};

export const OnCard = Template.bind({});
OnCard.args = {
  children: 'Agriculture',
  backgroundColor: 'green',
  hasRoundBorder: true,
  isOnCard: true
};

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Template.defaultProps = {
  children: ''
};
