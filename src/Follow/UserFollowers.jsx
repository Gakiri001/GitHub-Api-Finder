import React from 'react';
import { MdLink } from "react-icons/md";

function UserFollowers({ image, name, handleGitHubSearch }) {
  return (
    <div className='UserFollowerscard'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={() => handleGitHubSearch(name)}>
        <MdLink /> view {name}
      </button>
    </div>
  );
}

export default UserFollowers;
