import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

const HomePage = styled.section`
  height: 100vh;
  width: 100vw;
  text-align: center;

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
const WelcomeMessage = styled.p`
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 8px;
`
const Button = styled(Link)`
  text-decoration: none;
  /* background-color: rgba(255, 255, 255, 0.4); */
  background-color: black;
  padding: 1rem;
  border-radius: 5px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  font-size: 0.7rem;
  border: 0.5px dotted white;
`

const IndexPage = ({ data }) => (
  <HomePage>
    <Layout>
      {/* <Img fluid={data.file.childImageSharp.fluid} alt=""></Img> */}
      <SEO title="Home" />
      <HomePageLogo />
      <WelcomeMessage>welcome to my porfolio!</WelcomeMessage>
      <Button to="/work">see my projects</Button>
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
