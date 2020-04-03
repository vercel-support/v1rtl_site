import React from 'react'
import Link from 'next/link'

const NavBar = ({
  items = [
    { text: 'about', href: '/#about' },
    { text: 'tech skills', href: '/#tech_skills' },
    { text: 'code', href: '/#code' },
    {
      text: 'design',
      href: '/#design'
    },
    {
      text: 'contact',
      href: '/#contact'
    }
  ]
}: {
  items?: { text: string; href: string }[]
}) => (
  <nav
    css={{
      display: 'flex',
      backgroundColor: 'black',
      justifyContent: 'center',
      flexWrap: 'wrap',
      left: 0,
      height: '4rem',
      position: 'sticky',
      top: 0,
      alignItems: 'center',
      zIndex: 1000
    }}
  >
    {items.map(({ href, text }, i) => (
      <Link href={href} key={i}>
        <a
          href={href}
          css={{
            fontWeight: 'bold',
            marginLeft: '0.5em',
            textDecoration: 'none',
            marginRight: '0.5em',
            '&:hover': {
              cursor: 'pointer',
              textDecoration: 'line-through'
            }
          }}
        >
          {text}
        </a>
      </Link>
    ))}
  </nav>
)

export default NavBar
