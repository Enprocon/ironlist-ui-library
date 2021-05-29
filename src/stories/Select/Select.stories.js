import React from 'react';
import { css } from '@emotion/css';

import { Select, Option } from '../../components/index';

export default {
  title: 'Example/Select',
  component: Select
};

const selectContainer = css`
  border: 2px solid red;
  .test__select-text {
    color: white;
  }
  .test__select-container {
    border: 2px solid blue;
  }
  .test__select-icon {
    fill: white;
    opacity: 1;
  }
`;

const Template = (args) => (
  <div
    className={css`
      padding: 20px 40px;
      width: fit-content;
      min-height: 200px;
      background: #6a7562;
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
};

export const PrimaryWhite = Template.bind({});
PrimaryWhite.args = {
  defaultValue: { label: 'First', value: 'first' },
  onChange: () => {},
  onSelectBoxClick: () => {},
  className: selectContainer,
  prefix: 'test__'
};
