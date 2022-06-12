import {TwitterApi} from 'twitter-api-v2';
import keys from "../../../env"
const client = new TwitterApi(keys.API_KEY);
let query: string | undefined = undefined
let nextToken: string | undefined = undefined

export const searchTweet = async (searchText: string) => {
  const result = await client.v2.search(searchText, {max_results: 10})
  query = searchText
  nextToken = result.data.meta.next_token
  return result.data.data
}

export const searchNext = async () => {
  if (!nextToken || !query) return
  const result = await client.v2.search(query, {next_token: nextToken})
  nextToken = result.data.meta.next_token
  return result.data.data
}
