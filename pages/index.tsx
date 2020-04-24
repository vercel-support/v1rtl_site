import React, { Suspense } from 'react'
import { websites } from '../lib/projects'
import Bio from '../components/Bio'
import ProjectSearch from '../components/ProjectSearch'
import Sites from '../components/Sites'
import Artwork from '../components/Artwork'
import Repos from '../components/Repos'
import { NextPage } from 'next'
import 'isomorphic-unfetch'
import { Canvas } from 'react-three-fiber'
import Text from '../components/WebGL/Text'

const Index: NextPage = () => {
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
          <Canvas
            resize={{
              scroll: false,
            }}
          >
            <Suspense fallback={<h1>Hello World</h1>}>
              <Text>v 1 r t l</Text>
            </Suspense>
          </Canvas>
        </div>

        {/* <video src="/v1rtl.mp4" width="50%" autoPlay loop /> */}
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
      <Repos />
    </main>
  )
}

export default Index
