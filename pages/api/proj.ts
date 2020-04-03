import { NextApiRequest, NextApiResponse } from 'next'

export type Project = {
  stack: string[]
  desc: string
  title: string
  screenshot?: string
  longDesc?: string
  link: string
  type: 'site' | 'tool'
}

const websites: Project[] = [
  {
    type: 'site',
    stack: [
      'Go',
      'Next.js',
      'React',
      'Rebass',
      'Emotion',
      'GraphQL',
      'Apollo',
      'TypeScript',
      'Figma',
      'ZEIT Now',
      'Travis CI'
    ],
    desc: 'Ad-free open-source secure social network',
    link: 'https://komfy.now.sh/',
    title: 'Komfy',
    screenshot: 'komfy',
    longDesc:
      'Komfy is an ad-free social network without tracking, focused on users rather than businesses. The main goals are simplicity, usability and privacy. The project is developed by a team of hobby developers.'
  },
  {
    type: 'site',
    stack: ['Next.js', 'PostCSS', 'React', 'styled-jsx', 'Linux', 'REST', 'Trello'],
    title: 'ProtestWiki',
    desc: 'Russian opposition wiki',
    link: 'http://provalwiki.online',
    screenshot: 'provalwiki'
  },

  {
    type: 'site',
    stack: ['Next.js', 'Rebass', 'Emotion', 'TypeScript', 'Contentful', 'Figma', 'ZEIT Now'],
    title: 'Proctolog',
    desc: 'Doctor personal site',
    link: 'https://isachkov.com',
    screenshot: 'proctolog'
  },
  {
    type: 'site',
    stack: ['Next.js', 'PostCSS', 'ZEIT Now'],
    title: 'Tech design',
    desc: 'Design classes for children',
    link: 'https://techmedia-protvino.now.sh/',
    screenshot: 'tech_design'
  },
  {
    type: 'site',
    stack: ['Next.js', 'THREE', 'react-three-fiber', 'TypeScript', 'Emotion', 'REST'],
    title: 'This website',
    desc: 'The one you are currently watching',
    link: '/'
  }
]

const tools: Project[] = [
  {
    type: 'tool',
    stack: ['Go', 'WebAssembly'],
    desc: 'Write frontend apps with Go',
    link: 'https://github.com/talentlessguy/go-web-app',
    title: 'go-web-app'
  },
  {
    type: 'tool',
    stack: ['Node.js'],
    title: 'SimpleDDoS',
    desc: 'Multi-threaded DDoS script',
    link: 'https://github.com/talentlessguy/simple-ddos'
  },
  {
    type: 'tool',
    stack: ['TypeScript', 'Jest'],
    title: 'multiple-fetch',
    link: 'https://github.com/talentlessguy/multiple-fetch',
    desc: 'Fetch multiple resources using one function'
  }
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const projectsCategory = req.query.type

  let projectList: Project[]

  switch (projectsCategory) {
    case 'sites':
      projectList = websites

      break
    case 'tools':
      projectList = tools
      break
    default:
      projectList = [...tools, ...websites]
  }
  const tags = req.query.tags as string

  if (tags) {
    const requestedTags = tags.split(',')

    const filteredProjects = []

    for (const proj of projectList as Project[]) {
      if (requestedTags.every(tag => proj.stack.includes(tag))) {
        filteredProjects.push(proj)
      }
    }
    res.status(200).json(filteredProjects)
  } else {
    res.status(200).json(projectList)
  }
}
