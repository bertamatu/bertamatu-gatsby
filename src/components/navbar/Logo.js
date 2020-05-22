import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoDesign = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.7rem;
  font-family: roboto;
  :hover {
    color: black;
    transition-duration: 0.9s;
  }
`

const Logo = () => {
  const newLocal = <LogoDesign to="/">BERTAMATU</LogoDesign>
  return newLocal
}

export default Logo
