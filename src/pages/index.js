import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"

const HomePage = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #000;
`

const IndexPage = () => (
  <Layout>
    <HomePage>
      <SEO title="Home" />
      <HomePageLogo />

      {/* <button>
        <Link to="/work">See my projects</Link>
      </button> */}
    </HomePage>
  </Layout>
)

export default IndexPage
