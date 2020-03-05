import React from 'react'
import { CSSObject } from '@emotion/core'

const Section = ({ heading, text, id, css, ...props }: { heading: string; text: any; id: string; css?: CSSObject }) => (
  <div
    css={{
      height: '100vh',
      a: {
        color: 'var(--blue)'
      }
    }}
  >
    <article
      id={id}
      {...props}
      css={{
        marginTop: '5rem',
        marginLeft: '10em',

        width: '25rem',
        '@media (max-width: 700px)': {
          width: 'unset'
        },
        ...css
      }}
    >
      <h2>{heading}</h2>
      <p>{text}</p>
    </article>
  </div>
)
export default Section
