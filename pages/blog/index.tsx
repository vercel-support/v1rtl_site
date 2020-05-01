import React, { useEffect, useState } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import 'isomorphic-unfetch'

type Post = {
  date: string
  title: string
  link: string
}

type PageListProps = {
  posts: Post[]
}

const PageList: NextPage<PageListProps> = ({ posts }: PageListProps) => {
  return (
    <>
      <h1>My blog</h1>
      {posts.map((post) => (
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

PageList.getInitialProps = async ({ req }) => {
  const host = `http://${req ? req.headers.host : ''}`

  const res = await fetch(`${host}/api/posts`)

  const json = await res.json()

  return {
    posts: json,
  }
}

export default PageList
