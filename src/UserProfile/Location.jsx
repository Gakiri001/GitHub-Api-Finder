import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Location({UserLocation}) {
  return (
    <div>
      <p><FaLocationDot/> {UserLocation} Location</p>
    </div>
  )
}

export default Location