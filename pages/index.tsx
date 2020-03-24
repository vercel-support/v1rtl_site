import React, { useMemo, useState, useEffect } from 'react'
import Plx from 'react-plx'
import NavBar from '../components/Navbar'
import Section from '../components/Section'
import * as themeFile from '../lib/colors'
import { ColorContextProvider } from '../lib/context'
import Skills from '../components/Skills'
import ProjectList from '../components/ProjectList'
import { websites, tools } from '../lib/projects'

import EpicTitle from '../components/EpicTitle'
import Figure from '../components/Figure'

const Index = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(localStorage.getItem('v1rtl-theme'))
  }, [])

  const age = useMemo(
    () => Math.abs(new Date(Date.now() - new Date(2003, 12, 5).getTime()).getUTCFullYear() - 1970),
    []
  )

  return (
    <>
      <Plx
        css={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        parallaxData={[
          {
            start: 0,
            end: 200,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity'
              }
            ]
          }
        ]}
      >
        <div>Who am I?</div>
      </Plx>
      <Plx
        css={{
          position: 'fixed',
          top: 0,
          width: '100%',
          opacity: 0,
          zIndex: 1000
        }}
        parallaxData={[
          {
            start: 700,
            end: 1000,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              }
            ]
          }
        ]}
      >
        <NavBar
          handleTheme={theme => setTheme(theme)}
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
      </Plx>

      <EpicTitle />

      {/* <Plx css={{ position: 'sticky', height: '100vh', right: 0, top: 0, userSelect: 'none', zIndex: -1 }}>
        <Figure />
      </Plx> */}
      <ColorContextProvider value={themeFile[theme]}>
        <Figure />
      </ColorContextProvider>

      <Section
        id="about"
        heading="Howdy, I'm Paul"
        text={
          <>
            <section>
              <p>
                I&apos;m a self-taught fullstack web developer who tries to combine both tech and art. I like web
                development, OSS, design and drawing. I&apos;m one of the developers at{' '}
                <a href="https://komfy.now.sh">Komfy</a> and author of <a href="https://t.me/we_use_js">@we_use_js.</a>
              </p>
            </section>
            <section>
              <ul css={{ padding: '1rem' }}>
                <li>
                  <strong>Country: </strong> Russia
                </li>
                <li>
                  <strong>Location: </strong>a small town near Moscow
                </li>
                <li>
                  <strong>Age: </strong>

                  {age}
                </li>
                <li>
                  <strong>Gender:</strong> Male
                </li>
              </ul>
            </section>
          </>
        }
      />
      <Section text={<Skills />} />
      <Section
        id="code"
        heading="Code"
        text={
          <>
            I found myself in web development. This is the perfect job for me because it is creative and technical at
            the same time. I have been building the web for 1.5 years and still do it. I try to learn any new tech that
            comes out and integrate it in new projects.
          </>
        }
      />
      <Section id="websites" subheading="Websites" text={<ProjectList projects={websites} cols="1fr 1fr" />} />

      <Section id="tools" subheading="Tools" text={<ProjectList projects={tools} />} />
    </>
  )
}

export default Index
