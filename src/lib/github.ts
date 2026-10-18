import axios from 'axios'

export const GITHUB_REPOSITORY = 'LumiDesk/verifin'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10_000,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

export interface GitHubReleaseAsset {
  name: string
  browser_download_url: string
  size: number
  content_type: string
}

export interface GitHubRelease {
  tag_name: string
  name: string
  body: string
  html_url: string
  published_at: string
  prerelease: boolean
  draft: boolean
  assets: GitHubReleaseAsset[]
}

export async function getLatestRelease(): Promise<GitHubRelease> {
  const { data } = await githubApi.get<GitHubRelease>(`/repos/${GITHUB_REPOSITORY}/releases/latest`)

  return data
}
