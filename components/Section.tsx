import React from 'react'
import { CSSObject, css } from '@emotion/core'

const Section = ({
  heading,
  text,
  id,
  styles,
  subheading,
  ...props
}: {
  heading?: string
  subheading?: string
  text: any
  id?: string
  styles?: CSSObject
}) => (
  <div
    css={css`
      a {
        color: var(--blue);
      }
      h2 {
        font-size: calc(2rem + 2vw);
      }
    `}
  >
    <article
      id={id}
      {...props}
      css={{
        scrollMarginTop: '150px',
        padding: 'calc(1rem + 1vw)',
        ...styles
      }}
    >
      {heading && <h2>{heading}</h2>}
      {subheading && <h3>{subheading}</h3>}
      <div>{text}</div>
    </article>
  </div>
)
export default Section
