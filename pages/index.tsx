import React from 'react'
import { websites } from '../lib/projects'
import Bio from '../components/Bio'
import ProjectSearch from '../components/ProjectSearch'
import Sites from '../components/Sites'
import Artwork from '../components/Artwork'
import Repos from '../components/Repos'
import { NextPage } from 'next'
import 'isomorphic-unfetch'

import Contact from '../components/Contact'

import dynamic from 'next/dynamic'
import Alert from 'components/Alert'

const Title = dynamic(() => import('../components/WebGL/Title'), {
  ssr: false,
})

const Index: NextPage = () => {
  return (
    <main>
      <Alert>
        Site is in progress. The version you are watching is either broken or laggy as hell. Come back later when I
        finish it.
      </Alert>
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
            fontSize: 'calc(0.8rem + 0.8vw)',
          },
        }}
      >
        <div
          css={{
            width: '70vw',
            height: '40vh',
          }}
        >
          <noscript>
            <img
              css={{
                width: '100%',
              }}
              alt="v1rtl logo"
              src="/logo.png"
            />
          </noscript>
          <Title />
        </div>

        <span>webdev / designer</span>
      </header>

      <section
        id="about"
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          padding: '3rem',
          scrollMarginTop: '150px',
          gap: '3rem',
        }}
      >
        <section>
          <h3 css={{ marginTop: 0 }}>Howdy, I&apos;m Paul</h3>
          <p>
            I&apos;m a self-taught fullstack web developer who tries to combine technology and art. I like web
            development, OSS, design and drawing.
            <ul>
              <li>
                Founder of <a href="https://komfy.now.sh">Komfy</a>
              </li>
              <li>
                <a href="https://t.me/we_use_js">@we_use_js</a> Telegram channel author
              </li>
              <li>
                Co-author of{' '}
                <a href="https://github.com/react-spring/react-postprocessing">react-postprocessing (W.I.P.)</a>
              </li>
            </ul>
          </p>
        </section>
        {/* <picture
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <source srcSet="/me.webp" type="image/webp" media="screen" />
          <img src="/me.gif" alt="me" width="100%" loading="lazy" />
        </picture> */}
        <Bio />
      </section>

      <Contact />
    </main>
  )
}

export default Index
