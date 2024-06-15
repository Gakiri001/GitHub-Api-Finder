import React from 'react'
import { PiBuildingApartmentFill } from "react-icons/pi";

function Company({UserCompany}) {
  return (
    <div>
      <p><PiBuildingApartmentFill/> {UserCompany}</p>
      </div>
  )
}

export default Company