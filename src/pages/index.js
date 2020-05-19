import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

const HomePage = styled.section``
const IndexPage = ({ data }) => (
  <HomePage>
    <Layout>
      {/* <Img fluid={data.file.childImageSharp.fluid} alt=""></Img> */}
      <SEO title="Home" />
      <HomePageLogo />
    </Layout>
  </HomePage>
)
// export const query = graphql`
//          {
//            file(relativePath: { eq: "walking_outside.png" }) {
//              absolutePath
//              childImageSharp {
//                fluid {
//                  ...GatsbyImageSharpFluid
//                }
//              }
//            }
//          }
//        `
export default IndexPage
