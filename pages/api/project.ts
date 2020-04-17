import { websites } from './projects'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const site = websites.find((w) => w.screenshot === req.query.name)

  if (site) {
    res.status(200).json(site)
  } else {
    res.status(404).send('Not found')
  }
}
