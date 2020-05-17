import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
color: green;
`

const footer = () => {
  return (
    <Footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  )
}

export default footer
