import '../styles/globals.css'
import { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'

function MyApp({ Component, pageProps }) {

  const [client] = useState(useApollo(pageProps.initialApolloState))
  
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
