import React from 'react'
import Icon from './icon'


const CraftSection = () => (
  <>
  <h2 className="craft__heading heading-1">Full Stack DeV</h2>
    <div className="craft__badges">
      <div className="craft__badge-container">

        <div className="craft__badge-background-icon ">
          <span className="craft__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="#fff" icon="HTTP" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="craft__badge-skill">HTTP and REST</h3>

        <p className="craft__badge-description">Obtain data from API's and create new information w/ RESTFUL routing</p>
      </div>
      <div className="craft__badge-container ">

        <div className="craft__badge-background-icon ">
          <span className="craft__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(225, 255, 255)" icon="Database" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="craft__badge-skill">Databases and Web Storage</h3>

        <p className="craft__badge-description">Knowledge of various DBMS and caching mechanisms to improve UX</p>
      </div>
      <div className="craft__badge-container ">

        <div className="craft__badge-background-icon ">
          <span className="craft__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(240, 80, 50)" icon="Git" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="craft__badge-skill">Git Version Control</h3>

        <p className="craft__badge-description">Logging stable project versions to ensure a great build for production. </p>
      </div>

      <div className="craft__badge-container ">

        <div className="craft__badge-background-icon ">
          <span className="craft__badge-icon">
            <Icon viewBox="0 0 1024 1024" fill="rgb(240, 80, 50)" icon="Tools" height="10rem" width="10rem" />
          </span>
        </div>

        <h3 className="craft__badge-skill">Web Architecture</h3>

        <p className="craft__badge-description">Understand the application logic between the client and the server.</p>
      </div>

    </div>

    <h2 className="craft__heading-2 heading-1">Skills</h2>

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
  </>
)

export default CraftSection