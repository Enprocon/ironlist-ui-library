import React from 'react';

import Slider from '../../components/Slider';
import Card from '../../components/Card';

export default {
  title: 'Example/Slider',
  component: Slider
};

const cardProps = {
  text:
    "Choose from 6,789,894+ listing in agriculture. See actionable numbers and feedback built to help you act on today's challenges and tomorrow's opportunities and other things",
  info: {
    name: 'Timothy Rice',
    description: 'New York Times'
  }
};

const Template = (args) => (
  <Slider {...args}>
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
    <Card {...cardProps} />
  </Slider>
);

export const Primary = Template.bind({});
Primary.args = {
  slidesToPreview: 3,
  hasArrow: true,
  hasDots: true,
  autoScroll: false,
  spacing: 64
};

export const WithoutDotsAndArrow = Template.bind({});
WithoutDotsAndArrow.args = {
  slidesToPreview: 1,
  hasArrow: false,
  hasDots: false,
  autoScroll: true,
  duration: 3000
};
