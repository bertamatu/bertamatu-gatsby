/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import styled from "styled-components"

const LayoutStyle = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: radial-gradient(
    circle farthest-corner at 28.8% 83.9%,
    rgba(255, 110, 112, 1) 0%,
    rgba(255, 116, 142, 1) 90%
  );
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <LayoutStyle>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
