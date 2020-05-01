const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withOptimizedImages(
  withMDX(
    withImages({
      handleImages: ['jpeg', 'svg', 'webp', 'gif'],
      mozjpeg: {
        quality: 60,
      },
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      webp: {
        preset: 'default',
        quality: 60,
      },
      pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
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
)
