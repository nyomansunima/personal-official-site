import axios from 'axios'

const isBrowser = typeof window !== undefined

/**
 * # hashNodeClient
 *
 * connection to the hashnode
 * platform using api to get all content user
 */
const hashNodeClient = axios.create({
  baseURL: isBrowser
    ? process.env.HASHNODE_API_URL
    : process.env.NEXT_PUBLIC_HASNODE_API_URL,
  timeout: 5000,
  transformResponse: [
    (res) => {
      return JSON.parse(res).data
    },
  ],
})
hashNodeClient.defaults.headers.common['Authorization'] = isBrowser
  ? process.env.HASHNODE_PERSONAL_ACCESS_TOKEN
  : process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN

export default hashNodeClient
