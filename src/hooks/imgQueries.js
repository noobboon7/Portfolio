import { useStaticQuery, graphql } from "gatsby"

export const useImgQ = () => {
  const imgs = useStaticQuery(graphql`
  query {
    me: file(relativePath: { eq: "assets/img/me.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    bb: file(relativePath: { eq: "assets/img/bb.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    blub: file(relativePath: { eq: "assets/img/blub.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    nexter: file(relativePath: { eq: "assets/img/nexter.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    plush: file(relativePath: { eq: "assets/img/plush.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    sky: file(relativePath: { eq: "assets/img/sky.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    water: file(relativePath: { eq: "assets/img/water.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
    constrct: file(relativePath: { eq: "assets/img/under-construstion.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return imgs
}

export default useImgQ