import React, { ReactNode } from 'react'
import { css } from '@emotion/core'
import Link from 'next/link'

const Body = ({ children }: { children: any }) => (
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
      .emoji {
        width: 1rem;
        margin: 0;
      }
    `}
  >
    {children}
  </article>
)

export const Subheading = ({ children, id, ...props }: { children: ReactNode; id: string }) => (
  <h2
    {...props}
    id={id}
    css={css`
      position: relative;
      /* margins, height and extra space */
      scroll-margin-top: calc(4rem + 1vw + 8px);
      font-size: calc(1.25rem + 1vw);
      margin-bottom: 0.5rem;
    `}
  >
    <a
      aria-hidden
      href={`#${id}`}
      css={css`
        position: absolute;
        left: -2rem;
        text-decoration: none;
        color: #282525;
        :hover {
          color: var(--fg-dark);
        }
      `}
    >
      #
    </a>
    {children}
  </h2>
)

export const SubSubHeading = ({ children, id, ...props }: { children: ReactNode; id: string }) => (
  <h3
    {...props}
    id={id}
    css={css`
      position: relative;
      /* margins, height and extra space */
      scroll-margin-top: calc(48px + 1rem);
      font-size: calc(0.8rem + 0.8vw);
    `}
  >
    <a
      aria-hidden
      href={`#${id}`}
      css={css`
        position: absolute;
        left: -1.8rem;
        text-decoration: none;
        color: #282525;

        :hover {
          color: var(--fg-dark);
        }
      `}
    >
      #
    </a>
    {children}
  </h3>
)

export default Body
