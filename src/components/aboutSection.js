import React from 'react'
import Icon from './icon'

const AboutSection = () => (
  <section id="aboutContainer" className="about">
  {/*Have backGround image of sky or video or animation */}
    <h2 className="about__heading heading-1">
      About
    </h2>

    <div className="about__badges ">
      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(225, 0, 152)" icon="HTTP" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">HTTP and REST</h3>

        <p className="about__badge-description">Obtain data, or generate operations throught HTTP. Allow Backend to understand the Frontend.</p>
      </div>
      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(225, 0, 152)" icon="Database" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">Databases and Web Storage</h3>

        <p className="about__badge-description">Catch memory storage, relational databases</p>
      </div>
      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(225, 0, 152)" icon="Git" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">Git Version Control</h3>

        <p className="about__badge-description">Obtain data, or generate operations throught HTTP. Allow Backend to understand the Frontend.</p>
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