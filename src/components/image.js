import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  // 1 needed to write the whole file name 
  // 2 now need to figure out how to optimize for scss files
  // 3 make a hook component to query imgaes 
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "assets/img/me.jpg" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

  return <Img fluid={data.me.childImageSharp.fluid} />
}

export default Image
