import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from '@emotion/css';
import ThemeProviderContext, { useThemeContext } from './context';
import { getGlobalCSS, getContextValue } from './utils';
import { useLayoutEffect } from '../useLayoutEffect';
import { theme } from '../theme';

function ThemeProvider(props) {
  const { children } = props;

  useLayoutEffect(() => {
    injectGlobal(getGlobalCSS(theme));
  });

  return <ThemeProviderContext.Provider value={getContextValue(theme)}>{children}</ThemeProviderContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]).isRequired
};

export { useThemeContext };
export default ThemeProvider;
