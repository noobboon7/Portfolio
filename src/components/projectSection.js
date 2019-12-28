import React from 'react'
import Card from '../components/projectCard'


const ProjectSection  = () => (
  <div className="projects">

  <h2 className="projects__title projects__title--animated">Projects</h2>

  <div className="projects__gallery">

    <Card num="1" 
    name="Budget Buddy" 
    stack="React + redux + Ruby on Rails " 
    descrp="Budget Buddy is an app to help to you allocate funds within your means. By make deposits into you digital piggy bank you can save up for that christmas item you've been eying since last year! It also gives you tools to help you track your spending... this way we can also be financially responsible."
    stat="Undergoing Re-Construction"
    />
    
    <Card num="2" 
    name="Nexter" 
    stack="HTML + CSS" 
    descrp="Nexter is purely build on HTML and css, well not purely... I've been wonder what would it be like to build a website template with Sass. Upon searching, I saw that jonas schmedtmann another web developer created some css courses that shown how he's done it, and I tried to mirror that flow. I found that is was more challenging than I thought css would be, but I got the build right with the help of grid layouts. WOot!"
    stat="Complete"
    />
    
    <Card num="3"
    name="TV Tube" 
    stack="React + redux + Ruby on Rails " 
    descrp="This app is for the Tv goes everywhere... this was one my first full stack projects with react and ruby on rails. You can thing of this application sort of like a TvGuide."
    stat="complete"
    />
    
  </div>
</div>
)

export default ProjectSection;