import { NextApiRequest, NextApiResponse } from 'next'
import { Project, repos, websites } from '../lib/projects'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const projectsCategory = req.query.type

  let projectList: Project[] & any

  switch (projectsCategory) {
    case 'sites':
      projectList = websites

      break
    case 'repos':
      projectList = repos
      break
    default:
      projectList = [...repos, ...websites]
  }
  const tags = req.query.tags as string

  if (tags) {
    const requestedTags = tags.split(',')

    const filteredProjects = []

    for (const proj of projectList as Project[]) {
      if (requestedTags.every((tag) => proj.stack.includes(tag))) {
        filteredProjects.push(proj)
      }
    }
    res.status(200).json(filteredProjects)
  } else {
    res.status(200).json(projectList)
  }
}
