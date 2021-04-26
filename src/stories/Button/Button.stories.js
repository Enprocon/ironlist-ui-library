import React from 'react';

import Button from '../../components/Button';

export default {
  title: 'Example/Button',
  component: Button
};

const Template = (args) => <Button {...args}>Submit</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: false
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: 'primary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: false
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: 'secondary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: false
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  type: 'tertiary',
  children: 'Submit',
  onClick: () => {},
  className: '',
  size: 'large',
  disabled: true
};
