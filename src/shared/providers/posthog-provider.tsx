'use client'

import * as React from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import config from '@shared/libs/config'

interface PosthogProviderProps {
  children: React.ReactNode
}

if (typeof window !== 'undefined') {
  posthog.init(config.posthog.key, {
    person_profiles: 'identified_only',
    ui_host: 'https://us.posthog.com',
  })
}

export function PosthogProvider({
  children,
}: PosthogProviderProps): React.ReactElement {
  React.useEffect(() => {
    posthog.capture('$pageview')
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
