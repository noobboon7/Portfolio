import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Splash from '../components/splash'
import Icon from '../components/icon'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SplashPage = () => (
  <Layout>
    <SEO pageTitle="Splash" />
    <section className="splash">
      <h1 className="splash__text"> Hello worlds. I'm Jerry V. this is my site.</h1>
      <Splash />
      <AniLink swipe direction="up" duration={1.5} to="/">
        <span className="splash__arrow" >
          <Icon height="100" width="100" viewBox="0 0 1000 1000" fill="white" icon="DownArrow"/>
        </span>
      </AniLink>
    </section>
  </Layout>
)

export default SplashPage
