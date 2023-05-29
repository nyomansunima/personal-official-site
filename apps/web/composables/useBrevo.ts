import { defu } from 'defu'
import { UseFetchOptions } from 'nuxt/app'

/**
 * # useBrevo
 *
 * the brevo client to connect with the
 * brevo API.
 *
 * @param url the url to fething in brevo API
 * @param options
 * @returns AsyncData
 */
export function useBrevo<T>(url: string, options: UseFetchOptions<T> = {}) {
  const baseUrl = `https://api.brevo.com/v3`
  const {
    public: { brevoApiKey }
  } = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: baseUrl,
    key: url,
    headers: {
      'api-key': brevoApiKey
    }
  }
  const params = defu(options, defaults)
  return useFetch(url, params)
}
