import {
  createConnectionInstance,
  createLocalConnectionInstance,
} from './connection-instance'

const LOCAL_DATA_FOLDER_PATH = '/data/'
const GITHUB_REPO_DATA_URL =
  'https://raw.githubusercontent.com/nyomansunima/personal-official-site/refs/heads/main/data/'

export const githubDataClient = createConnectionInstance(GITHUB_REPO_DATA_URL)
export const localDataClient = createLocalConnectionInstance(
  LOCAL_DATA_FOLDER_PATH,
)
