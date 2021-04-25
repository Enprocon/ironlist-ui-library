import React from 'react';

import { Select, Option } from '../../components/Select';

export default {
  title: 'Example/Select',
  component: Select
};

const Template = (args) => (
  <Select {...args}>
    <Option value="first">First</Option>
    <Option value="second">Second</Option>
  </Select>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: { label: 'First', value: 'first' },
  onChange: () => {},
  onSelectBoxClick: () => {},
  isMenuOpen: false
};
