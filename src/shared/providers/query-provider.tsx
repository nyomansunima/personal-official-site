'use client'

import * as React from 'react'
import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryProviderProps {
  children: React.ReactNode
}

let browserQueryClient: QueryClient | undefined = undefined

export function createInitialQueryClient(): QueryClient {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  })

  return queryClient
}

export function initQueryClient(): QueryClient {
  if (isServer) {
    return createInitialQueryClient()
  } else {
    if (!browserQueryClient) {
      browserQueryClient = createInitialQueryClient()
    }

    return browserQueryClient
  }
}

export function QueryProvider({
  children,
}: Readonly<QueryProviderProps>): React.ReactElement {
  const queryClient = initQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
