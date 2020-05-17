import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const newLocal = <Link to="/">BERTAMATU</Link>
  //         const data = useStaticQuery(graphql`
  //     query {
  //       file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 50, pngQuality: 80) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)
  return (
    // <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    newLocal
  )
}

export default Logo
