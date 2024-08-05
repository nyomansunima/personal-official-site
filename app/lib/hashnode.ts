import { config } from './config'

interface HashnodeRequest {
  query: string
  variables: Record<string, any>
}

/**
 * ## hashnodeClient
 *
 * Hashnode specific configuration for fetching and mutate data
 * combine with the graphql request
 *
 * @param req the hashnode request opject
 * @returns {Promise<T>}
 */
export async function hashnodeClient<T extends any>(
  req: HashnodeRequest,
  options?: RequestInit,
): Promise<T> {
  const url = `https://gql.hashnode.com`

  // default request options before merged
  const defaultOptions: RequestInit = {
    headers: {
      Authorization: `${config.hashnode.token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(req),
  }

  // merged option from the default one with the request
  // allow to combine the options
  const mergedOptions = {
    ...options,
    ...defaultOptions,
  }

  const res = await fetch(url, mergedOptions)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })

  return res
}
