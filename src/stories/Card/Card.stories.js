import React from 'react';

import Card from '../../components/Card';

export default {
  title: 'Example/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    "Choose from 6,789,894+ listing in agriculture. See actionable numbers and feedback built to help you act on today's challenges and tomorrow's opportunities and other things",
  info: {
    name: 'Timothy Rice',
    description: 'New York Times',
    image: 'https://i.pravatar.cc/54'
  }
};
