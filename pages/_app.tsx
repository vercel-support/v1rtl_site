import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'
import 'typeface-fira-code'
import 'typeface-inter'
import { MDXProvider } from '@mdx-js/react'
import NavBar from '../components/Navbar'
import { supportsWebp } from '../lib/webp'
import { DataContextProvider } from '../lib/context'
import { useRouter } from 'next/router'
import { PageStyles } from '../components/Global'
import CodeBlock from '../components/CodeBlock'
import Footer from '../components/Footer'
import Body from '../components/Article/Body'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [isWebGLSupported, setWebGLSupported] = useState(true)

  const [isWebpSupported, setWebpSupported] = useState(true)

  const { pathname } = useRouter()

  useEffect(() => {
    supportsWebp().then((sup) => setWebpSupported(sup))
    import('three/examples/jsm/WebGL').then((mod) => {
      setWebGLSupported(mod.WEBGL.isWebGLAvailable())
    })
  }, [])

  if (pathname === '/') {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="I'm a teen fullstack web developer who tries to combine both tech and art. I like frontend and backend. I'm a lead dev of Komfy and CEO author t.me/we_use_js."
          />
          <meta name="og:title" content="V!RTL" />
          <meta name="og:image" content="/sites/v1rtl.jpg" />
          <meta name="og:url" content="https://v1rtl.site" />
          <meta
            name="og:description"
            content="I'm a teen fullstack web developer who tries to combine both tech and art. I like frontend and backend. I'm a lead dev of Komfy and author of t.me/we_use_js."
          />
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <title>v 1 r t l ✨</title>
        </Head>

        <PageStyles />
        <DataContextProvider
          value={{
            isWebGLSupported,
            isWebpSupported,
          }}
        >
          <NavBar />
          <Component {...pageProps} />
        </DataContextProvider>
        <Footer />
      </>
    )
  } else if (pathname.includes('/blog/')) {
    return (
      <MDXProvider
        components={{
          code: CodeBlock,
        }}
      >
        <PageStyles />
        <Global
          styles={css`
            h1 {
              font-size: calc(2rem + 1.5vw);
            }
            h2 {
              font-size: calc(1.25rem + 1vw);
              margin-bottom: 0.5rem;
            }
          `}
        />
        <NavBar />
        <Body>
          <Component {...pageProps} />
        </Body>
        <Footer />
      </MDXProvider>
    )
  } else {
    return (
      <>
        <PageStyles />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default CustomApp
