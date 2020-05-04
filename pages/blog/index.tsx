import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import 'isomorphic-unfetch'
import posts from '../../lib/posts'

const PageList: NextPage = () => {
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

export default PageList
