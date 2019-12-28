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
            <Icon viewBox="0 0 1024 1024" fill="#fff" icon="HTTP" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">HTTP and REST</h3>

        <p className="about__badge-description">obtain data from API's and create new information w/ RESTFUL routing</p>
      </div>
      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(225, 255, 255)" icon="Database" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">Databases and Web Storage</h3>

        <p className="about__badge-description">Knowledge of various DBMS and caching mechanisms to improve UX</p>
      </div>
      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(240, 80, 50)" icon="Git" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">Git Version Control</h3>

        <p className="about__badge-description">Logging stable project versions to ensure a great build for production. </p>
      </div>

      <div className="about__badge-container ">

        <div className="about__badge-background-icon ">
          <span className="about__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(240, 80, 50)" icon="Tools" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="about__badge-skill">Web Architecture</h3>

        <p className="about__badge-description">Understand the application logic between the client and the server.</p>
      </div>

    </div>

    <div className="about__description" >

      <div class="hexa">
        <div class="hex1">
          <div class="hex2">
            <div className="about__description-photo">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="about__description-media">
        {/* fix media links  */}
        <a href="https://medium.com/@jvr572" rel="noopener noreferrer" target="_blank">
          <Icon viewBox="0 0 1024 1024" fill="rgb(0, 0, 0)" width="100%" height="100%" icon="Medium"/>
        </a>
        <a href="https://github.com/noobboon7" rel="noopener noreferrer" target="_blank">
          <Icon viewBox="0 0 1024 1024" fill="rgb(0, 0, 0)" width="100%" height="100%" icon="Github"/>
        </a>
        <a href="https://twitter.com/JvScripts_" rel="noopener noreferrer" target="_blank">
          <Icon viewBox="0 0 1024 1024" fill="rgb(21, 114, 182)" width="100%" height="100%" icon="Twitter"/>
        </a>
        <a href="https://linkedin.com/in/jerry-velazquez-8540b9bb/" rel="noopener noreferrer" target="_blank">
          <Icon viewBox="0 0 1024 1024" fill="rgb(21, 114, 182)" width="100%" height="100%" icon="Linkedin"/>
        </a>
      </div> 

      <p className="about__description-p">
        Hello! My name is Jerry Velazquez and I'm a full stack developer. I make full stack web applications and use a vary of technologies. Before this working as a developer I was working in live audio engineer for venues in NYC... I made my living that way as well as other odd job. Throughout my journey as a New Yorker I wore many hats and found that I was very adaptable to different jobs. write more here or make it consice!
      </p>
    </div>


    <ul className="svg">

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(227, 79, 38)" icon="Html"/>
      </li>
      
      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(21, 114, 182)" icon="Css"/>
      </li>

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(247, 223, 30)" icon="Javascript"/>
      </li>

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(97, 218, 251)" icon="React"/>
      </li>

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(204, 52, 45)" icon="Ruby"/>
      </li>

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(68, 121, 161)" icon="MySQL"/>
      </li>

      <li className="svg__icon">
        <Icon viewBox="0 0 1024 1024" fill="rgb(118, 74, 188)" icon="Redux"/>
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