import React, { useState } from 'react';

import { Tabs, Tab } from '../../components/Tabs';
import Typography from '../../components/Typography';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = ({ ...rest }) => {
  const [activeValue, setActiveValue] = useState('one');
  const onTabChange = (value) => {
    setActiveValue(value);
  };
  return (
    <Tabs {...rest} onChange={onTabChange} activeValue={activeValue}>
      <Tab value="one" className="tab">
        <Typography variant="h7">Auction</Typography>
      </Tab>
      <Tab value="two">
        <Typography variant="h7">Rent</Typography>
      </Tab>
      <Tab value="three">
        <Typography variant="h7">Sell</Typography>
      </Tab>
    </Tabs>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  className: 'test'
};
