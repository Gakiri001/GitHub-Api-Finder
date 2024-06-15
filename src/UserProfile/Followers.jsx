import React from 'react'
import { IoIosPeople } from "react-icons/io";

function Followers({UserFollowers}) {
  return (
    <div>
      <p><IoIosPeople/> {UserFollowers} Followers</p>
    </div>
  )
}

export default Followers