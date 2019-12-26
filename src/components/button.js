import React from 'react'
// import Popup from './modal'

const Button = ({projectName, clsNum, togl}) => (

  <button className={"btn btn--" + clsNum } onClick={togl}>


  <span className="btn-text">>
    {projectName} 
  </span>      


  </button>

)

export default Button;