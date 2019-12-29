import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

import "../sass/main.scss";

const Header = ({siteTitle}) => {
  
  return(
    <header className = "header">
      <AniLink fade diruration={2} direction="up"to="/" className="header__link">{siteTitle}</AniLink>
      
      <div className="pages">
      {/* <AniLink swipe direction="up" className="header header__link" to="/resume"> Resume </AniLink>

          <AniLink swipe direction="down"className="header header__link" to="/contact"> Contact </AniLink> */}

        <AniLink fade to="/splash" className="pages__link">Expore the moon</AniLink> 

        <AniLink cover top="entry" className="pages__link" to="/blogs" duration={.5}bg="#723">blogs</AniLink>
      </div>
    </header>
  )
}

export default Header;