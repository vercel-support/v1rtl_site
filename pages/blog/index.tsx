import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import 'isomorphic-unfetch'
// import { frontMatter, MDXPost } from './*.mdx'

const formatPath = (p: string) => p.replace(/\.mdx$/, '')

const PageList: NextPage = () => {
  const posts = /* frontMatter as MDXPost[] || */ []

  return (
    <section
      css={{
        padding: '4.5rem',
        div: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem'
        },
        h1: {
          fontSize: 'calc(2rem + 2vw)',

          marginTop: 0
        },
        figure: {
          margin: 0,
          img: {
            width: '100%',
            objectFit: 'cover',
            height: '400px'
          }
        }
      }}
    >
      <h1>My Blog</h1>
      <div>
        {posts?.map((post) => (
          <Link key={post.title} href={formatPath(post.__resourcePath)}>
            <a
              href={formatPath(post.__resourcePath)}
              css={{
                textDecoration: 'none'
              }}
            >
              <figure key={post.title}>
                <img src={post.image} alt="" />
                <figcaption>
                  <h2>{post.title}</h2>
                  <span>{post.date}</span>
                </figcaption>
              </figure>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PageList
