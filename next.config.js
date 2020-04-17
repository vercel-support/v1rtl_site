const dotenv = require('dotenv')
const withImages = require('next-images')
const path = require('path')
const Dotenv = require('dotenv-webpack')

dotenv.config()

module.exports = withImages({
  webpack(config) {
    // Perform customizations to webpack config
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: ['webpack-glsl-loader'],
    })

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
})
