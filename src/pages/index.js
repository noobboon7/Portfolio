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
      <div className="splash">
        <Splash/>
        <h1 className="splash splash__text"> Hi. I'm Jerry Vee. Welcome to my portfolio.</h1>
      </div>



      <div className="blogs">

      </div>
      </main>

    </Layout>
  )
}

export default IndexPage
