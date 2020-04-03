import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'
import 'typeface-fira-code'
import 'typeface-inter'
import fonts from '../lib/fonts'
import NavBar from '../components/Navbar'

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
        :root {
          --fg-hover: #d2c7c7;
          --fg: white;
          --bg: black;
        }
        * {
          font-family: ${fonts.body};

          scroll-behavior: smooth;
          scrollbar-color: #2a2c2f #1a1c1d;
        }

        body {
          color: var(--fg);
          a {
            color: var(--fg);
            :hover {
              color: var(--fg-hover);
            }
          }
          overflow-x: hidden;
          margin: 0;
          background-color: var(--bg);
          pre,
          code {
            font-family: ${fonts.code};
          }
          h2 {
            letter-spacing: -3px;
            font-size: calc(2rem + 2vw);
          }

          button,
          select {
            padding: 0.5rem;
            margin-bottom: 1rem;
            margin-right: 1rem;
            border: 3px solid;
            border-color: var(--fg);
            color: var(--fg);
            background-color: var(--bg);
            :hover {
              cursor: pointer;
              color: var(--fg-hover);
              border-color: var(--fg-hover);
            }
          }
          button {
            padding: 0.5rem 1rem;
            font-weight: bold;
          }
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
      `}
    />

    <NavBar />
    <Component {...pageProps} />
  </>
)

export default CustomApp
