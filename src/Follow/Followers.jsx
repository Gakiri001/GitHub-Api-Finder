import React from 'react'
import { MdLink } from "react-icons/md";

function Followers({image,name,linktoFinder}) {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <a href={linktoFinder}>
        <button><MdLink/> view {name}</button>
      </a>
    </div>
  )
}

export default Followers