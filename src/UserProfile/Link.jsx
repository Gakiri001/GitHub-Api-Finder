import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function Link({UserLinkGit}) {
  return (
    <div>
      <a href={UserLinkGit} target='_blank'>
        <button className='UserLinkGit'><FaExternalLinkAlt/> View on Github</button>
      </a>
    </div>
  )
}

export default Link