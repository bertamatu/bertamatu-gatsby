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
