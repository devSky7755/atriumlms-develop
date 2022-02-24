const plugins = {
  'postcss-import': {},
  'tailwindcss/nesting': {},
  tailwindcss: {},
  'postcss-100vh-fix': {},
  autoprefixer: {},
  'postcss-preset-env': {
    features: { 'nesting-rules': false },
  },
};

if (process.env.NODE_ENV === 'production') {
  plugins.cssnano = {
    preset: 'default',
  };
}

module.exports = {
  plugins,
};
