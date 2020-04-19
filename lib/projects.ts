export interface Project {
  stack?: string[]
  desc?: string
  title: string
  screenshot?: string
  longDesc?: string
  link: string
  type: 'site' | 'tool' | 'artwork'
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
    desc: 'Ad-free open-source secure social network',
    link: 'https://komfy.now.sh/',
    title: 'Komfy',
    screenshot: 'komfy',
    longDesc:
      'Komfy is an ad-free social network without tracking, focused on users rather than businesses. The main goals are simplicity, usability and privacy. The project is developed by a team of hobby developers.',
  },
  {
    type: 'site',
    stack: ['Next.js', 'PostCSS', 'React', 'styled-jsx', 'Linux', 'REST', 'Trello'],
    title: 'ProtestWiki',
    desc: 'Russian opposition wiki',
    link: 'http://provalwiki.online',
    screenshot: 'provalwiki',
  },

  {
    type: 'site',
    stack: ['Next.js', 'Rebass', 'Emotion', 'TypeScript', 'Contentful', 'Figma', 'ZEIT Now'],
    title: 'Proctolog',
    desc: 'Doctor personal site',
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
    link: '/',
  },
]

export const tools: Project[] = [
  {
    type: 'tool',
    stack: ['Go', 'WebAssembly'],
    desc: 'Write frontend apps with Go',
    link: 'https://github.com/talentlessguy/go-web-app',
    title: 'go-web-app',
  },
  {
    type: 'tool',
    stack: ['Node.js'],
    title: 'SimpleDDoS',
    desc: 'Multi-threaded DDoS script',
    link: 'https://github.com/talentlessguy/simple-ddos',
  },
  {
    type: 'tool',
    stack: ['TypeScript', 'Jest', 'Rollup'],
    title: 'multiple-fetch',
    link: 'https://github.com/talentlessguy/multiple-fetch',
    desc: 'Fetch multiple resources using one function',
  },
  {
    link: 'https://github.com/relay-chat/react-link-previewer',
    title: 'react-link-previewer',
    desc: 'Link previews for React',
    stack: ['React', 'TypeScript', 'Go', 'Rollup'],
    type: 'tool',
  },
  {
    type: 'tool',
    title: 'node_modules_cleaner',
    desc: 'Cleans node_modules from non code files.',
    link: 'https://github.com/talentlessguy/node_modules_cleaner',
    stack: ['Node.js'],
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
      y: -50,
    },
  },
  {
    type: 'artwork',
    title: 't o x i c',
    link: 'toxic',
    rotate: -3,
    position: {
      x: 15,
      y: -35,
    },
  },
]
