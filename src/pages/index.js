import React from "react";
// import Canvas from '../components/canvas'
import Splash from '../components/splash'


import "../sass/main.scss"

import Layout from "../components/layout"
// import Image from "../components/image"
import Head from '../components/head'
import SEO from "../components/seo"

const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home" />
      <main id ="container" className="contanier">
      <section className="splash">
        <Splash/>
        <h1 className="splash__text"> Hey. I'm Jerry V. this is my site.</h1>
      </section>
      <section className="summary">

      </section>



      {/* <div className="blogs">

      </div> */}
      </main>

    </Layout>
  )
}

export default IndexPage
