// import { Link } from "gatsby";
// import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import React from "react";


// import logo from '../images/logo.png'
import "../sass/main.scss";

const Header = ({siteTitle}) => {
  
  return(
    <header className = "header">
      <AniLink swipe direction="up"to="/">{siteTitle}</AniLink>
      <AniLink fade to="/splash">splash Teaser</AniLink>
      
      <div className="links">
      <AniLink swipe direction="up" className="header header__link" to="/about"> About </AniLink>

      <AniLink swipe direction="down"className="header header__link" to="/contact"> Contact </AniLink>
      
       <AniLink cover className="header header__link" to="/blogs" duration={1}>
          blogs
        </AniLink>
      </div>
    </header>
  )
}

export default Header;