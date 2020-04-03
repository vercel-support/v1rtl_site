import React from 'react'
import { Project } from '../pages/api/proj'

const ProjectView = ({ proj }: { proj: Project }) => (
  <section>
    <a href={proj.link} target="_blank" rel="noopener noreferrer">
      <picture>
        <source srcSet={`/projects/${proj.screenshot}.webp`} type="image/webp" />
        <img src={`/projects/${proj.screenshot}.png`} alt={proj.title} css={{ width: '100%' }} />
      </picture>
    </a>

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
  </section>
)

export default ProjectView
