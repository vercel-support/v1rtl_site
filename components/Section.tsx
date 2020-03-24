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
    `}
  >
    <article
      id={id}
      {...props}
      css={{
        scrollMarginTop: '150px',
        padding: 'calc(1rem + 2vw)',
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
