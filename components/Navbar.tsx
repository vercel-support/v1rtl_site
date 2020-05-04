import React from 'react'
import Link from 'next/link'
import Notice from './Notice'

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
          justifyContent: 'space-around',
          width: '70%',
          margin: '0 auto',
          flexWrap: 'wrap',
          height: '4rem',
          alignItems: 'center',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
          },
        }}
      >
        {items.map(({ href, text }, i) => (
          <Link href={href} key={i}>
            <a
              href={href}
              css={{
                textDecoration: 'none',
                fontSize: '0.95rem',

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
      </div>
    </nav>
  )
}
export default NavBar
