import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink";


import Head from '../components/head'
import Layout from '../components/layout'
import { useBlogMD } from '../hooks/markdownData'



const BlogPage = () => {
  const blogs = useBlogMD()
  
  return (
    <Layout>
    <Head pageTitle="Blogs"/>
      <div className="blogs">
        <h1 className="blogs__header">Blogs:</h1>
        <ol className="blogs__posts">
          {blogs.map(blog => {
            return (
              <li className="blogs__post" key={blog.node.id}>
                <AniLink swipe direction="left" to={`/blog/${blog.node.fields.slug}`}>
                  <div className="" >
                    <h2 className="blogs__header-2">{blog.node.frontmatter.title}</h2>
                    <p className="blogs__date">{blog.node.frontmatter.date}</p>
                  </div>
                </AniLink>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;
