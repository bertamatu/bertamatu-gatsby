import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoDesign = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.7rem;
  font-family: roboto;
  align-self: center;
  :hover {
    color: red;
    transition-duration: 0.9s;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    font-size: 1rem;
    font-weight: 150;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

const Logo = () => {
  const newLocal = <LogoDesign to="/">BERTAMATU</LogoDesign>
  return newLocal
}

export default Logo
