const withImages = require('next-images')

module.exports = withImages({
  webpack(config) {
    // Perform customizations to webpack config
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: ['webpack-glsl-loader']
    })

    return config
  }
})
