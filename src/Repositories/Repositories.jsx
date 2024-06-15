import React from 'react'
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function Repositories({totals, linkToRepo, repotitle,repoDescription, forks, stars}) {
  return (
    <div>
      <a href={linkToRepo} target='_blank'>
        <button>
          <h2>{repotitle}</h2>
          <p>{repoDescription}</p>
          <div>
            <p><FaCodeFork/> {forks} Forks</p>
            <p><FaStar/> {stars} Stars</p>
          </div>
        </button>
      </a>
    </div>
  )
}

export default Repositories