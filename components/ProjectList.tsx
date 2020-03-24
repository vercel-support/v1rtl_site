import React from 'react'
import { css } from '@emotion/core'
import Link from 'next/link'
export interface ProjectProps {
  title: string
  desc: string
  screenshot?: string
  status: string
  stack: string[]
  link: string
  teamProject?: boolean
  longDesc?: string
}

const Project = ({ title, screenshot }: ProjectProps) => (
  <div
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
    {screenshot && (
      <Link href={`/site?site=${screenshot}`}>
        <a>
          <figure
            css={css`
              margin: 0;
            `}
          >
            <picture>
              <source type="image/webp" srcSet={`/projects/${screenshot}.webp`} media="screen" />
              <img src={`/projects/${screenshot}.png`} width="100%" />
            </picture>
            <figcaption>
              <h1>{title}</h1>
            </figcaption>
          </figure>
        </a>
      </Link>
    )}
  </div>
)

const ProjectList = ({
  projects,
  cols = 'repeat(auto-fit, minmax(250px, 1fr))'
}: {
  projects: ProjectProps[]
  cols?: string
}) => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: cols,
      gridGap: '5rem',
      '@media (max-width: 650px)': {
        gridTemplateColumns: '1fr'
      }
    }}
  >
    {projects.map(proj => (
      <Project {...proj} key={proj.title} />
    ))}
  </div>
)

export default ProjectList
