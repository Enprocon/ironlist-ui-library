module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react', 'minify'];
  const plugins = ['macros', 'babel-plugin-styled-components'];

  return {
    presets,
    plugins
  };
};
