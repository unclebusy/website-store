import React from 'react';
import useScrollHide from "../hooks/useScrollHide";

function Footer() {
  const isHidden = useScrollHide();

  return (
      <footer className={`page-footer green darken-3 ${isHidden ? 'hide' : ''}`}>
        <div className="footer-copyright">
          <div className="container">
            © 2024 All rights reserved
          </div>
        </div>
      </footer>
  );
}

export default Footer;
