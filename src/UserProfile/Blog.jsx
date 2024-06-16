import React from 'react'
import "../Pages/GithubUser.css"

function Blog({userBlog}) {
  return (
    <div>
      <p className='userBlog'>{userBlog}</p>
      </div>
  )
}

export default Blog