const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [path.resolve(__dirname, '../public')],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['next/image'] = require.resolve('./NextImage.js')

    return config
  },

  docs: {
    autodocs: true
  }
}
