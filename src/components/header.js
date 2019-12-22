import { Link } from "gatsby";
import React from "react";


import logo from '../images/logo.png'
import "../sass/main.scss";

const Header = (props) => {

  return(
    <header className = "header">
      <Link to="/"><img className="header header__logo" src={logo} alt="logo"/></Link>
      
      <div className="links">
      <Link className="header header__link" to="/about"> About </Link>
      <Link className="header header__link" to="/contact"> Contact </Link>
      <Link className="header header__link" to="/blogs"> Blogs </Link>
      </div>
    </header>
  )
}

export default Header;