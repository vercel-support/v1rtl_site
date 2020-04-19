import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'
import 'typeface-fira-code'
import 'typeface-inter'
import fonts from '../lib/fonts'
import NavBar from '../components/Navbar'
import { supportsWebp } from '../lib/webp'
import { DataContextProvider } from '../lib/context'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [isWebGLSupported, setWebGLSupported] = useState(true)

  const [isWebpSupported, setWebpSupported] = useState(true)

  useEffect(() => {
    supportsWebp().then((sup) => setWebpSupported(sup))
    import('three/examples/jsm/WebGL').then((mod) => {
      setWebGLSupported(mod.WEBGL.isWebGLAvailable())
    })
  }, [])

  return (
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
        <meta name="theme-color" content="#292d3e" />
      </Head>
      <Global
        styles={css`
          html {
            :root {
              --fg-hover: #d2c7c7;
              --fg: white;
              --bg: black;
            }
          }

          * {
            font-family: ${fonts.body};

            scroll-behavior: smooth;
            scrollbar-color: #2a2c2f #1a1c1d;
          }

          body {
            overflow-x: hidden;
            background-color: var(--bg);
            margin: 0;
            color: var(--fg);
            a {
              color: var(--fg);
              :hover {
                color: var(--fg-hover);
              }
            }
          }

          body main,
          body article {
            pre,
            code {
              font-family: ${fonts.code};
            }
            h2 {
              letter-spacing: -3px;
              font-size: calc(2rem + 2vw);
              text-align: center;
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
            background-color: #1b1e2b;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #212535;
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

      <DataContextProvider
        value={{
          isWebGLSupported,
          isWebpSupported,
        }}
      >
        <NavBar />
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  )
}

export default CustomApp
