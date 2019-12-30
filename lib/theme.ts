import { CSSObject } from '@emotion/core'

export default {
  fonts: {
    body: "'Fira Code'"
  },
  colors: {
    black: '#1d1f21',
    white: '#cad7dd'
  },
  variants: {
    nav: {
      top: 0,
      left: 0,
      width: '100%',
      p: '1em',
      flexDirection: 'row',
      position: 'sticky',
      bg: 'black'
    },
    link: {
      fontFamily: 'body',
      color: 'white'
    }
  }
} as CSSObject
