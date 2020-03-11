import { ProjectProps } from '../components/ProjectList'

export const websites: ProjectProps[] = [
  {
    stack: ['Next.js', 'PostCSS', 'React', 'styled-jsx'],
    title: 'ProtestWiki',
    desc: 'Russian opposition wiki',
    status: '90% Completed',
    link: 'http://provalwiki.online',
    screenshot: 'provalwiki'
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
    link: '',
    screenshot: ''
  }
]
