import React from 'react';

import FloatingMenu from '../../components/FloatingMenu';

export default {
  title: 'Example/FloatingMenu',
  component: FloatingMenu
};

const Template = (args) => <FloatingMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuList: [
    {
      icon: 'navigation',
      isActive: false
    },
    {
      icon: 'filter',
      isActive: true
    }
  ]
};
