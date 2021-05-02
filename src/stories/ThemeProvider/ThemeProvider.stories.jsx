import React from 'react';
import { css } from '@emotion/css';
import ThemeProvider, { useThemeContext } from '../../components/ThemeProvider';

const containerStyles = (theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.background.bgGrey2};
`;

const textStyles = (theme) => css`
  color: ${theme.primary};
`;

export default {
  title: 'Example/ThemeProvider'
};

const ThemeProviderExample = () => {
  const theme = useThemeContext();

  return (
    <div className={containerStyles(theme)}>
      <p className={textStyles(theme)}>Theme Provider</p>
    </div>
  );
};

export const Default = () => {
  return (
    <ThemeProvider>
      <ThemeProviderExample />
    </ThemeProvider>
  );
};
