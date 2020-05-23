declare module '*.mdx' {
  import { PostMeta } from 'components/Blog/Meta'

  export interface MDXPost extends PostMeta {
    __resourcePath: string
  }

  let MDXComponent: (props: any) => JSX.Element
  export const frontMatter: MDXPost | MDXPost[]
  export default MDXComponent
}
