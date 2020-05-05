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
import { GlobalMeta, PageStyles } from '../components/Global'
import CodeBlock from '../components/CodeBlock'
import Footer from '../components/Footer'

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
          <meta name="og:locale" content="en_US" />
          <meta name="og:site_name" content="v1rtl.site" />
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <title>v 1 r t l ✨</title>
          <GlobalMeta />
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
        <article
          css={{
            padding: '3rem',
            paddingTop: '5rem',
            width: 'calc(40vw + 10em)',
            margin: '0 auto',
            p: {
              textAlign: 'justify',
            },
            img: {
              height: '350px',
              width: '100%',
              margin: '1em 0',
              objectFit: 'cover',
            },
            h1: {
              textAlign: 'center',
            },
            ul: {
              paddingLeft: '1rem',
            },
            blockquote: {
              fontStyle: 'italic',
              marginLeft: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </article>
        <Footer />
      </MDXProvider>
    )
  } else {
    return (
      <>
        <Head>
          <GlobalMeta />
        </Head>
        <PageStyles />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default CustomApp
