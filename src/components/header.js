import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

import "../sass/main.scss";

const Header = ({siteTitle}) => {
  
  return(
    <header className = "header">
      <AniLink fade diruration={2} direction="up"to="/">{siteTitle}</AniLink>
      <AniLink fade to="/splash">Splash Teaser</AniLink>
      
      <div className="links">
      <AniLink swipe direction="up" className="header header__link" to="/resume"> Resume </AniLink>

      <AniLink swipe direction="down"className="header header__link" to="/contact"> Contact </AniLink>
      
       <AniLink cover top="entry" className="header header__link" to="/blogs" duration={.5}bg="#723">
          blogs
        </AniLink>
      </div>
    </header>
  )
}

export default Header;