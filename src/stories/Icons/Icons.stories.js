import React from 'react';

import { iconList } from '../../components/Icons/helper';
import Icons from '../../components/Icons';

export default {
  title: 'Example/Icons',
  component: Icons
};

const Template = () =>
  Object.entries(iconList).map(([key, Value], index) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderLeft: '1px',
        borderRight: '1px',
        borderBottom: '1px',
        borderColor: '#333',
        borderStyle: 'solid',
        boxSizing: 'border-box',
        justifyContent: 'space-around',
        borderTop: index === 0 ? '1px solid #333' : 0,
        width: '200px'
      }}
    >
      <div style={{ minWidth: '100px', paddingLeft: '10px', paddingTop: '4px' }}>{key}: </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Value />
      </div>
    </div>
  ));

export const AllIcons = Template.bind({});
