import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "../Pages/GithubUser.css"

function Location({UserLocation}) {
  return (
    <div>
      <p className='UserLocation'><FaLocationDot/> {UserLocation} Location</p>
    </div>
  )
}

export default Location