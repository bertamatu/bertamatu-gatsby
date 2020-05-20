import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

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
    <section>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
