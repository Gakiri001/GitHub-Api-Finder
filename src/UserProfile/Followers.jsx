import React from 'react'
import { IoIosPeople } from "react-icons/io";
import "../Pages/GithubUser.css"

function Followers({UserFollowers}) {
  return (
    <div>
      <p className='UserFollowers'><IoIosPeople/> {UserFollowers} Followers</p>
    </div>
  )
}

export default Followers