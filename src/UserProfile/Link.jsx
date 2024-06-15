import React from 'react'

function Link({UserLinkGit}) {
  return (
    <div>
      <a href={UserLinkGit} target='_blank'>
        <button>View on Github</button>
      </a>
    </div>
  )
}

export default Link