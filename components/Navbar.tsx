import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/core'

const NavBar = ({ items }: { items: { text: string; href: string }[] }) => (
  <nav
    css={{
      position: 'sticky',
      top: 0,
      display: 'flex',
      backgroundColor: 'var(--bg-dark)',
      justifyContent: 'center',
      left: 0,
      height: '4rem',
      alignItems: 'center'
    }}>
    {items.map(({ href, text }) => (
      <Link href={href}>
        <a
          css={{
            fontWeight: 'bold',
            fontSize: '1.6rem',
            marginLeft: '0.5em',
            marginRight: '0.5em'
          }}>
          {text}
        </a>
      </Link>
    ))}
  </nav>
)

export default NavBar
