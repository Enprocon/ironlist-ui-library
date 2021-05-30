import React from 'react';

import HorizontalMachineCard from '../../components/HorizontalMachineCard';

export default {
  title: 'Example/HorizontalMachineCard',
  component: HorizontalMachineCard
};

const Template = (args) => <HorizontalMachineCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tag: {
    label: 'Agriculture',
    backgroundColor: '#397BC9'
  }
};
