import React from 'react'
import { NextPage, NextPageContext } from 'next'
import 'isomorphic-unfetch'
import { Project } from '../../lib/projects'
import BackButton from '../../components/BackButton'
import ProjectView from '../../components/ProjectView'
import { CSSObject } from '@emotion/core'

type Props = {
  tags: string[]
  list: Project[]
  filter: string
}

export const ProjectGrid = ({ children, limit = 300 }: { children: any; limit?: number }) => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${limit}px, 1fr))`,
      gap: '3rem',
      [`@media screen (max-width: ${limit + 50})`]: {
        gridTemplateColumns: `repeat(auto-fit, minmax(${limit - 150}px, 1fr))`,
      },
    }}
  >
    {children}
  </div>
)

const FilteredProjectList: NextPage<Props> = ({ tags, list, filter }: Props) => {
  if (filter !== 'sites' && filter !== 'tools') {
    const sites = list.filter((l) => l.type === 'site')

    const tools = list.filter((l) => l.type === 'tool')

    return (
      <article css={{ padding: '3rem' }}>
        <BackButton to="/#tech_skills" />
        {tags?.length && <header>Tags you picked: {tags.join(', ')}</header>}
        {sites?.[0] && (
          <section>
            <h2>Websites</h2>
            <ProjectGrid limit={475}>
              {sites.map((s) => (
                <ProjectView key={s.title} proj={s} />
              ))}
            </ProjectGrid>
          </section>
        )}
        {tools?.[0] && (
          <section>
            <h2>Tools</h2>
            <ProjectGrid>
              {tools.map((t) => (
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
          {filter[0].toUpperCase() + filter.slice(1)} you picked that use {tags.join(', ')}
        </header>
        <section>
          <h2>{filter[0].toUpperCase() + filter.slice(1)}</h2>
          <ProjectGrid>
            {list.map((i) => (
              <ProjectView key={i.title} proj={i} />
            ))}
          </ProjectGrid>
        </section>
      </article>
    )
  }
}

FilteredProjectList.getInitialProps = async ({ req, query }: NextPageContext) => {
  const host = `http://${req ? req.headers.host : location.host}`
  const tagsQuery = query.tags as string

  const filter = query.type as string

  const tags = tagsQuery?.split(',')

  const params: any = {}

  if (filter === 'sites' || filter === 'tools') {
    params.type = filter
  }

  if (tags) {
    params.tags = tagsQuery
  }

  const constructQuery = (): string => {
    let q = host + '/api/projects?'
    for (const [k, v] of Object.entries(params)) {
      q += `&${k}=${v}`
    }

    return q
  }

  const res = await fetch(constructQuery())

  const json = await res.json()

  return {
    tags,
    filter,
    list: json,
  }
}

export default FilteredProjectList
