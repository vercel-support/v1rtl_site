import { ProjectProps } from '../components/ProjectList'

export const websites: ProjectProps[] = [
  {
    stack: ['Go', 'Next.js', 'React', 'Rebass', 'Emotion', 'GraphQL', 'Apollo'],
    desc: 'Ad-free open-source secure social network',
    link: 'https://komfy.now.sh/',
    status: '5% Completed',
    title: 'Komfy',
    screenshot: 'komfy',
    teamProject: true,
    longDesc:
      'Komfy is an ad-free social network without tracking, focused on users rather than businesses. The main goals are simplicity, usability and privacy. The project is developed by a team of hobby developers.'
  },
  {
    stack: ['Next.js', 'PostCSS', 'React', 'styled-jsx'],
    title: 'ProtestWiki',
    desc: 'Russian opposition wiki',
    status: '80% Completed',
    link: 'http://provalwiki.online',
    screenshot: 'provalwiki',
    teamProject: true
  },
  {
    stack: ['Next.js', 'Rebass', 'Emotion', 'TypeScript', 'Contentful'],
    title: 'Proctolog',
    desc: 'Doctor personal site',
    status: 'Completed',
    link: 'https://isachkov.com',
    screenshot: 'proctolog'
  },
  {
    stack: ['Next.js', 'PostCSS'],
    title: 'Tech design',
    desc: 'Design classes for children',
    status: 'Completed',
    link: 'https://techmedia-protvino.now.sh/',
    screenshot: 'tech_design'
  }
]

export const tools: ProjectProps[] = [
  {
    stack: ['Go', 'tinygo'],
    desc: 'Write frontend apps with Go',
    status: 'Completed',
    link: 'https://github.com/talentlessguy/go-web-app',
    title: 'go-web-app'
  },
  {
    stack: ['Node.js'],
    title: 'SimpleDDoS',
    desc: 'Multi-threaded DDoS script',
    status: 'Completed',
    link: 'https://github.com/talentlessguy/simple-ddos'
  },
  {
    stack: ['TypeScript', 'Jest'],
    title: 'multiple-fetch',
    status: '90% Completed',
    link: 'https://github.com/talentlessguy/multiple-fetch',
    desc: 'Fetch multiple resources using one function'
  }
]
