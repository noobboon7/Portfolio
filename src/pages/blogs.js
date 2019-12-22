import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {  a } from "react-spring";

import Head from '../components/head'
import Layout from '../components/layout'



const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const blogs = data.allMarkdownRemark.edges
  // make custom hooks 

  return (
    <Layout>
    <Head pageTitle="Blogs"/>
      <a.div className="blogs">
        <h1 className="blogs__header">Blogs:</h1>
        <ol className="blogs__posts">
          {blogs.map(blog => {
            return (
              <li className="blogs__post">
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  <div className="">
                    <h2 className="blogs__header-2">{blog.node.frontmatter.title}</h2>
                    <p className="blogs__date">{blog.node.frontmatter.date}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </a.div>
    </Layout>
  )
}

export default BlogPage
