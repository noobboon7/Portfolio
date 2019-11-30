import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Head from '../components/head';
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Head title="404"/>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p><Link to='/'>Head Home</Link></p>
  </Layout>
)

export default NotFoundPage
