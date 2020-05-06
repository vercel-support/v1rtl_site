import React from 'react'
import Head from 'next/head'
import { GlobalMeta } from '../Global'

export type MetaProps = {
  title: string
  desc: string
  image: string
  date: string
}

const Meta = ({ meta }: { meta: MetaProps }) => {
  const title = `${meta.title} - v1rtl.site`

  return (
    <>
      <Head>
        <GlobalMeta />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        <meta name="og:description" content={meta.desc} />
        <meta name="og:image" content={meta.image} />
        <meta name="og:article:section" content="Programming" />
        <meta name="og:article:author" content="v1rtl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="article:published_time" content={meta.date} />
      </Head>
      <header>
        <img src={meta.image} alt={meta.title} />
        <h1>{meta.title}</h1>
      </header>
    </>
  )
}

export default Meta