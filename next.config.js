const withImages = require('next-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX(
  withImages({
    experimental: {
      modern: true,
      polyfillsOptimization: true,
    },
    pageExtensions: ['md', 'mdx', 'tsx'],
    webpack(config) {
      /* GLSL */

      config.module.rules.push({
        // shader import support
        test: /\.glsl$/,
        use: ['webpack-glsl-loader'],
      })

      return config
    },
  })
)
