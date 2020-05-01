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
    <section
      css={{
        padding: '3rem',
        h1: {
          fontSize: 'calc(2rem + 2vw)',
          marginBottom: 0,
        },
      }}
    >
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
    </section>
  )
}

PageList.getInitialProps = async ({ req }) => {
  const host = req ? `http://${req.headers.host}` : ''

  const res = await fetch(`${host}/api/posts`)

  const json = await res.json()

  return {
    posts: json,
  }
}

export default PageList
