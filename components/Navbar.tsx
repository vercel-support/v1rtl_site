import React /* , { useContext }  */ from 'react'
import Link from 'next/link'
import Notice from './Notice'
// import { ThemeContext } from '../lib/theme'

const NavBar = ({
  items = [
    { text: 'home', href: '/#' },
    { text: 'posts', href: '/blog' },
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
        backgroundColor: 'var(--bg)',
        position: 'sticky',
        left: 0,
        top: 0,
        zIndex: 999,
      }}
    >
      <Notice>
        I am available for part-time webdev job! You can message me{' '}
        <Link href="/#contact">
          <a href="/#contact">here</a>
        </Link>
      </Notice>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          height: '4rem',
          alignItems: 'center',
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
      </div>
    </nav>
  )
}
export default NavBar
