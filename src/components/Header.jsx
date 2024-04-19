import React, { useState, useEffect } from 'react';

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

export default Header
