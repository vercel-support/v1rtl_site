import React from 'react'

import dynamic from 'next/dynamic'
import Bio from '../components/Bio'
import ProjectSearch from '../components/ProjectSearch'

const Title = dynamic(() => import('../components/Title'))

const Index = () => {
  return (
    <>
      <main>
        <Title />

        <div
          id="about"
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            padding: '3rem',
            scrollMarginTop: '30vh',
            gap: '3rem'
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
              justifyContent: 'center'
            }}
          >
            <source srcSet="/me.webp" type="image/webp" media="screen" />
            <img src="/me.png" alt="me" />
          </picture>
          <Bio />
        </div>
        <ProjectSearch />
      </main>
    </>
  )
}

export default Index
