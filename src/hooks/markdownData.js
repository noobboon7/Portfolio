import { useStaticQuery, graphql } from "gatsby"

export const useBlogMD = () => {
  const {allMarkdownRemark} = useStaticQuery(
    graphql`
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
            id
          }
        }
      }
    }
  `)
  // console.log( allMarkdownRemark.edges)

  return allMarkdownRemark.edges
}