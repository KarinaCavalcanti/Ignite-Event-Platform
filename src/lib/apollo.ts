import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otsktg10y001z4e4ni88ww/master',
  cache: new InMemoryCache()
})