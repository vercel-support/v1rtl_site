const withImages = require('next-images')

module.exports = withImages({
  webpack(config) {
    // Perform customizations to webpack config
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]'
          }
        },
        'babel-loader',
        'webpack-glsl-loader'
      ]
    })

    return config
  }
})
