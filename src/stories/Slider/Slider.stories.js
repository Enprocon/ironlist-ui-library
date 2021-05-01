import React from 'react';
import styled from 'styled-components';

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

const images = [
  'https://d3g7ucapfhrqqt.cloudfront.net/images/artyom-korshunov.jpg',
  'https://d3g7ucapfhrqqt.cloudfront.net/images/dominik-vanyi.jpg'
];

const Image = styled.div`
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  height: 540px;
`;

const Banner = (args) => (
  <Slider {...args}>
    <div>
      <Image url={images[0]} />
    </div>
    <div>
      <Image url={images[1]} />
    </div>
  </Slider>
);

export const BannerSlider = Banner.bind({});
BannerSlider.args = {
  slidesToPreview: 1,
  hasArrow: false,
  hasDots: false,
  autoScroll: true,
  duration: 3000
};
