import React from 'react'
import { css } from '@emotion/core'
import Meta from 'components/Blog/Meta'
import fonts from 'lib/fonts'

const Layout = (frontMatter) => {
  const BlogPost = ({ children: content }: { children: any }) => (
    <main
      css={css`
        padding: 3rem;
        width: calc(35vw + 15em);
        padding-top: 5.5rem;
        margin: 0 auto;
        @media (max-width: 980px) {
          width: auto;
          margin: 0;
        }
      `}
    >
      <header>
        <Meta
          meta={{
            title: frontMatter.title,
            image: frontMatter.image,
            date: frontMatter.date,
            desc: frontMatter.desc,
            imageLink: frontMatter.imageLink,
          }}
        />
      </header>
      <article
        css={css`
          font-family: ${fonts.text};
          p {
            text-align: justify;
          }
          ul {
            padding-left: 1rem;
          }
          blockquote {
            font-style: italic;
            margin-left: 0;
          }

          .emoji {
            width: 1rem;
            margin: 0;
          }
        `}
      >
        {content}
      </article>
    </main>
  )

  return BlogPost
}

export default Layout
