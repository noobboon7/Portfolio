import React from "react"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import Head from '../components/head';
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Head siteTitle="404"/>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><Link to='/'>Head Home</Link></p>
  </Layout>
)

export default NotFoundPage

