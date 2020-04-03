import React, { useState } from 'react'
import Router from 'next/router'

const Tag = ({ tag, setTags }: { tag: string; setTags: (v: (tags: string[]) => string[]) => void }) => {
  const [clicked, click] = useState(false)

  return (
    <span
      css={
        clicked
          ? {
              color: 'black',
              backgroundColor: 'white'
            }
          : {
              color: 'white',
              backgroundColor: 'black'
            }
      }
      onClick={() => {
        click(clicked => {
          const c = !clicked
          if (c) {
            setTags(tags => [...tags, tag])
          } else {
            setTags(tags => tags.filter(t => t !== tag))
          }
          return c
        })
      }}
    >
      {tag}
    </span>
  )
}

const ProjectSearch = () => {
  const [tags, setTags] = useState<string[]>([])
  const [type, setType] = useState('all')

  const doQuery = () => {
    Router.push(`/proj/[type]?tags=${tags.join(',')}`, `/proj/${type}?tags=${tags.join(',')}`)
  }

  return (
    <div
      id="tech_skills"
      css={{
        padding: '3rem',
        p: {
          width: '40vw',
          '@media (max-width: 450px)': {
            width: '80vw'
          }
        }
      }}
    >
      <section>
        <h2>tech skills</h2>
        <p>
          Here&apos;s a list of all the tools I ever used for my work. Here are programming languages, frameworks,
          design tools, Kanban boards, and more.
        </p>
        <p>Select tags and then click &quot;Filter projects&quot; to see my work with usage of any of these tech.</p>
      </section>
      <div
        css={{
          span: {
            display: 'inline-block',
            padding: '0.5rem',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            fontSize: '0.8rem',
            '&:hover, button:hover': {
              cursor: 'pointer'
            }
          }
        }}
      >
        <div>
          {[
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
            'Travis CI',
            'THREE',
            'react-three-fiber'
          ].map((tag, i) => (
            <Tag key={i} tag={tag} setTags={setTags} />
          ))}
        </div>
        Scope:
        <select
          autoComplete="on"
          onChange={e => setType(e.currentTarget.value)}
          defaultValue="all"
          css={{ marginLeft: '1rem' }}
        >
          <option>all</option>
          <option>sites</option>
          <option>tools</option>
        </select>
        <button onClick={doQuery}>Submit</button>
      </div>
    </div>
  )
}

export default ProjectSearch
