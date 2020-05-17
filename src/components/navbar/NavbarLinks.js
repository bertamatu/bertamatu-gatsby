import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0 1rem;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: red;
    transition: all 400ms ease-in;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 4rem;
    transition: all 200ms ease-out;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/about">ABOUT</NavItem>
      <NavItem to="/work">WORK</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
    </>
  )
}

export default NavbarLinks
