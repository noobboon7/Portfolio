import React from 'react'
import Card from '../components/projectCard'


const ProjectSection  = () => (
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
)

export default ProjectSection;