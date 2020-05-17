import React from "react"
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
  <HomePage>
    <Layout>
      <SEO title="Home" />
      <HomePageLogo />
    </Layout>
  </HomePage>
)

export default IndexPage
