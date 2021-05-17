import React from 'react';

import Link from '../../components/Link';

export default {
  title: 'Example/Link',
  component: Link
};

const Template = (args) => <Link {...args}>One</Link>;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryWithProps = Template.bind({});
PrimaryWithProps.args = {
  href: '/test',
  isActive: true,
  onClick: (event) => {
    event.preventDefault();
    alert('Link is stopped, onClick working...');
  },
  className: ''
};
