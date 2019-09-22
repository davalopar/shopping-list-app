import { InMemoryCache } from 'apollo-cache-inmemory'
const GRAPHQL_ENDPOINT = 'localhost:4000/graphql'
export default (context) => {
  return {
    httpLinkOptions: {
      uri: `http://${GRAPHQL_ENDPOINT}`,
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null // disable ws for now
  }
}
