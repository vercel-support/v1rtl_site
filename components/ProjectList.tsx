import React from 'react'

const Project = ({
  title,
  screenshot,
  status,
  stack
}: {
  title: string
  screenshot: string
  status: string
  stack: string[]
}) => (
  <figure>
    <picture>
      <img src={screenshot} />
    </picture>
    <figcaption>
      <h3>{title}</h3>
      <strong>Status: ${status}</strong>
      {stack.map(item => (
        <img key={item} src={'/icons' + item + '.svg'} />
      ))}
    </figcaption>
  </figure>
)

const ProjectList = () => {}
