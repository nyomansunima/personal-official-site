/**
 * The configuration for the application
 * and all of the variables
 */
export const configuration = {
  hygraph: {
    url: process.env.NEXT_PUBLIC_HYGRAPH_URL!,
  },
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST!,
  },
}
