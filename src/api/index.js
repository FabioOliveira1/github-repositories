import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  timeout: 30 * 1000,
  headers: {
    'content-type': 'application/json'
  }
})

export const getUserPublicRepositories = username => client.get(`/users/${username}/repos`)

// export const checkIfUserStarred = repoPath => client.get(`/user/starred/${repoPath}`)

// export const starRepository = repoPath => client.put(`/user/starred/${repoPath}`)

// export const getUserIdentity = (params = {}) => client.get(`${process.env.REACT_APP_GITHUB_URL}/login/oauth/authorize`, { params })
