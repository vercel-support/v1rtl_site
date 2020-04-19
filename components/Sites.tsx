import React from 'react'
import { Project } from '../lib/projects'
import ProjectView from './ProjectView'

const Sites = ({ projects }: { projects: Project[] }) => (
  <section css={{ padding: '3rem' }} id="sites">
    <h2>Sites</h2>

    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))',
        gap: '3rem',
      }}
    >
      {projects.map((proj) => (
        <ProjectView proj={proj} key={proj.title} />
      ))}
    </div>
  </section>
)

export default Sites
