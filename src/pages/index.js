import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

const HomePage = styled.section`
  height: 100vh;
  width: 100vw;

  background: #eb3349; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f45c43,
    #ea2e44
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f45c43,
    #ea2e44
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
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
