// define the connection into

import axios from 'axios'

/**
 * # hashNodeClient
 *
 * connection to the hashnode
 * platform using api to get all content user
 */
const hashNodeClient = axios.create({
  baseURL: process.env.HASHNODE_API_URL,
  timeout: 5000,
  transformResponse: [
    (res) => {
      return JSON.parse(res).data
    },
  ],
})
hashNodeClient.defaults.headers.common['Authorization'] =
  process.env.HASHNODE_PERSONAL_ACCESS_TOKEN

export default hashNodeClient
