import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Project page</h1>
    <p>Welcome to project page where you can live demo the apps I've made</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
