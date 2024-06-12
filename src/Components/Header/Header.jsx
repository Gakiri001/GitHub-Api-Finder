import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderP1">
        <h2>GITHUB FINDER</h2>
      </div>
      <div className="HeaderP2">
        <p>
          by <span>Julius Gakiri</span>
        </p>
      </div>
      <div className="HeaderP3">
        <input type="text" placeholder="Enter a username" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
