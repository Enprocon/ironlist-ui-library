import React from 'react';

import { Tag } from '../../components/Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = ({ children, ...rest }) => <Tag {...rest}>{children}</Tag>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Agriculture',
  backgroundColor: 'red',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <div>Agriculture</div>,
  backgroundColor: 'blue',
};
