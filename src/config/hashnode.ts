import { GraphQLClient } from 'graphql-request'

/**
 * API connection to hashnode backend
 * allow to connect to hashnode blogging platform
 * and get the posts
 */
export const hashnodeConnection = new GraphQLClient('https://gql.hashnode.com')
