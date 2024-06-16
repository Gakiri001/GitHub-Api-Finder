// store.js
import create from 'zustand';

const useGithubStore = create((set) => ({
  profileData: null,
  userRepositories: [],
  userFollowers: [],
  userFollowing: [],
  error: null,
  loading: false,

  fetchGitHubData: async (username) => {
    set({ loading: true, profileData: null, userRepositories: [], userFollowers: [], userFollowing: [], error: null });

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (response.ok) {
        const data = await response.json()
        set({ profileData: data })
      } else {
        set({ error: `Couldn't find the user ${username}` })
      }
    } catch (error) {
      set({ error: `There was an error fetching the GitHub User data. Please check your internet connection` })
    }

    try {
      const responseRepos = await fetch(`https://api.github.com/users/${username}/repos`)
      if (responseRepos.ok) {
        const dataRepos = await responseRepos.json()
        set({ userRepositories: dataRepos })
      } else {
        set({ error: `Couldn't fetch ${username}'s info` })
      }
    } catch (error) {
      set({ error: `There was an error fetching ${username}'s Repositories. Please check the internet connection` })
    }

    try {
      const responseFollowers = await fetch(`https://api.github.com/users/${username}/followers`)
      if (responseFollowers.ok) {
        const dataFollowers = await responseFollowers.json()
        set({ userFollowers: dataFollowers })
      } else {
        set({ error: `Couldn't fetch ${username}'s info` })
      }
    } catch (error) {
      set({ error: `There was an error fetching ${username}'s Followers. Please check the internet connection` })
    }

    try {
      const responseFollowing = await fetch(`https://api.github.com/users/${username}/following`)
      if (responseFollowing.ok) {
        const dataFollowing = await responseFollowing.json()
        set({ userFollowing: dataFollowing, loading: false })
      } else {
        set({ error: `Couldn't fetch ${username}'s info`, loading: false })
      }
    } catch (error) {
      set({ error: `There was an error fetching ${username}'s Following. Please check the internet connection`, loading: false })
    }
  }
}))

export default useGithubStore
