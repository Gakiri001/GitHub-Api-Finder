import React from 'react';
import { FaBookBookmark } from "react-icons/fa6";
import "../Pages/GithubUser.css"

function Repos({UserRepos}) {
  return (
    <div>
      <p className='UserRepos'><FaBookBookmark/> {UserRepos} Repositories</p>
    </div>
  )
}

export default Repos