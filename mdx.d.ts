declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const meta: {
    title: string
    date: string
    image: string
    desc: string
  }
  export default MDXComponent
}
