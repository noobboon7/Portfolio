import React from "react"

import "../sass/main.scss"

import Layout from "../components/layout"

import Head from '../components/head'
import SEO from "../components/seo"

const About = () => {
    
    return(
        <Layout>
            <Head pageTitle="About"/>
            <SEO title="About"/>
            <div className="aboutPage">
                <h2>need to build an interactive resume </h2>
                <h1>heres a little about me</h1>
                <p>I'm a full stack engineer, I create applications that I find useful for social good.</p>
            </div>
        </Layout>
    )
}

export default About; 