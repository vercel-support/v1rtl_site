import React from 'react'

import skills, { pickSize } from '../lib/skills'

const Skills = () => (
  <div
    css={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div
      css={{
        width: 'calc(15em + 15vw)',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.4rem'
      }}
    >
      {skills.map(({ color, value, text }, i) => (
        <span
          key={i}
          css={{
            fontSize: `calc(${pickSize(value)}px - 0.1vw)`,
            color: `var(--${color})`
          }}
        >
          {text}
        </span>
      ))}
    </div>
  </div>
)

export default Skills
