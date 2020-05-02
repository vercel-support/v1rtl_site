import { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { resolve } from 'path'

const { readdir } = fs

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const postFiles = await readdir(resolve(process.cwd() + '/pages/blog'))

  const postNames: string[] = postFiles.filter((page: string) => page !== 'index.tsx')

  const posts = []

  for (const post of postNames) {
    const mod = await import(`../blog/${post}`)

    posts.push({ ...mod, link: post.slice(0, post.indexOf('.')) })
  }

  res.status(200).json(posts)
}
