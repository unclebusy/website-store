import React from 'react';
import useScrollHide from "../hooks/useScrollHide";

function Header() {
  const isHidden = useScrollHide();

  return (
      <nav className={`page-header green darken-3 ${isHidden ? 'hide' : ''}`}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Website Shop</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="https://github.com/unclebusy/website-shop">This project on my Github</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default Header;
