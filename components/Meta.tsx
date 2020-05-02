import React from 'react'
import Head from 'next/head'

type Meta = {
  title: string
  desc: string
  image: string
  topic?: string
}

const Meta = ({ title, desc, image, topic = 'Programming' }: Meta) => (
  <Head>
    <title>{title}</title>
    <meta name="og:title" content={title} />
    <meta name="og:type" content="article" />
    <meta name="og:description" content={desc} />
    <meta name="og:image" content={image} />
    <meta name="og:article:section" content={topic} />
    <meta name="og:article:author" content="v1rtl" />
  </Head>
)

export default Meta
