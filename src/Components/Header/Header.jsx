import "./Header.css";
import GithubUser from "../../Pages/GithubUser";
import { useState } from "react";

function Header() {
  const[profile, setProfile] = useState("Github")
  const[profileData, setProfileData] = useState(null)
  const[error, setError] = useState(false)
  const[loading, setLoading] = useState(false)

  const handlechange = (ev) =>{
    setProfile(ev.target.value)
  }

  const handleGitHubSearch = async (ev) => {
    ev.preventDefault()
    console.log("Github Search")
    setProfileData(null)
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
         loading={loading}
         error={error}
         />
     </div>
     </>
  );
}

export default Header;
