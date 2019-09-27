import  React from 'react';
import  Layout from '../components/layout';
import Head from '../components/head';
import { Link } from "gatsby"



const aboutPage = () => {
  return(
    <Layout>
      <Head title="About"/>
    <div>
      <h1>About Me</h1>
      <p>bio and what I do</p>
      <Link to = '/contact/'>Contact Jerry</Link>
    </div>
    </Layout>
  )
}

export default aboutPage
