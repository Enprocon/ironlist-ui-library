import set from 'lodash.set';

const processTheme = ({ theme, prefix }) => (key) => {
  const nextThemeValue = theme[key];
  const nextPrefix = prefix ? `${prefix}-${key}` : key;

  if (typeof nextThemeValue === 'object') {
    return Object.keys(nextThemeValue)
      .map(processTheme({ theme: nextThemeValue, prefix: nextPrefix }))
      .join('');
  }

  return `--${nextPrefix}:${nextThemeValue};`;
};

export const getGlobalCSS = (theme) => `
  :root {
    ${Object.keys(theme).map(processTheme({ theme })).join('')}
  }
`;

const setContextValue = ({ theme, prefix }) => (contextValue, key) => {
  const nextThemeValue = theme[key];
  const nextPrefix = prefix ? `${prefix}-${key}` : key;

  if (typeof nextThemeValue === 'object') {
    Object.keys(nextThemeValue).reduce(setContextValue({ theme: nextThemeValue, prefix: nextPrefix }), contextValue);
  } else {
    const contextValuePath = prefix ? `${prefix}.${key}` : key;
    set(contextValue, contextValuePath, `var(--${nextPrefix})`);
  }

  return contextValue;
};

export const getContextValue = (theme) => Object.keys(theme).reduce(setContextValue({ theme }), {});
