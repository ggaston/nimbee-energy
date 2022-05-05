// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: '/'
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
    /* ... */
  },
};
