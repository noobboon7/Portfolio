import React from "react"

import {useSiteMetadata} from '../hooks/siteMetadata';

import Header from "./header";
import Footer from "./footer";
import "../sass/main.scss";


const Layout = ({children}) => {

  const {title} = useSiteMetadata()

  return( 
    <div className="layout">
      <Header siteTitle={title}/>
      {children}
      <Footer siteTitle={title}/>
    </div>
  )
}

export default Layout;
