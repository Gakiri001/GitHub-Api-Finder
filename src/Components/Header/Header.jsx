import "./Header.css";
import GithubUser from "../../Pages/GithubUser";
import { useState } from "react";

function Header() {
  const[profile, setProfile] = useState("Github")
  const[profileData, setProfileData] = useState(null)
  const [userRepositories, setUserRepositories] = useState([])
  const [userFollowers, setUserFollowers] = useState([])
  const [userFollowing, setUserFollowing] = useState([])
  const[error, setError] = useState(false)
  const[loading, setLoading] = useState(false)

  const handlechange = (ev) =>{
    setProfile(ev.target.value)
  }

  const handleGitHubSearch = async (ev) => {
    ev.preventDefault()
    console.log("Github Search")
    setProfileData(null)
    setUserRepositories([])
    setUserFollowers([])
    setUserFollowing([])
    setError(null)
  
  try{
    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${profile}`)
    console.log(response)
    if(response.ok === true){
      const data = await response.json();
      console.log(data)
      setProfileData(data)
      setLoading(false)
    }
    else{
      setError(`Couldn't find the user ${profile}`)
      setLoading(false)
    }
  }
  catch(error){
    setError(`There was an error fetching the GitHub User data. Please check your internet connection`)
  }
  finally{
    setLoading(false)
  }

  try{
    setLoading(true)
    const responseRepos = await fetch(`https://api.github.com/users/${profile}/repos`)
    console.log(responseRepos)
    if(responseRepos.ok === true){
      const dataRepos = await responseRepos.json()
      console.log(dataRepos)
      setUserRepositories(dataRepos)
      setLoading(false)
    }
    else{
      setError(`couldn't fetch ${profile}'s Repositories`)
      setLoading(false)
    }
  }
  catch(error){
    setError(`There was an error fetching ${profile} Repositories. Please check the internet connection`)
  }
  finally{
    setLoading(false)
  }

  try{
    setLoading(true)
    const reponseFollowers = await fetch(`https://api.github.com/users/${profile}/followers`)
    console.log(reponseFollowers)
    if(reponseFollowers.ok === true){
      const dataFollowers = await reponseFollowers.json()
      console.log(dataFollowers)
      setUserFollowers(dataFollowers)
      setLoading(false)
    }
    else{
      setError(`Couldn't fetch ${profile}'s followers`)
    }
  }
  catch(error){
    setError(`There was an error fetching ${profile}'s Followers. Please check the internet connection`)
  }
  finally{
    setLoading(false)
  }
  try{
    setLoading(true)
    const responseFollowing = await fetch(`https://api.github.com/users/${profile}/following`)
    console.log(responseFollowing)
    if(responseFollowing.ok === true){
      const dataFolowing = await responseFollowing.json()
      console.log(dataFolowing)
      setUserFollowing(dataFolowing)
      setLoading(false)
    }
    else{
      setError(`Couldn't fetch ${profile}'s following`)
    }

  }
  catch(error){
    setError(`There was an error fetching ${profile}'s Following. Please check the internet connection`)
  }
  finally{
    setLoading(false)
  }

}
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
        <button onClick={handleGitHubSearch}>Search {`' ${profile}'`}</button>
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
