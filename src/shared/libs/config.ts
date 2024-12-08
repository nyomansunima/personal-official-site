export const config = {
  isProduction: process.env.NODE_ENV === 'production' || false,
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST || 'http://localhost:3000',
  },
  posthog: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
} as const
