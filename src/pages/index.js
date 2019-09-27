import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <SEO title="Home" />
      <h1>Jerry Velazquez</h1>
      <p>This going to be an icon with my image</p>
      <p>lil discription here</p>
      <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
