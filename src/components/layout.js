import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer';
import "../styles/layout.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const {author, title} = data.site.siteMetadata
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header siteTitle={title} />
        <main>{children}</main>
      </div>
      <Footer author = {author}/>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
