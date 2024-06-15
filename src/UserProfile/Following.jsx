import React from 'react'
import { IoIosPeople } from "react-icons/io";

function Following({UserFollowing}) {
  return (
    <div>
      <p> <IoIosPeople/>  {UserFollowing} Following</p>
    </div>
  )
}

export default Following