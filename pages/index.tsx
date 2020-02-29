import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import Plx from 'react-plx'
import EpicTitle from '../components/EpicTitle'
import dynamic from 'next/dynamic'
import { Theme } from '../components/ThemeSwitch'

import NavBar from '../components/Navbar'

const Figure = dynamic(() => import('../components/Figure'))

const Index = () => {
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
            userSelect: 'none'
          }}
          src="/me.png"
          onMouseDown={e => e.preventDefault()}
          height={830 / 3}
          width={1092 / 3}
        />
      </Plx>
      <EpicTitle />

      <Figure
        figure={new THREE.BoxBufferGeometry(0.6, 0.6, 0.6)}
        color="red"
        id="about"
        content={{
          heading: 'Hello',
          text: (
            <>
              I'm a 16 y/o fullstack web developer who tries to combine both tech and art. I like frontend and backend.
              I'm one of the developers at Komfy and author of <a href="https://t.me/we_use_js">@we_use_js.</a>
            </>
          )
        }}
        styles={{
          left: 50,
          top: 150,
          width: '25rem',
          '@media (max-width: 700px)': {
            width: 'unset'
          }
        }}
      />
      {/* <Figure figure={new THREE.SphereBufferGeometry(1, 1, 1)} color="blue" /> */}
    </>
  )
}

export default Index
