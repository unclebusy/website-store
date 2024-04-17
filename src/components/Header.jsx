function Header() {
  return (
    <nav className="page-header green lighten-3">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Website Shop</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="https://github.com/unclebusy/website-shop">This project on my Github</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;