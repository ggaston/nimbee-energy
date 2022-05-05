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
      // data: {
      //     'posts': './data/posts.csv',
      //     'posts_enriched': {
      //         source: ['posts'],
      //         script: './data/scripts/enrich_posts.js'
      //     },
      //     'posts_at': {
      //         script: './data/scripts/at-posts.js'
      //     }
      // },
      // dataTransforms: './data/transforms'
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
