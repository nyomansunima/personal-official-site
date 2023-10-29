import { GraphQLClient } from 'graphql-request'
import { configuration } from './setting'

/**
 * Api connection to the hygraph cms
 * allow to connect and consume all of the
 * content and data from hygraph
 *
 * @returns {GraphQLClient}
 */
export const hygraphConnection = new GraphQLClient(
  configuration.hygraph.url,
  {},
)
