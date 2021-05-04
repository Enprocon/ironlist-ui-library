import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../src/components/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

addDecorator(ThemeDecorator);
