import React from 'react'
import Link from 'next/link'
import ThemeSwitch, { Theme } from './ThemeSwitch'

const NavBar = ({
  items,
  handleTheme
}: {
  items: { text: string; href: string }[]
  handleTheme?: (theme: Theme) => void
}) => (
  <nav
    css={{
      display: 'flex',
      backgroundColor: 'var(--bg)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      left: 0,
      height: '4rem',
      alignItems: 'center',
      zIndex: 1000
    }}
  >
    {items.map(({ href, text }, i) => (
      <Link href={href} key={i}>
        <a
          href={href}
          css={{
            color: 'var(--fg)',
            fontWeight: 'bold',
            fontSize: 'calc(0.8rem + 0.8vw)',
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
    <ThemeSwitch handleTheme={handleTheme} />
  </nav>
)

export default NavBar
