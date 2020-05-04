declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const title: string
  export const date: string
  export const image: string
  export const desc: string
  export default MDXComponent
}
