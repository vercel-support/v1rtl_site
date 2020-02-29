import React from 'react'
import { CSSObject } from '@emotion/core'

const shadow = (color: string): CSSObject => ({
  fontSize: 'calc(3rem + 3vw)',
  fontWeight: 1000,
  margin: 'calc(1rem + 2vw)',
  color: '#606060',
  textShadow: `3px 3px ${color}`
})

const EpicTitle = () => (
  <div
    css={{
      display: 'flex',
      marginBottom: '25vh',
      height: '150vh',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50vh'
    }}
  >
    <span css={shadow('red')}>v</span>

    <span css={shadow('blue')}>1</span>

    <span css={shadow('green')}>r</span>

    <span css={shadow('orange')}>t</span>

    <span css={shadow('magenta')}>l</span>
  </div>
)

export default EpicTitle
