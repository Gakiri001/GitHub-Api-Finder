import React from 'react'
import { PiBuildingApartmentFill } from "react-icons/pi";
import "../Pages/GithubUser.css"

function Company({UserCompany}) {
  return (
    <div>
      <p className='UserCompany'><PiBuildingApartmentFill/> {UserCompany}</p>
      </div>
  )
}

export default Company