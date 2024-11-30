import fs from 'fs/promises'
import fsPath from 'path'

type FetchRequestInit = Omit<RequestInit, 'body'> & {
  body?: Record<string, any>
  parser?: 'json' | 'text' | 'blob'
}

type LoadLocalOptions = {
  parser?: 'json' | 'text'
}

export async function fetchConnection<T = any>(
  url: string,
  options: FetchRequestInit,
): Promise<T> {
  const { parser } = options
  let data: any

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

    switch (parser) {
      case 'json':
        data = await response.json()
        break
      case 'text':
        data = await response.text()
        break
      default:
        data = await response.blob()
    }

    return data as T
  } catch (error) {
    console.log(`Something error found cause: ${error}`)
    throw error
  }
}

export async function loadLocalFile<T = any>(
  path: string,
  options: LoadLocalOptions,
): Promise<T> {
  const { parser } = options
  let data: any

  const file = await fs.readFile(fsPath.join(process.cwd(), path), 'utf8')

  switch (parser) {
    case 'json':
      data = data = JSON.parse(file)
      break
    case 'text':
      data = file
      break
  }

  return data as T
}

export function createConnectionInstance(baseUrl: string) {
  return async (
    endpoint: string,
    options: FetchRequestInit = {
      parser: 'json',
    },
  ) => {
    const url = `${baseUrl}${endpoint}`
    return fetchConnection(url, options)
  }
}

export function createLocalConnectionInstance(path: string) {
  return async (
    filename: string,
    options: LoadLocalOptions = {
      parser: 'json',
    },
  ) => {
    const url = `${path}${filename}`
    return loadLocalFile(url, options)
  }
}
