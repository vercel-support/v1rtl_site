import React from 'react'
import { css } from '@emotion/core'
import dynamic from 'next/dynamic'

export interface ProjectProps {
  title: string
  desc: string
  screenshot: string
  status: string
  stack: string[]
  link: string
}

const Project = ({ title, screenshot, status, stack, desc, link }: ProjectProps) => (
  <figure
    css={css`
      z-index: 100;
      * {
        color: var(--fg);
      }
      picture * {
        box-shadow: 3px 1px 45px rgba(0, 0, 0, 0.3);
      }
    `}
  >
    <picture>
      <source srcSet={`/projects/${screenshot}.png`} type="image/png" />
      <source type="image/webp" srcSet={`/projects/${screenshot}.webp`} />
      <img src={`/projects/${screenshot}.png`} width="100%" />
    </picture>
    <figcaption>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        css={{
          color: 'var(--fg)',
          '&:hover': {
            textDecorationThickness: 2
          }
        }}
      >
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
      <strong>Status: {status}</strong>
      <p
        css={{
          fontSize: '0.8rem'
        }}
      >
        Stack: {stack.join(', ')}
      </p>
    </figcaption>
  </figure>
)

const ProjectList = ({ projects }: { projects: ProjectProps[] }) => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gridGap: '1rem'
    }}
  >
    {projects.map(proj => (
      <Project {...proj} key={proj.title} />
    ))}
  </div>
)

export default ProjectList
