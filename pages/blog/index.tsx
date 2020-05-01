import React, { useEffect, useState } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

type Post = {
  date: string
  title: string
  link: string
}

type PageListProps = {
  posts: Post[]
}

const PageList: NextPage<PageListProps> = ({ posts }: PageListProps) => {
  const [blogPosts, setBlogPosts] = useState<Post[]>(posts)

  console.log(posts)

  useEffect(() => {
    if (posts.length !== 0) {
      localStorage.setItem('posts', JSON.stringify(posts))
    } else {
      setBlogPosts(JSON.parse(localStorage.getItem('posts')))
    }
  }, [])

  return (
    <>
      <h1>My blog</h1>
      {blogPosts.map((post) => (
        <Link key={post.title} href={`/blog/${post.link}`}>
          <a
            href={`/blog/${post.link}`}
            css={{
              textDecoration: 'none',
            }}
          >
            <div key={post.title}>
              <h2>{post.title}</h2>
              <span>{post.date}</span>
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}

export default PageList

export const getServerSideProps: GetServerSideProps<PageListProps> = async () => {
  const { readdir } = require('fs').promises

  const postFiles = await readdir(process.cwd() + '/pages/blog')

  const postNames: string[] = postFiles.filter((page: string) => page !== 'index.tsx')

  const posts = []

  for (const post of postNames) {
    import(`./${post}`).then((m) => posts.push({ ...m, link: post.slice(0, post.indexOf('.')) }))
  }

  return {
    props: {
      posts,
    },
  }
}
