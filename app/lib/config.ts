/**
 * ## config
 *
 * * The configuration for the application
 * * and all of the variables
 *
 * If the `env` contain the `NEXT_PUBLIC` its reflect that the
 * environment variables is publicly accessible from the browser
 *
 * !NOTE: Don't store the critical information on public environments varibales
 */
export const config = {
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST || 'http://localhost:3000',
  },
  hashnode: {
    host: process.env.HASHNODE_HOST!,
    token: process.env.HASHNODE_TOKEN!,
  },
  google: {
    analytics: {
      id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!,
    },
  },
}
