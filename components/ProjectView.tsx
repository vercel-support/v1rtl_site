import React, { useContext } from 'react'
import { Project } from '../lib/projects'
import Wave from './WebGL/Wave'
import { DataContext } from '../lib/context'

const ProjectView = ({ proj }: { proj: Project }) => {
  // true by default because all modern browser support it

  const { isWebGLSupported } = useContext(DataContext)

  return (
    <div>
      {proj.screenshot &&
        (isWebGLSupported ? (
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            <Wave
              key={proj.title}
              img={`/sites/${proj.screenshot}.webp`}
              imgFallback={`/sites/${proj.screenshot}.jpg`}
              amp={0.1}
              freq={0.2}
              css={{
                height: '60vh',
                '@media (max-width: 1055px)': {
                  height: '80vh',
                },
              }}
            />
          </a>
        ) : (
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
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
          </a>
        ))}
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
