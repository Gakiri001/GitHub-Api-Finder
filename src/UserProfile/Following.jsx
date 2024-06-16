import React from 'react'
import { IoIosPeople } from "react-icons/io";
import "../Pages/GithubUser.css"

function Following({UserFollowing}) {
  return (
    <div>
      <p className='UserFollowing'> <IoIosPeople/>  {UserFollowing} Following</p>
    </div>
  )
}

export default Following