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
    }}
  >
    <div>
      <span>© v1rtl {new Date().getFullYear()}</span>
      <a href="https://github.com/talentlessguy/v1rtl.site/blob/master/LICENSE">MIT License</a>
    </div>
    <div>
      Built with{' '}
      <span role="img" aria-label="tears">
        😭
      </span>{' '}
      and hosted on GitHub
    </div>
  </footer>
)

export default Footer
