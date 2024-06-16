import React from 'react';
import "../Pages/GithubUser.css"

function Pic({ Userpic, alt }) {
  return (
    <div>
      <img src={Userpic} alt={alt} />
    </div>
  );
}

export default Pic;
