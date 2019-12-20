import React from "react";

// import Canvas from '../components/canvas'
import Splash from '../components/splash'
import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"
import Icon from '../components/icon'

import "../sass/main.scss"


const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home" />
      
      <main id ="container" className="contanier">
      
        <section className="splash">
          <h1 className="splash__text"> Hello worlds. I'm Jerry V. this is my site.</h1>
          <Splash className="canvas"/>
          {/* onclick={() => } for span tag with spring transition */}
          <span className="splash__arrow" >
          <Icon height="100" width="100" viewBox="0 0 1000 1000" fill="white" icon="DownArrow"/>
          </span>
        </section>

        <section className="summary">
        {/*Have backGround image of sky or video or animation */}
          <ul className="svg">

            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(227, 79, 38)" icon="Html"/>
              {/* <h3>Html</h3> */}
            </li>
            
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(21, 114, 182)" icon="Css"/>
            {/* <h3>Css</h3> */}
            </li>

            <li className="svg__icon">
              
              <Icon viewBox="0 0 1024 1024" fill="rgb(247, 223, 30)" icon="Javascript"/>
              {/* <h3>Javascript</h3> */}
            </li>

            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(97, 218, 251)" icon="React"/>
            {/* <h3></h3> */}
            </li>

            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(204, 52, 45)" icon="Ruby"/>
            {/* <h3></h3> */}
            </li>
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(68, 121, 161)" icon="MySQL"/>
            {/* <h3></h3> */}
            </li>
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(118, 74, 188)" icon="Redux"/>
            {/* <h3></h3> */}
            </li>
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(55, 118, 171)" icon="Python"/>
            </li>
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(51, 103, 145)" icon="PostGres"/>
            </li>
            <li className="svg__icon">
              <Icon viewBox="0 0 1024 1024" fill="rgb(225, 0, 152)" icon="Graphql"/>
            </li>
            
          </ul>
          <div className="summary__description" >
            <h2 className="heading-1">
              summary
            </h2>
            <p>
              Hello! My name is Jerry Velazquez and I'm a full stack developer. I make full stack web applications and use a vary of technologies. Before this working as a developer I was working in live audio engineer for venues in NYC... I made my living that way as well as other odd job. Throughout my journey as a New Yorker I wore many hats and found that I was very adaptable to different jobs. write more here or make it consice!
            </p>
          </div>
        </section>



      <section className="portfolio">
        <h2>Project</h2>

        <ul className="projects">
          <li className="project"></li>
        </ul>
      </section>
      </main>

    </Layout>
  )
}

export default IndexPage
