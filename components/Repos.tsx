import React from 'react'
import { NextPage } from 'next'
import 'isomorphic-unfetch'
import { repos } from '../lib/projects'

const Repos: NextPage = () => {
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
        {repos.map((repo) => (
          <a
            key={repo.title}
            css={{
              ':not(:hover)': {
                textDecoration: 'none',
              },
            }}
            href={`https://github.com/${!repo.title.includes('/') ? '' : 'talentlessguy'}/${repo.title}`}
          >
            <div
              title={repo.desc}
              css={{
                border: `3px solid ${repo.primaryLanguage.color}`,
                borderRadius: '15px',
                padding: '1rem',
                h3: {
                  margin: 0,
                },
              }}
            >
              <h3>
                {repo.title} 🟊 {repo.stars}
              </h3>
              <p>{repo.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Repos
