import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { useMemo } from 'react'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_URI,
      headers: { 
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_KEY
      },  
    }),
    cache: new InMemoryCache(),
  })

}

let apolloClient;

const initializeApollo = (initialState= null) => {

  const _apolloClient = apolloClient ?? createApolloClient()

  // if your page has Nextjs data ffetching methods that use Apollo Client, the initial state gets hydrated here

  if(initialState) {
    // gets existing cache loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // restore the existing cache into data passed from gSp/gSSp
    _apolloClient.cache.restore({
      ...existingCache,
      ...initialState
    })
  }

    // if the mode is SSR
    if (typeof window == 'undefined') return _apolloClient

    // create client once on the frontend
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}


export const useApollo = (initialState) => {
  const store = useMemo(()=> initializeApollo(initialState), [initialState])
  // console.log(store)
  return store
}

export default initializeApollo