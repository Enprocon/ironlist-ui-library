import React from 'react';

import { Input } from '../../components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: { options: ['medium', 'large', 'small'] }
  }
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  size: 'medium'
};
