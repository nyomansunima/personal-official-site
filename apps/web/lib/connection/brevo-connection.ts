import axios from 'axios'

const isBrowser = typeof window !== 'undefined'

/**
 * # brevoClient
 *
 * the client library to
 * access the brevo connection includig add contact, send email transaction
 * email campaign, and other things
 */
const brevoClient = axios.create({
  baseURL: 'https://api.brevo.com/v3',
  timeout: 5000,
})

// adding some default header
brevoClient.defaults.headers.common['api-key'] = isBrowser
  ? process.env.NEXT_PUBLIC_BREVO_API_KEY
  : process.env.BREVO_API_KEY

export default brevoClient
