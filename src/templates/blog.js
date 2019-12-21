import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
 
const Blog = (props) => {
  const {frontmatter, html} = props.data.markdownRemark

  return(
    <Layout>
      <Head pageTitle={frontmatter.title}/>
      <div className="article">

      <div className="article__content" dangerouslySetInnerHTML={{__html: html}}></div>
      </div>

    </Layout>
  )
}

export default Blog;
