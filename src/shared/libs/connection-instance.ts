import fs from 'fs/promises'
import fsPath from 'path'

type FetchRequestInit = Omit<RequestInit, 'body'> & {
  body?: Record<string, any>
}

export async function fetchConnection<T = any>(
  url: string,
  options: FetchRequestInit = {},
): Promise<T> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  }

  const decodeBody = JSON.stringify(options.body)
  const config = {
    ...options,
    body: decodeBody,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  } as RequestInit

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data satisfies T
  } catch (error) {
    console.log(`Something error found cause: ${error}`)
    throw error
  }
}

export async function loadLocalFile<T = any>(path: string): Promise<T> {
  const file = await fs.readFile(fsPath.join(process.cwd(), path), 'utf8')
  const data = JSON.parse(file)

  return data as T
}

export function createConnectionInstance(baseUrl: string) {
  return async (endpoint: string, options: FetchRequestInit = {}) => {
    const url = `${baseUrl}${endpoint}`
    return fetchConnection(url, options)
  }
}

export function createLocalConnectionInstance(path: string) {
  return async (filename: string) => {
    const url = `${path}${filename}`
    return loadLocalFile(url)
  }
}
