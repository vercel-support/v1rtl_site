import React, { useEffect, useState } from 'react'
import { Project } from '../lib/projects'
import Wave from './Wave'

const ProjectView = ({ proj }: { proj: Project }) => {
  // true by default because all modern browser support it
  const [isWebGLAvailable, setWebGLAvailable] = useState(true)

  useEffect(() => {
    import('three/examples/jsm/WebGL').then(mod => {
      setWebGLAvailable(mod.WEBGL.isWebGLAvailable())
    })
  }, [])

  return (
    <div>
      {isWebGLAvailable ? (
        <a href={proj.link} target="_blank" rel="noopener noreferrer">
          <Wave
            key={proj.title}
            img={`/sites/${proj.screenshot}.webp`}
            amp={0.1}
            freq={0.2}
            css={{
              height: '50vh'
            }}
          />
        </a>
      ) : (
        <a href={proj.link} target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={`/sites/${proj.screenshot}.webp`} type="image/webp" />
            <img
              src={`/sites/${proj.screenshot}.png`}
              alt={proj.title}
              css={{
                width: '100%',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </picture>
        </a>
      )}

      <a href={proj.link} target="_blank" rel="noopener noreferrer">
        <h3>{proj.title}</h3>
      </a>
      <p>{proj.longDesc ?? proj.desc}</p>
      {proj.stack.map(t => (
        <span
          css={{
            marginRight: '1rem',
            display: 'inline-block',
            marginBottom: '1rem',
            fontSize: '0.8rem'
          }}
          key={t}
        >
          {t}
        </span>
      ))}
    </div>
  )
}

export default ProjectView