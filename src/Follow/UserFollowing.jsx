import React from 'react';
import { MdLink } from "react-icons/md";

function UserFollowing({ image, name, handleGitHubSearch }) {
  return (
    <div className='UserFollowingcard'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={() => handleGitHubSearch(name)}>
        <MdLink /> view {name}
      </button>
    </div>
  );
}

export default UserFollowing;
