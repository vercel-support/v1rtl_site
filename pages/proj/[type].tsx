import React from 'react'
import { NextPage, NextPageContext } from 'next'
import 'isomorphic-unfetch'
import { Project } from '../api/proj'
import BackButton from '../../components/BackButton'
import ProjectView from '../../components/ProjectView'
import { css } from '@emotion/core'

type ProjectCategory = 'all' | 'sites' | 'tools'

type Props = {
  tags: string[]
  list: Project[]
  type: ProjectCategory
}

const ProjectGrid = ({ children }: { children: any }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    `}
  >
    {children}
  </div>
)

const FilteredProjectList: NextPage<Props> = ({ tags, list, type }: Props) => {
  if (type === 'all') {
    const sites = list.filter(l => l.type === 'site')

    const tools = list.filter(l => l.type === 'tool')

    return (
      <article css={{ padding: '3rem' }}>
        <BackButton to="/#tech_skills" />
        <header>Tags you picked: {tags.join(', ')}</header>
        {sites?.[0] && (
          <section>
            <h2>Websites</h2>
            <ProjectGrid>
              {sites.map(s => (
                <ProjectView key={s.title} proj={s} />
              ))}
            </ProjectGrid>
          </section>
        )}
        {tools?.[0] && (
          <section>
            <h2>Tools</h2>
            <ProjectGrid>
              {tools.map(t => (
                <ProjectView key={t.title} proj={t} />
              ))}
            </ProjectGrid>
          </section>
        )}
      </article>
    )
  } else {
    return (
      <article css={{ padding: '3rem' }}>
        <BackButton to="/#tech_skills" />
        <header>
          {type[0].toUpperCase() + type.slice(1)} you picked that use {tags.join(', ')}
        </header>
        <section>
          <h2>{type[0].toUpperCase() + type.slice(1)}</h2>
          <ProjectGrid>
            {list.map(i => (
              <ProjectView key={i.title} proj={i} />
            ))}
          </ProjectGrid>
        </section>
      </article>
    )
  }
}

FilteredProjectList.getInitialProps = async ({ req, query }: NextPageContext) => {
  const host = req ? `http://${req.headers.host}` : ''
  const tagsQuery = query.tags as string

  const type = query.type as ProjectCategory

  const tags = tagsQuery.split(',')

  const res = await fetch(`${host}/api/proj?type=${type}&tags=${tagsQuery}`)

  const json = await res.json()

  return {
    tags,
    type,
    list: json
  }
}

export default FilteredProjectList
