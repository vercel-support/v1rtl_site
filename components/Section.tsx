import React from 'react'
import { CSSObject, css } from '@emotion/core'

const Section = ({
  heading,
  text,
  id,
  styles,
  ...props
}: {
  heading: string
  text: any
  id: string
  styles?: CSSObject
}) => (
  <div
    css={css`
      padding-bottom: 10rem;
      padding-top: 10rem;
      padding-left: 5rem;
      a {
        color: var(--blue);
      }
    `}
  >
    <article
      id={id}
      {...props}
      css={{
        scrollMarginTop: '150px',
        width: '25rem',
        '@media (max-width: 700px)': {
          width: 'unset'
        },
        ...styles
      }}
    >
      <h2>{heading}</h2>
      {text}
    </article>
  </div>
)
export default Section
