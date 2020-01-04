import React from 'react'
import Icon from './icon'
import Img from "gatsby-image"


const AboutSection = ({me}) => (
  <>
    {/*Have backGround image of sky or video or animation */}
    
    <h2 className="about__heading heading-1">About</h2>
    
    <div className="about__description" >

      <div class="hexa">
        <div class="hex1">
          <div class="hex2">
            <div className="about__description-photo">
              <Img fluid={me.childImageSharp.fluid}/>
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
        Hello! My name is Jerry Velazquez and I'm a full stack developer. I started making full stack web applications at my time in flatiron school and use a vary of technologies. Before this working as a developer I was working in live audio engineer for venues in NYC... I made my living that way as well as other jobs. Now, I'm making appliction for social good and projects that I find interesting. 
      </p>
    </div>
  </>

)
  


export default AboutSection;