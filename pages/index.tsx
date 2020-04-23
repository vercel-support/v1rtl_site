import React, { useState, Suspense } from 'react'
import { websites } from '../lib/projects'
import Bio from '../components/Bio'
import ProjectSearch from '../components/ProjectSearch'
import Sites from '../components/Sites'
import Artwork from '../components/Artwork'
import Repos, { Repo } from '../components/Repos'
import { NextPage } from 'next'
import 'isomorphic-unfetch'
import githubRepos from '../lib/github/repos.json'

const Index: NextPage = () => {
  const repos: Repo[] = githubRepos.map((item) => {
    const stars = item.stargazers.totalCount
    const desc = item.description
    const lang = item.primaryLanguage.name

    const color = item.primaryLanguage.color

    return {
      name: item.name,
      stars,
      color,
      desc,
      lang,
    }
  })

  return (
    <main>
      <header
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: 'calc(100vh - 64px)',
          span: {
            zIndex: 1,
            textAlign: 'center',
            width: '20rem',
            fontSize: 'calc(1rem + 1vw)',
          },
        }}
      >
        <video src="/v1rtl.mp4" width="50%" autoPlay loop />
        <span>webdev / designer</span>
      </header>

      <div
        id="about"
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          padding: '3rem',
          scrollMarginTop: '35vh',
          gap: '3rem',
        }}
      >
        <section>
          <h3 css={{ marginTop: 0 }}>Howdy, I&apos;m Paul</h3>
          <p>
            I&apos;m a self-taught fullstack web developer who tries to combine technology and art. I like web
            development, OSS, design and drawing. I&apos;m the lead developer at{' '}
            <a href="https://komfy.now.sh">Komfy</a> and author of <a href="https://t.me/we_use_js">@we_use_js</a>{' '}
            Telegram channel.
          </p>
        </section>
        <picture
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <source srcSet="/me.webp" type="image/webp" media="screen" />
          <img src="/me.gif" alt="me" width="100%" />
        </picture>
        <Bio />
      </div>
      <ProjectSearch />
      <Sites projects={websites} />
      <Artwork />
      <Repos repos={repos} />
    </main>
  )
}

export default Index
