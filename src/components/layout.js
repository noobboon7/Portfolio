import React from "react"

import {useSiteMetadata} from '../hooks/siteMetadata';

import Header from "./header";
import Footer from "./footer";
// import "../sass/layouts/_layout.scss";
import "../sass/main.scss";


const Layout = (props) => {
  const {title} = useSiteMetadata()

  return (
    <div className = "layout">
      {/* <Header siteTitle={title}/> */}
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
