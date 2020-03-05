import React, { useMemo, useState } from 'react'
import Plx from 'react-plx'
import EpicTitle from '../components/EpicTitle'
import dynamic from 'next/dynamic'

import NavBar from '../components/Navbar'
import { createGeometry } from '../lib/createGeometry'
import Section from '../components/Section'
import skills, { pickSize } from '../lib/skills'
import Skills from '../components/Skills'

const Figure = dynamic(() => import('../components/Figure'))

const Index = () => {
  const [myselfVisible, setMyselfVisible] = useState(true)

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
        <div>scroll down</div>
      </Plx>
      <Plx
        css={{
          position: 'fixed',
          top: 0,
          width: '100%',
          opacity: 0
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
      </Plx>

      <Plx
        css={{
          position: 'fixed',
          bottom: -10,
          left: `calc(50% - ${1092 / 6}px)`,
          zIndex: 100
        }}
        onPlxEnd={() => setMyselfVisible(false)}
        parallaxData={[
          {
            start: 0,
            easing: 'easeInQuart',
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              }
            ]
          },
          {
            start: 800,
            easing: 'easeInQuart',
            end: 1500,
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
        <img
          draggable="false"
          css={{
            userSelect: 'none',
            display: myselfVisible ? 'block' : 'none'
          }}
          src="/me.png"
          onMouseDown={e => e.preventDefault()}
          height={830 / 3}
          width={1092 / 3}
        />
      </Plx>
      <EpicTitle />
      <Figure
        color="white"
        figure={createGeometry()}
        handleFigure={fig => {
          window.onscroll = () => {
            fig.morphTargetInfluences[0] = window.scrollY / 500
          }
        }}
      />
      <Section
        id="about"
        heading="Howdy, I'm Paul"
        text={
          <>
            <p>
              I'm a self-taught fullstack web developer who tries to combine both tech and art. I like web development,
              OSS, design and drawing. I'm one of the developers at Komfy and author of{' '}
              <a href="https://t.me/we_use_js">@we_use_js.</a>
            </p>
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
              <li>
                <strong>Distro</strong>: Manjaro Linux
              </li>
            </ul>
            <Skills />
          </>
        }
      />

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
      <Section
        id="design"
        heading="Hello"
        text={
          <>
            I'm a 16 y/o fullstack web developer who tries to combine both tech and art. I like frontend and backend.
            I'm one of the developers at Komfy and author of <a href="https://t.me/we_use_js">@we_use_js.</a>
          </>
        }
      />
    </>
  )
}

export default Index
