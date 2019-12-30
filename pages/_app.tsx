import React from 'react'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../lib/theme'

const CustomApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="I'm a teen fullstack web developer who tries to combine both tech and art. I like frontend and backend. I'm a lead dev of Komfy and CEO author t.me/we_use_js."
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="og:title" content="V!RTL" />
      <meta name="og:image" content="https://i.ibb.co/4jbtNwK/ezgif-com-resize.png" />
      <meta name="og:url" content="https://v1rtl.site" />
      <meta
        name="og:description"
        content="I'm a teen fullstack web developer who tries to combine both tech and art. I like frontend and backend. I'm a lead dev of Komfy and author of t.me/we_use_js."
      />
      <meta name="og:locale" content="en_US" />
      <meta name="og:site_name" content="v1rtl.site" />
      <link rel="icon" type="image/png" href="/icon.png" />
      <title>v 1 r t l ✨</title>
    </Head>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp
