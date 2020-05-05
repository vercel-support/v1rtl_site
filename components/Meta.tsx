import React from 'react'
import Head from 'next/head'

type Meta = {
  title: string
  desc: string
  image: string
  topic?: string
}

const Meta = ({ meta }: { meta: Meta }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="og:title" content={meta.title} />
      <meta name="og:type" content="article" />
      <meta name="og:description" content={meta.desc} />
      <meta name="og:image" content={meta.image} />
      <meta name="og:article:section" content={meta.topic} />
      <meta name="og:article:author" content="v1rtl" />
    </Head>
    <img src={meta.image} alt={meta.title} />
    <h1>{meta.title}</h1>
  </>
)

export default Meta
