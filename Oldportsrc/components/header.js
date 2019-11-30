import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import headStyles from'./header.module.scss'

const Header = ({ siteTitle }) => (

  <header className={headStyles.header}>
    <h1>
    <Link className={headStyles.title} to='/'>{siteTitle}</Link>
    </h1>
    <ul className={headStyles.navList}>
      <li>
        <Link className={headStyles.navItem}
        activeClassName={headStyles.activeNavItem}
        to="/">Home</Link>
      </li>
      <li>
        <Link className={headStyles.navItem}
        activeClassName={headStyles.activeNavItem}
        to="/contact/">Contact</Link>
      </li>
      <li>
        <Link className={headStyles.navItem}
        activeClassName={headStyles.activeNavItem}
        to="/about/">About</Link>
      </li>
      <li>
        <Link className={headStyles.navItem}
        activeClassName={headStyles.activeNavItem}
        to="/blog/">Blogs</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
