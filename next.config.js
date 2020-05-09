const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images')

const emoji = require('remark-emoji')
const emojiToImage = require('remark-twemoji')

const images = require('remark-images')

const autoLink = require('rehype-autolink-headings')
const slug = require('rehype-slug')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [emoji, emojiToImage, images],
    rehypePlugins: [slug, autoLink],
  },
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
        const originalEntry = config.entry

        /**Polyfill */

        config.entry = async () => {
          const entries = await originalEntry()

          if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
            entries['main.js'].unshift('./client/polyfills.js')
          }

          return entries
        }

        /* Importing txt */

        config.module.rules.push({
          use: 'raw-loader',
          test: /\.txt/,
        })

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
