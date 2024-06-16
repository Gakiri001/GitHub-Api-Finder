import "./Header.css";
import GithubUser from "../../Pages/GithubUser";
import { useState, useEffect } from "react";

function Header() {
  const [profile, setProfile] = useState("Github")
  const [profileData, setProfileData] = useState(null)
  const [userRepositories, setUserRepositories] = useState([])
  const [userFollowers, setUserFollowers] = useState([])
  const [userFollowing, setUserFollowing] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlechange = (ev) => {
    setProfile(ev.target.value)
  };

  const fetchGitHubData = async (username) => {
    setProfileData(null);
    setUserRepositories([])
    setUserFollowers([])
    setUserFollowing([])
    setError(null)

    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (response.ok) {
        const data = await response.json()
        setProfileData(data)
      } else {
        setError(`Couldn't find the user ${username}`)
      }
    } catch (error) {
      setError(`There was an error fetching the GitHub User data. Please check your internet connection`)
    } finally {
      setLoading(false)
    }

    try {
      setLoading(true)
      const responseRepos = await fetch(`https://api.github.com/users/${username}/repos`)
      if (responseRepos.ok) {
        const dataRepos = await responseRepos.json()
        setUserRepositories(dataRepos)
      } else {
        setError(`Couldn't fetch ${username}'s info`)
      }
    } catch (error) {
      setError(`There was an error fetching ${username}'s Repositories. Please check the internet connection`);
    } finally {
      setLoading(false)
    }

    try {
      setLoading(true)
      const responseFollowers = await fetch(`https://api.github.com/users/${username}/followers`)
      if (responseFollowers.ok) {
        const dataFollowers = await responseFollowers.json()
        setUserFollowers(dataFollowers)
      } else {
        setError(`Couldn't fetch ${username}'s info`)
      }
    } catch (error) {
      setError(`There was an error fetching ${username}'s Followers. Please check the internet connection`)
    } finally {
      setLoading(false)
    }

    try {
      setLoading(true)
      const responseFollowing = await fetch(`https://api.github.com/users/${username}/following`)
      if (responseFollowing.ok) {
        const dataFollowing = await responseFollowing.json()
        setUserFollowing(dataFollowing);
      } else {
        setError(`Couldn't fetch ${username}'s info`)
      }
    } catch (error) {
      setError(`There was an error fetching ${username}'s Following. Please check the internet connection`)
    } finally {
      setLoading(false)
    }
  };

  const handleGitHubSearch = (ev) => {
    ev.preventDefault()
    fetchGitHubData(profile)
  };

  useEffect(() => {
    fetchGitHubData("Github")
  }, []);

  return (
    <>
      <div className="Header">
        <div className="HeaderP1">
          <h2>GITHUB FINDER</h2>
        </div>
        <div className="HeaderP2">
          <p>
            by <span>Julius Gakiri</span>
          </p>
        </div>
        <div className="HeaderP3">
          <input type="text" placeholder="Enter a username" onChange={handlechange} />
          <button onClick={handleGitHubSearch}>Search</button>
        </div>
      </div>
      <div>
        <GithubUser
          profileData={profileData}
          userRepositories={userRepositories}
          loading={loading}
          error={error}
          userFollowers={userFollowers}
          userFollowing={userFollowing}
        />
      </div>
    </>
  );
}

export default Header;
