import React from 'react';

import MachineCard from '../../components/MachineCard';

export default {
  title: 'Example/MachineCard',
  component: MachineCard
};

const Template = (args) => <MachineCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tag: {
    label: 'Agriculture',
    backgroundColor: '#397BC9'
  }
};
