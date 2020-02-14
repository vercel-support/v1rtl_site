import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { InterpolationWithTheme } from '@emotion/core'

const shadow = (color: string): InterpolationWithTheme<any> => ({
  fontSize: 'calc(100% + 5vw)',
  fontWeight: 1000,
  margin: '2rem',
  textShadow: `3px 3px ${color}`
})

const EpicTitle = () => (
  <div
    css={{
      display: 'flex',
      height: ' calc(200vh)',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <ParallaxProvider>
      <Parallax x={[-150, 0]} y={[100, 300]}>
        <span css={shadow('red')}>v</span>
      </Parallax>
      <Parallax x={[-100, 0]} y={[30, 300]}>
        <span css={shadow('blue')}>1</span>
      </Parallax>
      <Parallax y={[50, 300]}>
        <span css={shadow('green')}>r</span>
      </Parallax>
      <Parallax y={[75, 300]}>
        <span css={shadow('orange')}>t</span>
      </Parallax>
      <Parallax y={[110, 300]} x={[150, 0]}>
        <span css={shadow('magenta')}>l</span>
      </Parallax>
    </ParallaxProvider>
  </div>
)

export default EpicTitle
