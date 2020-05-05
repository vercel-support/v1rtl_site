import React from 'react'

const Body = ({ children }: { children: any }) => (
  <>
    <article
      css={{
        padding: '3rem',
        paddingTop: '5rem',
        width: 'calc(40vw + 10em)',
        margin: '0 auto',
        p: {
          textAlign: 'justify',
        },
        img: {
          height: '350px',
          width: '100%',
          margin: '1em 0',
          objectFit: 'cover',
        },
        h1: {
          textAlign: 'center',
        },
        ul: {
          paddingLeft: '1rem',
        },
        blockquote: {
          fontStyle: 'italic',
          marginLeft: 0,
        },
      }}
    >
      {children}
    </article>
  </>
)

export default Body
