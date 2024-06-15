import React from 'react';
import { FaBookBookmark } from "react-icons/fa6";

function Repos({UserRepos}) {
  return (
    <div>
      <p><FaBookBookmark/> {UserRepos} Repositories</p>
    </div>
  )
}

export default Repos