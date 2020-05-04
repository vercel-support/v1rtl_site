import { meta as post2 } from '../pages/blog/2020-bundlers-review.mdx'
import { meta as post4 } from '../pages/blog/my-new-website.mdx'
import { meta as post1 } from '../pages/blog/lets-write-frontend-in-go.mdx'
import { meta as post3 } from '../pages/blog/being-a-teen-developer.mdx'

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
    ...post4,
    link: 'my-new-website',
  },
].reverse()
