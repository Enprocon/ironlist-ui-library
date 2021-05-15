import React, { useState } from 'react';

import Input from '../../components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: { options: ['medium', 'large', 'small'] }
  }
};

const Template = (args) => <Input {...args} />;

export const Primary = (...args) => {
  const [val, setVal] = useState();
  const onChange = (value) => {
    setVal(value);
  };

  return <Input {...args} value={val} onChange={onChange} />;
};

Primary.args = {
  type: 'text',
  size: 'medium'
};

export const Multiline = Template.bind({});

Multiline.args = {
  value:
    'This is the sample big text so that we can test the multiline and I just want to check if it is going out or not',
  type: 'text',
  size: 'medium',
  multiline: true
};
