import React from 'react'
import "../Pages/GithubUser.css"

function Gitname({UserGitname}) {
  return (
    <div>
      <p className='UserGitname'>{UserGitname}</p>
    </div>
  )
}

export default Gitname