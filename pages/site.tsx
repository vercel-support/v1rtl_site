import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { websites } from '../lib/projects'
import NavBar from '../components/Navbar'
import { css } from '@emotion/core'
import { NextPage } from 'next'
import { ProjectProps } from '../components/ProjectList'

const SitePage: NextPage<{ site: ProjectProps }> = ({ site }: { site: ProjectProps }) => {
  return (
    <>
      <NavBar
        items={[
          { text: 'about', href: '/#about' },
          { text: 'code', href: '/#code' },
          {
            text: 'design',
            href: '/#design'
          },
          {
            text: 'contact',
            href: '/#contact'
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
          <source type="image/webp" srcSet={`/projects/${site?.screenshot}.webp`} media="screen" />
          <img src={`/projects/${site?.screenshot}.png`} width="100%" />
        </picture>
        <figcaption>
          <h1>{site?.title}</h1>
          <p>{site?.longDesc ? site?.longDesc : site?.desc}</p>

          {site?.teamProject && (
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
          <strong>Status: {site?.status}</strong>
          <p
            css={{
              fontSize: '0.8rem'
            }}
          >
            Stack: {site?.stack.join(', ')}
          </p>
          <a
            href={site?.link}
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

SitePage.getInitialProps = ({ res, query }) => {
  const site = websites.find(site => query.site === site.screenshot)

  if (!site) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end('')
  }

  return {
    site
  }
}

export default SitePage
