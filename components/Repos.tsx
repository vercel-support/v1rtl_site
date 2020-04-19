import React from 'react'
import { NextPage } from 'next'
import 'isomorphic-unfetch'

export interface Repo {
  name: string
  stars: number
  color: string
  desc: string
  lang: string
}

const Tools: NextPage<{ repos: Repo[] }> = ({ repos }: { repos: Repo[] }) => {
  return (
    <section
      id="repos"
      css={{
        padding: '3rem',
      }}
    >
      <h2>Repos</h2>
      <div
        css={{
          gridGap: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        }}
      >
        {repos
          .filter((repo) => repo.name !== 'v1rtl.site')
          .map((repo) => (
            <a
              key={repo.name}
              css={{
                ':not(:hover)': {
                  textDecoration: 'none',
                },
              }}
              href={`https://github.com/talentlessguy/${repo.name}`}
            >
              <div
                title={repo.desc}
                css={{
                  border: `3px solid ${repo.color}`,
                  borderRadius: '15px',
                  padding: '1rem',
                  h3: {
                    margin: 0,
                  },
                }}
              >
                <h3>
                  {repo.name} 🟊 {repo.stars}
                </h3>
                <p>{repo.desc}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  )
}

export default Tools
