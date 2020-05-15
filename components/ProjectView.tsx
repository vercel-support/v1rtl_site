import React from 'react'
import dynamic from 'next/dynamic'
import { Project } from '../lib/projects'

const Wave = dynamic(() => import('./WebGL/Wave'), {
  ssr: false,
})

const ProjectView = ({ proj }: { proj: Project }) => {
  return (
    <div>
      {proj.screenshot && (
        <>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            <Wave
              key={proj.title}
              img={`/basis-sites/${proj.screenshot}.basis`}
              amp={0.1}
              freq={0.2}
              css={{
                height: '60vh',
                '@media (max-width: 1055px)': {
                  height: '80vh',
                },
                '@media (max-width: 500px)': {
                  width: '100%',
                },
              }}
            />
            <noscript>
              <picture>
                <source srcSet={`/sites/${proj.screenshot}.webp`} type="image/webp" />
                <img
                  src={`/sites/${proj.screenshot}.jpg`}
                  alt={proj.title}
                  css={{
                    width: '100%',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </picture>
            </noscript>
          </a>
        </>
      )}

      <div>
        <a href={proj.link} target="_blank" rel="noopener noreferrer">
          <h3>{proj.title}</h3>
        </a>
        <p>{proj.desc}</p>
        {proj.stack.map((t) => (
          <span
            css={{
              marginRight: '1rem',
              display: 'inline-block',
              marginBottom: '1rem',
              fontSize: '0.8rem',
            }}
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectView
