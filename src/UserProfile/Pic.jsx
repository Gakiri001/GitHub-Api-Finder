import React from 'react';
import "../Pages/GithubUser.css"

function Pic({ Userpic, alt }) {
  return (
    <div>
      <img className='Userpic' src={Userpic} alt={alt} />
    </div>
  );
}

export default Pic;
