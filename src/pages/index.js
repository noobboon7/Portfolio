import React from "react";

// import Canvas from '../components/canvas'
// import Splash from '../components/splash'
import Layout from "../components/layout"
import Head from '../components/head'
import SEO from "../components/seo"
import Icon from '../components/icon'
import Card from '../components/projectCard'

import "../sass/main.scss"


const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home" />
      
      <main id ="indexContainer" className="contanier">
                          {/* change classname to 'about' */}
        <section id="aboutContainer" className="summary">
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



      <section id="portfolioContainer" className="portfolio">
        <div className="projects">

          <h2 className="projects__title projects__title--animated">Projects</h2>

          <div className="projects__gallery">

            <Card num="1" 
            name="Budget Buddy" 
            stack="React + redux + Ruby on Rails " 
            />
            
            <Card num="2" 
            name="Nexter" 
            stack="HTML + CSS" 
            />
            
            <Card num="3"
            name="N/A" 
            stack="React + redux + Ruby on Rails " 
            />
            
          </div>
        </div>
      </section>

      </main>

    </Layout>
  )
}

export default IndexPage
