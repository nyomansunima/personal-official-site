import { ClientConfig, createClient } from '@sanity/client'

const isBrowser = typeof window !== undefined

// define the config for sanity
// project can be read from the env file
const config: ClientConfig = {
  projectId: isBrowser
    ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    : process.env.SANITY_PROJECT_ID,
  dataset: isBrowser
    ? process.env.NEXT_PUBLIC_SANITY_DATASET
    : process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: isBrowser
    ? process.env.NEXT_PUBLIC_SANITY_API_VERSION
    : process.env.SANITY_API_VERSION,
}

/**
 * # sanityClient
 *
 * the client of sanity project
 * use to get all data for each content using services
 */
const sanityClient = createClient(config)

export default sanityClient
