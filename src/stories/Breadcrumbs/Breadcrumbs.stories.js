import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';

export default {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs
};

const Template = (args) => (
  <Breadcrumbs {...args}>
    <Link id="one">One</Link>
    <Link id="two">Two</Link>
  </Breadcrumbs>
);

export const Primary = Template.bind({});
Primary.args = {};
