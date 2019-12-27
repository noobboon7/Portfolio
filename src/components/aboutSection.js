import React from 'react'
import Icon from './icon'

const AboutSection = () => (
  <section id="aboutContainer" className="about">
  {/*Have backGround image of sky or video or animation */}
    <h2 className="about__heading heading-1">
      About
    </h2>

    <div className="about__badges">
      <div className="about__badge about__badge--1">

        <div className="about__badges-icon ">
        <Icon viewBox="0 0 1024 1024" fill="rgb(225, 0, 152)" icon="Bubble" width="100" height="100"/>
        </div>

        <h3 className="about__badges-skill">HTTP & REST</h3>

        <p className="about__badges-description">description</p>
      </div>
    </div>

    <div className="about__description" >
      <p>
        Hello! My name is Jerry Velazquez and I'm a full stack developer. I make full stack web applications and use a vary of technologies. Before this working as a developer I was working in live audio engineer for venues in NYC... I made my living that way as well as other odd job. Throughout my journey as a New Yorker I wore many hats and found that I was very adaptable to different jobs. write more here or make it consice!
      </p>
    </div>

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
  </section>

)
  


export default AboutSection;