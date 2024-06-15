import React from 'react';

function Pic({ Userpic, alt }) {
  return (
    <div>
      <img src={Userpic} alt={alt} style={{width: '160px', borderRadius: '50%'}} />
    </div>
  );
}

export default Pic;
