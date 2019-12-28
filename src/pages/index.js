import React from "react";

import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"
import AboutSection from "../components/aboutSection"
import ProjectSection from "../components/projectSection"


import "../sass/main.scss"


const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home"/>

      <main id ="indexContainer" className="contanier">

        <AboutSection/>

        <section id="portfolioContainer" className="portfolio">
          <ProjectSection/>
        </section>

      </main>

    </Layout>
  )
}

export default IndexPage
