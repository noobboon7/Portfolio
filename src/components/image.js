import React from "react"
import {useImgQ} from "../hooks/imgQueries"
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
  // 2 now need to figure out how to optimize for scss files

  const {me, sky} = useImgQ()

  return <Img fluid={sky.childImageSharp.fluid} />
}

export default Image
