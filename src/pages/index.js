import React from "react";
import { Link } from "gatsby";
import '../sass/index.scss';


import Layout from "../components/layout";
import Head from '../components/head';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
  <Head title="Home"/>
    <SEO title="Home" />

      <div className="content">
        <h1>Jerry Velazquez</h1>
        <p>This going to be an icon with my image</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
