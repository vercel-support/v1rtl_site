import React from 'react'
import Head from 'next/head'
import { Global, css } from '@emotion/core'

const CustomApp = ({ Component, pageProps }) => (
  <>
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
        @import url('https://rsms.me/inter/inter.css');
        html {
          font-family: 'Inter', sans-serif;
        }
        ::-webkit-scrollbar {
          background-color: #1a1c1d;
          color: #ddd9cf;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2a2c2f;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #333739;
        }
        ::-webkit-scrollbar-thumb:active {
          background-color: #404447;
        }
        ::-webkit-scrollbar-corner {
          background-color: #151819;
        }
        * {
          scrollbar-color: #2a2c2f #1a1c1d;
        }
        @supports (font-variation-settings: normal) {
          html {
            font-family: 'Inter var', sans-serif;
          }
        }

        body {
          overflow-x: hidden;

          margin: 0;
        }
        [data-theme='dark'] {
          :root {
            --bg: #292d3e;
            --fg: #c7c7c7;

            --red: #5f0808;
          }
          body {
            background-color: var(--bg);
            color: var(--fg);
          }
        }
        [data-theme='light'] {
          :root {
            --bg: #c7c7c7;
            --fg: #292d3e;
          }
          body {
            background-color: var(--bg);
            color: var(--fg);
          }
        }
      `}
    />
    <Component {...pageProps} />
  </>
)

export default CustomApp
