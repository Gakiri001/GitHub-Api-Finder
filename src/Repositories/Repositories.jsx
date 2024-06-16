import React from 'react'
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import "../Pages/GithubUser.css"

function Repositories({linkToRepo, repotitle,repoDescription, forks, stars}) {
  return (
    <div className='RepositoriesWrapper'>
        <div className='Repositories'>
      <a href={linkToRepo} target='_blank'>
        <button>
          <h2>{repotitle}</h2>
          <p className='repoDescription'>{repoDescription}</p>
          <div className='forksStars'>
            <p><FaCodeFork/> {forks} Forks</p>
            <p><FaStar/> {stars} Stars</p>
          </div>
        </button>
      </a>
    </div>
    </div>

  )
}

export default Repositories