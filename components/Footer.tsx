import React from 'react'

const Footer = () => (
  <footer
    css={{
      padding: '3rem',
      span: {
        marginRight: '1rem',
      },
    }}
  >
    <span>© v1rtl {new Date().getFullYear()}</span>
    <a href="https://github.com/talentlessguy/v1rtl.site/blob/master/LICENSE">MIT License</a>
  </footer>
)

export default Footer
