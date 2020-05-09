import React from 'react'
import { css } from '@emotion/core'

const Body = ({ children }: { children: any }) => (
  <>
    <article
      css={css`
        padding: 3rem;
        width: calc(35vw + 15em);
        padding-top: 5rem;
        margin: 0 auto;
        @media (max-width: 980px) {
          width: auto;
          margin: 0;
        }
        p {
          text-align: justify;
        }
        h1 {
          text-align: center;
        }
        h3 {
          font-size: x-large;
        }
        ul {
          padding-left: 1rem;
        }
        blockquote {
          font-style: italic;
          margin-left: 0;
        }
        p > img {
          width: 100%;
          margin: 3rem 0;
        }
      `}
    >
      {children}
    </article>
  </>
)

export default Body
