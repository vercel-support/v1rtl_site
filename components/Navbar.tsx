import React /* , { useContext }  */ from 'react'
import Link from 'next/link'
// import { ThemeContext } from '../lib/theme'

const NavBar = ({
  items = [
    { text: 'about', href: '/#about' },
    { text: 'tech skills', href: '/#tech_skills' },
    { text: 'sites', href: '/#sites' },
    {
      text: 'artwork',
      href: '/#artwork',
    },
    { text: 'repos', href: '/#repos' },
    {
      text: 'contact',
      href: '/#contact',
    },
  ],
}: {
  items?: { text: string; href: string }[]
}) => {
  // const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav
      css={{
        display: 'flex',
        backgroundColor: 'var(--bg)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        left: 0,
        height: '4rem',
        position: 'sticky',
        top: 0,
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      {items.map(({ href, text }, i) => (
        <Link href={href} key={i}>
          <a
            href={href}
            css={{
              marginLeft: '0.5em',
              textDecoration: 'none',
              fontSize: '0.95rem',
              marginRight: '0.5em',
              color: 'var(--fg)',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'line-through',
              },
            }}
          >
            {text}
          </a>
        </Link>
      ))}

      {/* <button
        onClick={() => toggleTheme()}
        css={{
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          width: '12em',
          filter: 'invert(1)'
        }}
      >
        Theme: {theme === 'light' ? 'Palenlight' : 'Black'}
        <img src="/contrast.svg" />
      </button> */}
    </nav>
  )
}
export default NavBar
