export interface Project {
  stack?: string[]
  desc?: string
  title: string
  screenshot?: string
  link: string
  type: 'site' | 'repo' | 'artwork'
}

export const websites: Project[] = [
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
      'Travis CI',
    ],
    link: 'https://komfy.now.sh/',
    title: 'Komfy',
    screenshot: 'komfy',
    desc:
      'Komfy is an ad-free social network without tracking, focused on users rather than businesses. The main goals are simplicity, usability and privacy. It is developed by a small group of hobby developers where I am Project Manager and Frontend Developer.',
  },
  {
    type: 'site',
    stack: ['Next.js', 'PostCSS', 'React', 'styled-jsx', 'Linux', 'REST', 'Trello', 'Ubuntu', 'PostgreSQL', 'Django'],
    title: 'ProtestWiki',
    desc:
      'protest.wiki is a special wiki for collecting and structurizing information about russian opposition, including categories, periods of time, political wings and location. I work as Frontend Developer here.',
    link: 'http://protest.wiki',
    screenshot: 'provalwiki',
  },

  {
    type: 'site',
    stack: ['Next.js', 'Rebass', 'Emotion', 'TypeScript', 'Contentful', 'Figma', 'ZEIT Now'],
    title: 'Proctolog',
    desc: 'Doctor personal site. The whole website is made from scratch, both design and code.',
    link: 'https://isachkov.com',
    screenshot: 'proctolog',
  },
  {
    type: 'site',
    stack: ['Next.js', 'PostCSS', 'ZEIT Now'],
    title: 'Tech design',
    desc: 'Design classes for children',
    link: 'https://techmedia-protvino.now.sh/',
    screenshot: 'tech_design',
  },
  {
    type: 'site',
    stack: ['Next.js', 'THREE', 'react-three-fiber', 'TypeScript', 'Emotion', 'REST'],
    title: 'This website',
    desc: 'The one you are currently watching',
    screenshot: 'v1rtl',
    link: '/#',
  },
  {
    type: 'site',
    stack: ['React', 'Heroku', 'Monaco Editor'],
    title: 'SoloLearn Playground V2',
    desc:
      'Concept of the new playground for SoloLearn. In comparison of current one, it is fast, has auto-suggestions and is less buggy.',
    screenshot: 'sl_v2',
    link: 'https://sl-playground-v2.herokuapp.com/',
  },
]

export type Repo = Omit<Project, 'link'> & {
  primaryLanguage: {
    name: string
    color: string
  }
  stars: number
}

export const repos: Repo[] = [
  {
    title: 'go-web-app',
    primaryLanguage: {
      name: 'Go',
      color: '#00ADD8',
    },
    desc: 'CLI for setting up Go WebAssembly frontend app',
    stars: 132,
    type: 'repo',
    stack: ['Go', 'WebAssembly'],
  },
  {
    title: 'vimlet/bundl-plugins',
    primaryLanguage: {
      name: 'TypeScript',
      color: '#2b7489',
    },
    desc: 'Official plugins for Bundl',
    stars: 2,
    type: 'repo',
    stack: ['TypeScript', 'Jest'],
  },
  {
    title: 'relay-chat/react-link-previewer',
    primaryLanguage: {
      name: 'Go',
      color: '#00ADD8',
    },
    desc: 'Link previews for React',
    type: 'repo',
    stars: 2,
    stack: ['Go', 'TypeScript', 'Rollup', 'React'],
  },
  {
    title: 'simple-ddos',
    type: 'repo',
    primaryLanguage: {
      name: 'JavaScript',
      color: '#f1e05a',
    },
    desc: 'Multi-threaded DDoS script',
    stars: 14,
    stack: ['JavaScript', 'Node.js'],
  },
  {
    title: 'vdom',
    primaryLanguage: {
      name: 'JavaScript',
      color: '#f1e05a',
    },
    desc: 'Simple JavaScript Virtual DOM',
    stars: 9,
    type: 'repo',
    stack: ['JavaScript'],
  },

  {
    title: 'parsec',
    primaryLanguage: {
      name: 'TypeScript',
      color: '#2b7489',
    },
    desc: 'Asynchronous body parser for Node.js',
    stars: 7,
    type: 'repo',
    stack: ['TypeScript', 'Node.js'],
  },
  {
    title: 'f-serv',
    primaryLanguage: {
      name: 'JavaScript',
      color: '#f1e05a',
    },
    desc: 'File explorer working on a server',
    stars: 4,
    type: 'repo',
    stack: ['Node.js'],
  },
  {
    title: 'node_modules_cleaner',
    primaryLanguage: {
      name: 'JavaScript',
      color: '#f1e05a',
    },
    desc: 'Cleans node_modules from non code files.',
    stars: 4,
    type: 'repo',
    stack: ['JavaScript'],
  },
]

interface Artwork extends Project {
  rotate: number
  position: {
    x: number
    y: number
  }
  layer?: number
}

export const artworks: Artwork[] = [
  {
    type: 'artwork',
    title: 'intemporal fault',
    rotate: -1,
    link: 'fault',
    position: {
      x: 100,
      y: 40,
    },
  },
  {
    type: 'artwork',
    layer: 8,
    title: 'UNDERWORLD',
    rotate: 1.5,
    link: 'underworld',
    position: {
      x: -20,
      y: -20,
    },
  },
  {
    type: 'artwork',
    title: 'DIGITAL // WORLDS',
    link: 'digital_worlds',
    rotate: 3,
    position: {
      x: 50,
      y: -100,
    },
  },
  {
    type: 'artwork',
    title: 'G H E T T O',
    link: 'ghetto',
    rotate: -2,
    position: {
      x: 2,
      y: 1,
    },
  },
  {
    type: 'artwork',
    title: 'Finding human',
    link: 'ufo',
    rotate: 1,
    position: {
      x: -10,
      y: -75,
    },
  },
  {
    type: 'artwork',
    title: 't o x i c',
    link: 'toxic',
    rotate: -3,
    position: {
      x: 15,
      y: -100,
    },
  },
]
