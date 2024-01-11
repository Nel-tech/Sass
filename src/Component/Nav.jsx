import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <h1 className="logo">My Website</h1>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
