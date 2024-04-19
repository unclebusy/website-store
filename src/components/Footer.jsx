import { useState, useEffect } from 'react';

function Footer() {
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
        <footer className={`page-footer green darken-3 ${isHidden ? 'hide' : ''}`}>
          <div className="footer-copyright">
            <div className="container">
              © 2014 All rights reserved
              <a className="grey-text text-lighten-4 right" href="https://github.com/unclebusy/website-shop">This project on my Github</a>
            </div>
          </div>
        </footer>
  );
}

export default Footer;

