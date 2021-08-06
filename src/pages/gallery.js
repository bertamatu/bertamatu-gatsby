import React from "react"
import Layout from "../components/layout"
import Posts from "react-ig-feed"
import "react-ig-feed/dist/index.css"
import styled from "styled-components"

const MainContent = styled.main`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 7vh;
  z-index: -1;
`

const GalleryPage = () => {
  return (
    <Layout>
      <MainContent>
        <Posts token={process.env.GATSBY_POSTS} counter="24" />
      </MainContent>
    </Layout>
  )
}

export default GalleryPage
