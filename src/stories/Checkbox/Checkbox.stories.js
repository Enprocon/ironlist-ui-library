import React, { useState } from 'react';

import Checkbox from '../../components/Checkbox';
import Typography from '../../components/Typography';

export default {
  title: 'Example/Checkbox',
  component: Checkbox
};

const Template = (args) => {
  const [selected, setSelected] = useState('v1');
  const [selectedG2, setSelectedG2] = useState('v11');
  const onChange = (value) => {
    setSelected(value);
  };
  const onV2change = (value) => {
    setSelectedG2(value);
  };
  return (
    <div>
      <div>
        <Checkbox {...args} onChange={onChange} isActive={selected === 'v1'} name="g1">
          <Typography variant="p7">One</Typography>
        </Checkbox>
        <Checkbox {...args} value="v2" onChange={onChange} isActive={selected === 'v2'} name="g1">
          <Typography variant="p7">Two</Typography>
        </Checkbox>
        <Checkbox {...args} value="v3" onChange={onChange} isActive={selected === 'v3'} name="g1">
          <Typography variant="p7">Three</Typography>
        </Checkbox>
      </div>
      <div>
        <Checkbox {...args} value="v11" onChange={onV2change} isActive={selectedG2 === 'v11'} name="g2">
          <Typography variant="p7">One</Typography>
        </Checkbox>
        <Checkbox {...args} value="v12" onChange={onV2change} isActive={selectedG2 === 'v12'} name="g2">
          <Typography variant="p7">Two</Typography>
        </Checkbox>
        <Checkbox {...args} value="v13" onChange={onV2change} isActive={selectedG2 === 'v13'} name="g2">
          <Typography variant="p7">Three</Typography>
        </Checkbox>
      </div>
    </div>
  );
};

export const PrimaryChecked = Template.bind({});
PrimaryChecked.args = {
  isActive: false,
  children: '',
  className: '',
  onChange: () => {},
  value: 'v1',
  name: 'group'
};
