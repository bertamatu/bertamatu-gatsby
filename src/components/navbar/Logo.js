import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoDesign = styled(Link)`
  text-decoration: none;
  color: white;
`

const Logo = () => {
  const newLocal = <LogoDesign to="/">BERTAMATU</LogoDesign>
  return newLocal
}

export default Logo
