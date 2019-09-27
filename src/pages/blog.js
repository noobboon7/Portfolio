import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head';
import Layout from "../components/layout"
import blogPgStyles from "./blog.module.scss"

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

  return (
    <Layout>
      <Head title="BlogPage"/>
      <div className={blogPgStyles.posts}>
        <h1>Blogs</h1>
        <ol>
          {blogs.map(blog => {
            return (
              <li className={blogPgStyles.post}>
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  <h2>{blog.node.frontmatter.title}</h2>
                  <p>{blog.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
