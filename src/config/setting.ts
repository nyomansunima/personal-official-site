/**
 * The configuration for the application
 * and all of the variables
 */
export const config = {
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST || 'http://localhost:3000',
  },
  google: {
    analytics: {
      id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!,
    },
  },
}
