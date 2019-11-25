import  React from 'react';
import  Layout from '../components/layout';
import Head from '../components/head';



const ContactPage = () => {
  return(
    <Layout>
      <Head title="Contact"/>
    <div>
      <h1>Contact Me</h1>
      <p>
        Contact me through twitter use some sort of e-mailing and possible web-sockects
        <a href="https://twitter.com/JvScripts_" target ='_blank' rel="noopener noreferrer" >@JvScipts</a>
      </p>
    </div>
    </Layout>
  )
}

export default ContactPage
