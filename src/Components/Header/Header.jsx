import "./Header.css"
import GithubUser from "../../Pages/GithubUser"
import { useEffect, useState } from "react"
import useGithubStore from "../../store"

function Header() {
  const [profile, setProfile] = useState("Github")
  const { fetchGitHubData } = useGithubStore()

  const handlechange = (ev) => {
    setProfile(ev.target.value)
  }

  const handleGitHubSearch = (ev) => {
    ev.preventDefault()
    fetchGitHubData(profile)
  }

  useEffect(() => {
    fetchGitHubData("Github")
  }, [fetchGitHubData])

  return (
    <>
      <div className="Header">
        <div className="HeaderP1">
          <h2>GITHUB FINDER</h2>
        </div>
        <div className="HeaderP2">
          <a target="_blank" onClick={() => handleGitHubSearch(`Gakiri001`)}>
            by <span>Julius Gakiri</span>
          </a>
        </div>
        <div className="HeaderP3">
          <input type="text" placeholder="Enter a username" onChange={handlechange} />
          <button onClick={handleGitHubSearch}>Search</button>
        </div>
      </div>
      <div>
        <GithubUser />
      </div>
    </>
  )
}

export default Header
