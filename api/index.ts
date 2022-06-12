const express = require('express')
const app = express()
import { searchTweet, searchNext } from "./twitter/twitter-api";

app.get('/searchTweet', async (req: any, res: any) => {
  const query = req.query.searchText

  const result = await searchTweet(query)

  res.json(result)
})

app.get('/searchNext', async (req: any, res: any) => {
  const result = await searchNext()

  res.json(result)
})

module.exports = {
  path: '/api',
  handler: app
}
