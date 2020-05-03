import React, { useState } from 'react'
import Router from 'next/router'

const Tag = ({ tag, setTags }: { tag: string; setTags: (v: (tags: string[]) => string[]) => void }) => {
  const [clicked, click] = useState(false)

  const handleTagClick = () => {
    click((clicked) => {
      const c = !clicked
      if (c) {
        setTags((tags) => [...tags, tag])
      } else {
        setTags((tags) => tags.filter((t) => t !== tag))
      }
      return c
    })
  }

  return (
    <span
      role="button"
      css={
        clicked
          ? {
              color: 'var(--bg)',
              backgroundColor: 'var(--fg)',
            }
          : {
              color: 'var(--fg)',
              backgroundColor: 'var(--bg)',
            }
      }
      onClick={handleTagClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleTagClick()
        }
      }}
      tabIndex={0}
    >
      {tag}
    </span>
  )
}

const ProjectSearch = () => {
  const [tags, setTags] = useState<string[]>([])
  const [type, setType] = useState('all')

  const doQuery = () => {
    if (type === 'all' && tags.length === 0) {
      Router.push('/list')
    } else {
      Router.push('/list/[type]/[tags]', `/list/${type}/${tags.join(',')}`)
    }
  }

  return (
    <div
      id="tech_skills"
      css={{
        width: '60vw',
        margin: '0 auto',
        padding: '3rem',
      }}
    >
      <section>
        <h2>Tech skills</h2>
        <p>
          Here&apos;s a list of all the tools I ever used for my work. I know some of them on a decent level, others I
          may used a few times. Here are programming languages, frameworks, design tools, Kanban boards, CIs, and more.
        </p>
        <p>Select tags and then click &quot;Filter projects&quot; to see my work with usage of any of these tech.</p>
      </section>
      <form
        css={{
          span: {
            display: 'inline-block',
            padding: '0.5rem',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            fontSize: '0.8rem',
            '&:hover, button:hover': {
              cursor: 'pointer',
            },
          },
        }}
      >
        <div>
          {[
            'JavaScript',
            'CSS',
            'Go',
            'Next.js',
            'React',
            'Rebass',
            'Emotion',
            'REST',
            'GraphQL',
            'Apollo',
            'PostCSS',
            'styled-jsx',
            'TypeScript',
            'Contentful',
            'WebAssembly',
            'Node.js',
            'Jest',
            'Figma',
            'Trello',
            'ZEIT Now',
            'Linux',
            'Ubuntu',
            'Python',
            'pm2',
            'Django',
            'PostgreSQL',
            'Heroku',
            'Travis CI',
            'THREE',
            'react-three-fiber',
            'Monaco Editor',
            'MDX',
            'nginx',
          ].map((tag, i) => (
            <Tag key={i} tag={tag} setTags={setTags} />
          ))}
        </div>
        Scope:
        <select
          autoComplete="on"
          onBlur={(e) => setType(e.currentTarget.value)}
          defaultValue="all"
          css={{ marginLeft: '1rem' }}
        >
          <option label="all">all</option>
          <option label="sites">sites</option>
          <option label="tools">tools</option>
        </select>
        <button onClick={doQuery}>Submit</button>
      </form>
    </div>
  )
}

export default ProjectSearch
