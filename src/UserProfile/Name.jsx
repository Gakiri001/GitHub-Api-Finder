import React from 'react'
import "../Pages/GithubUser.css"

function Name({UserName}) {
  return (
    <div>
      <p className='username'>{UserName}</p>
    </div>
  )
}

export default Name