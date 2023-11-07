"use client"

import { PropsWithChildren } from "react"
import { Amplify } from 'aws-amplify'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Authenticator } from "@aws-amplify/ui-react"


import config from '../aws-exports'

Amplify.configure(config)

const client = new QueryClient()

const Providers = ({ children } : PropsWithChildren) => {
  return (
    <QueryClientProvider client={client}>
      <Authenticator>
        {children}
      </Authenticator>
    </QueryClientProvider>
  )
}

export default Providers
