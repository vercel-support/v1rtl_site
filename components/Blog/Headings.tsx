import React, { ReactNode } from 'react'

import { css } from '@emotion/core'

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
