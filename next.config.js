/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images')

const path = require('path')
const emoji = require('remark-emoji')
const emojiToImage = require('remark-twemoji')

const images = require('remark-images')

const autoLink = require('rehype-autolink-headings')
const slug = require('rehype-slug')

const withMDX = require('next-mdx-enhanced')({
  remarkPlugins: [emoji, emojiToImage, images],
  rehypePlugins: [slug, autoLink],
  defaultLayout: 'index.tsx',
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

        /* Polyfill */

        config.entry = async () => {
          const entries = await originalEntry()

          if (entries['main.js'] && !entries['main.js'].includes('./external/polyfills.js')) {
            entries['main.js'].unshift('./external/polyfills.js')
          }

          return entries
        }

        /* GLSL */

        config.module.rules.push({
          // shader import support
          test: /\.glsl$/,
          use: ['webpack-glsl-loader'],
        })

        /* Importing txt */

        config.module.rules.push({
          use: 'raw-loader',
          test: /\.txt/,
        })

        /* strip unused stuff from three.js */
        config.resolve.alias['three$'] = path.resolve('./external/three.js')

        return config
      },
    })
  )
)
