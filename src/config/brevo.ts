import { configuration } from './setting'

interface BrevoConnectionOption extends RequestInit {
  body?: any
}

/**
 * Api connection to the brevo client
 * allow to add contact and subsribe to newsletter
 *
 * @param url the access url
 * @param options the fetching option
 * @returns {T | null}
 */
export async function brevoConnection<T extends any>(
  url: string,
  options?: BrevoConnectionOption,
): Promise<T | null> {
  const accessURL = `${configuration.brevo.url}${url}`

  const defaultOptions: RequestInit = {
    headers: {
      'api-key': configuration.brevo.apiKey,
      accept: 'application/json',
      'content-type': 'application/json',
    },
    cache: 'no-cache',
  }

  try {
    const res = await fetch(accessURL, {
      ...options,
      ...defaultOptions,
      body: options?.body ? JSON.stringify(options.body) : undefined,
    })

    if (res.ok) {
      try {
        const payload = await res.json()
        return payload
      } catch {
        return null
      }
    } else {
      throw await res.json()
    }
  } catch (error) {
    throw error
  }
}
