import React from "react";

import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"

import AboutSection from "../components/aboutSection"
import ProjectSection from "../components/projectSection"
import CraftSection from "../components/craftSection"

import {useImgQ} from "../hooks/imgQueries"
import Img from 'gatsby-image'


import "../sass/main.scss"


const IndexPage = () => {
  const {me, sky, water} = useImgQ()
  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home"/>

      <main id ="indexContainer" className="contanier">
        <section id="craftContainer" className="craft">
        <Img className="craft craft__bg" fluid={sky.childImageSharp.fluid}/>
          <CraftSection />
        </section>
        
        <section id="aboutContainer" className="about">
          <AboutSection me={me}/>
        </section>

        <section id="portfolioContainer" className="portfolio">
          <Img className="portfolio portfolio__bg" fluid={water.childImageSharp.fluid}/>
          <ProjectSection />
        </section>

      </main>

    </Layout>
  )
}


export default IndexPage