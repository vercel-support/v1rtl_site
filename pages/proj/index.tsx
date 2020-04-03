import React from 'react'
import { Project } from '../api/proj'
import { NextPage } from 'next'
import 'isomorphic-unfetch'

type Props = {
  sites: Project[]
  tools: Project[]
}

const FullProjectList: NextPage<Props> = ({ sites, tools }: Props) => (
  <main>
    <h2>Websites</h2>
    {sites.map(proj => (
      <div key={proj.title}>{proj.title}</div>
    ))}
    <h2>Tools</h2>
    {tools.map(proj => (
      <div key={proj.title}>{proj.title}</div>
    ))}
  </main>
)

FullProjectList.getInitialProps = async ({ req }) => {
  const host = req ? `http://${req.headers.host}` : ''

  const res = await fetch(`${host}/api/proj`)

  const { sites, tools } = await res.json()

  return {
    sites,
    tools
  }
}

export default FullProjectList
