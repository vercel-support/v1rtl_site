export default [
  {
    text: 'JavaScript',
    value: 1100,
    color: 'js',
    align: 'bottom'
  },
  {
    text: 'React',
    value: 600,
    color: 'react',
    align: 'bottom'
  },
  {
    text: 'Go',
    value: 80,
    color: 'go'
  },
  {
    text: 'Node.js',
    value: 500,
    color: 'node'
  },
  {
    text: 'Sass',
    value: 100,
    color: 'sass'
  },
  {
    text: 'Illustrator',
    color: 'illo',
    value: 100
  },
  {
    text: 'Apollo',
    value: 30,
    color: 'apollo',
    whiteText: true
  },
  {
    text: 'WebAssembly',
    value: 30,
    color: 'wasm'
  },
  {
    text: 'Photoshop',
    value: 150,
    color: 'ps',
    whiteText: true
  },
  {
    text: 'GraphQL',
    value: 35,
    color: 'gql'
  },
  {
    text: 'TypeScript',
    value: 200,
    color: 'ts'
  }
]

export const pickSize = (value: number) => {
  if (value > 800) return value / 20
  if (value > 500) return value / 17
  if (value >= 200) return value / 10
  if (value >= 100) return value / 8
  if (value > 50) return value / 5
  if (value >= 25) return value / 3
  else return value / 4
}
