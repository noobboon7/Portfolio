import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Canvas from '../components/canvas'
import Splash from '../components/splash'


import "../sass/main.scss"

import Layout from "../components/layout"
// import Image from "../components/image"
import Head from '../components/head'
import SEO from "../components/seo"

const IndexPage = () => {

  return(
    <Layout>
      <Head pageTitle="Home"/>
      <SEO title="Home" />
      
      <main id ="container" className="contanier">
      
        <section className="splash">
          <h1 className="splash__text"> Hello worlds. I'm Jerry V. this is my site.</h1>
          <Splash/>
        </section>
        
        <section className="summary">
          <FontAwesomeIcon icon="coffee" />
          <ul className="svg">
            <li className="svg__icon"><FontAwesomeIcon icon="check-square" fill="black"/></li>
            <li className="svg__icon"><FontAwesomeIcon icon="coffee" fill="black"/></li>
            <li className="svg__icon">svg</li>
            <li className="svg__icon">svg</li>
          </ul>
          <p className="summary__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Ut porttitor leo a diam sollicitudin tempor. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Mi eget mauris pharetra et ultrices neque ornare. Justo nec ultrices dui sapien eget mi proin. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Dictum sit amet justo donec enim. Tincidunt augue interdum velit euismod in pellentesque massa. Tortor dignissim convallis aenean et tortor at.
              Ut tristique et egestas quis ipsum suspendisse. Ultrices in iaculis nunc sed augue lacus viverra vitae. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Sed id semper risus in hendrerit. Mauris pharetra et ultrices neque ornare aenean euismod. Diam in arcu cursus euismod. Elit pellentesque habitant morbi tristique senectus. In fermentum posuere urna nec. In ante metus dictum at tempor commodo ullamcorper. Dolor sit amet consectetur adipiscing elit ut aliquam. Sed tempus urna et pharetra pharetra. Sed augue lacus viverra vitae congue eu consequat. Consequat id porta nibh venenatis cras sed. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Ut pharetra sit amet aliquam. Pharetra vel turpis nunc eget lorem dolor sed viverra. Libero volutpat sed cras ornare.
          </p>
        </section>



      <div className="blogs">
        <h2>blogs</h2>
      </div>
      </main>

    </Layout>
  )
}

export default IndexPage
