import React from 'react'
import { MdLink } from "react-icons/md";

function UserFollowing({image,name,linktoFinder}) {
  return (
    <div>
      <img src={image}/>
      <h2>{name}</h2>
      <a href={linktoFinder}>
        <button><MdLink/> view {name}</button>
      </a>
    </div>
  )
}

export default UserFollowing