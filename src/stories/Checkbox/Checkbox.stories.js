import React from 'react';

import Checkbox from '../../components/Checkbox';
import Typography from '../../components/Typography';

export default {
  title: 'Example/Checkbox',
  component: Checkbox
};

const Template = (args) => (
  <>
    <Checkbox {...args} isActive>
      <Typography variant="p7">One</Typography>
    </Checkbox>
    <Checkbox {...args}>
      <Typography variant="p7">Two</Typography>
    </Checkbox>
    <Checkbox {...args}>
      <Typography variant="p7">Three</Typography>
    </Checkbox>
  </>
);

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
  isActive: false,
  children: '',
  className: '',
  onChange: () => {},
  value: 'test'
};
