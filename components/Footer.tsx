import React from 'react'

const Footer = () => (
  <footer
    css={{
      padding: '3rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      'div:first-of-type': {
        span: {
          marginRight: '1rem',
        },
      },
      img: {
        margin: '0 2px',
      },
    }}
  >
    <div>
      <span>© v1rtl {new Date().getFullYear()}</span>
      <a href="https://github.com/talentlessguy/v1rtl.site/blob/master/LICENSE">MIT License</a>
    </div>
    <div>
      Uploaded on{' '}
      <a href="https://github.com/talentlessguy/v1rtl_site">
        <img src="/icons/github.svg" alt="GitHub" height="16px" />
      </a>{' '}
      and hosted on{' '}
      <a href="https://now.sh">
        <img src="/icons/zeit.svg" alt="Vercel" height="16px" />
      </a>
    </div>
  </footer>
)

export default Footer
