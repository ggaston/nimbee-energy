// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/data': '/data',
    'src/partials': '/partials',
    'src/templates': '/templates',
    public: '/',
    'src/assets': '/assets'
  },
  plugins: [
    ['./snowpack-hsb-plugin/index.js', {
      srcPath: './src',
      outputPath: './public'
    }]
  ],
  packageOptions: {
    /* ... */
  },  
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'docs'
  },
};
