import React from "react";

import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"

import AboutSection from "../components/aboutSection"
import ProjectSection from "../components/projectSection"
import CraftSection from "../components/craftSection"

import {useImgQ} from "../hooks/imgQueries"
// import Img from 'gatsby-image'


import "../sass/main.scss"


const IndexPage = () => {
  const {me, sky, water} = useImgQ()
  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home"/>

      <main id ="indexContainer" className="contanier">
        <section id="craftContainer" className="craft">
          {/* <Img  style={{
              height: `100vh`,
              width: `100vw`,
              backgroundColor: `transparent`,
              backgroundSize: `cover`,
              backgroundPosition: `center center`,
              display: `flex`,
              alignItems: `center`,
          }}
          fluid={sky.childImageSharp.fluid} /> */}
          <CraftSection sky={sky}/>
        </section>
        
        <section id="aboutContainer" className="about">
          <AboutSection me={me}/>
        </section>

        <section id="portfolioContainer" className="portfolio">
          <ProjectSection water={water}/>
        </section>

      </main>

    </Layout>
  )
}


export default IndexPage