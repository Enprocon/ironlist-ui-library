import React from 'react';
import { css } from '@emotion/css';

import { Select, Option } from '../../components/index';

export default {
  title: 'Example/Select',
  component: Select
};

const Template = (args) => (
  <div
    className={css`
      background: #daa3a3;
      padding: 20px 40px;
      width: fit-content;
      min-height: 200px;
    `}
  >
    <Select {...args}>
      <Option value="first">First</Option>
      <Option value="second">Second</Option>
    </Select>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: { label: 'First', value: 'first' },
  onChange: () => {},
  onSelectBoxClick: () => {}
  // isMenuOpen: true
  // width: '150px'
};
