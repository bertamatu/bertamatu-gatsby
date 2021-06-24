import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoDesign = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 0.7rem;
  letter-spacing: 2px;
  align-self: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  :hover {
    color: #e0115f;
    transition-duration: 0.9s;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    font-size: 1rem;
    font-weight: 250;
  }
`

const Logo = () => {
  const newLocal = <LogoDesign to="/">BERTAMATU</LogoDesign>
  return newLocal
}

export default Logo
