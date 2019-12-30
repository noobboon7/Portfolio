import React from "react";

import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"

import AboutSection from "../components/aboutSection"
import ProjectSection from "../components/projectSection"
import CraftSection from "../components/craftSection"

import "../sass/main.scss"


const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home"/>

      <main id ="indexContainer" className="contanier">

        <section id="craftContainer" className="craft">
          <CraftSection/>
        </section>
        
        <section id="aboutContainer" className="about">
          <AboutSection/>
        </section>

        <section id="portfolioContainer" className="portfolio">
          <ProjectSection/>
        </section>

      </main>

    </Layout>
  )
}


export default IndexPage