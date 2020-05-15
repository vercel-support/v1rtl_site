import { meta as post2 } from 'pages/blog/2020-bundlers-review.mdx'
import { meta as post4 } from 'pages/blog/my-new-website.mdx'
import { meta as post1 } from 'pages/blog/lets-write-frontend-in-go.mdx'
import { meta as post3 } from 'pages/blog/being-a-teen-developer.mdx'
import { meta as post5 } from 'pages/blog/tsc-cjs-esm.mdx'
import { meta as post6 } from 'pages/blog/basis-universal-setup.mdx'

export default [
  {
    ...post1,
    link: 'lets-write-frontend-in-go',
  },
  {
    ...post2,
    link: '2020-bundlers-review',
  },
  {
    ...post3,
    link: 'being-a-teen-developer',
  },
  {
    ...post5,
    link: 'tsc-cjs-esm',
  },
  {
    ...post6,
    link: 'basis-universal-setup',
  },
  {
    ...post4,
    link: 'my-new-website',
  },
].reverse()
