import express from 'express'
const app: express.Express = express()
import { searchTweet, searchNext } from "./twitter/twitter-api";

app.get('/searchTweet', async (req: express.Request, res: express.Response) => {
  const query = req.query['searchText'] as string

  const result = await searchTweet(query)

  res.json(result)
})

app.get('/searchNext', async (req: express.Request, res: express.Response) => {
  const result = await searchNext()

  res.json(result)
})

module.exports = {
  path: '/api',
  handler: app
}
