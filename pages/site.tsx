import React from 'react'
import { useRouter } from 'next/router'
import { websites } from '../lib/projects'
import NavBar from '../components/Navbar'
import { css } from '@emotion/core'

const SitePage = () => {
  const { query } = useRouter()

  const website = websites.find(site => query.site === site.screenshot)

  return (
    <>
      <NavBar
        items={[
          { text: 'about', href: '#about' },
          { text: 'code', href: '#code' },
          {
            text: 'design',
            href: '#design'
          },
          {
            text: 'contact',
            href: '#contact'
          }
        ]}
      />
      <figure
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 3rem;
        `}
      >
        {' '}
        <picture>
          <source type="image/webp" srcSet={`/projects/${website?.screenshot}.webp`} media="screen" />
          <img src={`/projects/${website?.screenshot}.png`} width="100%" />
        </picture>
        <figcaption>
          <h1>{website?.title}</h1>
          <p>{website?.longDesc ? website?.longDesc : website?.desc}</p>

          {website?.teamProject && (
            <p
              css={{
                width: 'max-content',
                backgroundColor: 'var(--fg)',
                color: 'var(--bg) !important',
                padding: '0.1rem'
              }}
            >
              Team Project
            </p>
          )}
          <strong>Status: {website?.status}</strong>
          <p
            css={{
              fontSize: '0.8rem'
            }}
          >
            Stack: {website?.stack.join(', ')}
          </p>
          <a
            href={website?.link}
            css={css`
              font-weight: bold;
              font-size: 2rem;
              color: var(--fg);
            `}
          >
            Visit
          </a>
        </figcaption>
      </figure>
    </>
  )
}

export default SitePage
