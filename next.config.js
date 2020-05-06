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
      webp: {
        preset: 'default',
        quality: 60,
      },
      pageExtensions: ['md', 'mdx', 'tsx', 'ts'],

      webpack(config) {
        // const originalEntry = config.entry

        // config.entry = async () => {
        //   const entries = await originalEntry()

        //   if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        //     entries['main.js'].unshift('./client/polyfills.js')
        //   }

        //   return entries
        // }

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
