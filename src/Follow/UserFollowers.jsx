import React from 'react'
import { MdLink } from "react-icons/md";

function UserFollowers({image,name,linktoFinder}) {
  return (
    <div className='UserFollowerscard'>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <a target='_blank' href={linktoFinder}>
        <button><MdLink/> view {name}</button>
      </a>
    </div>
  )
}

export default UserFollowers;