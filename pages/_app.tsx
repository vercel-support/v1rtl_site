import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="I'm a teen fullstack web developer who tries to combine both tech and art. I like frontend and backend. I'm a lead dev of Komfy and CEO author t.me/we_use_js."
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
      <meta name="theme-color" content="#464c68" />
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
        /* Shared colors */
        :root {
          --sass: #cf6599;
          --apollo: #102b4b;
          --wasm: #644fed;
          --ts: #007bcc;
          --gql: #e435a7;
        }

        body {
          overflow-x: hidden;
          margin: 0;
        }
        /* Light theme colors */
        [data-theme='dark'] {
          :root {
            --bg: #292d3e;
            --fg: #c7c7c7;
            --fg-secondary: #383d54;
            --red: #5f0808;

            --js: #f7df1f;
            --react: #00d8ff;
            --go: #21bcae;
            --node: #84cd27;
            --illo: #fc7b02;
            --gql: #e435a7;
            --apollo: var(--fg);
          }

          body {
            background-color: var(--bg);
            color: var(--fg);
          }
        }
        /* Dark theme colors */
        [data-theme='light'] {
          :root {
            --bg: #c7c7c7;
            --fg: #292d3e;
            --fg-secondary: #ababab;
            --red: #f06459;

            --illo: #9d5612;
            --js: #9f8f0c;
            --ps: #021b27;
            --node: #497117;
            --react: #108fa6;
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
