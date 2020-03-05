import React from 'react'

import skills, { pickSize } from '../lib/skills'

const Skills = () => (
  <div
    css={{
      width: 'calc(15em + 15vw)',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '0.4rem'
    }}
  >
    {skills.map(({ color, value, text }) => (
      <span
        css={{
          fontSize: pickSize(value),
          color: `var(--${color})`
        }}
      >
        {text}
      </span>
    ))}
  </div>
)

export default Skills
