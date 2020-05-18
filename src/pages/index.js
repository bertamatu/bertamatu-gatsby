import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"

const HomePage = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
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
