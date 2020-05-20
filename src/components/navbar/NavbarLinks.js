import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 0.7rem;
  color: black;
  padding: 0 2rem;
  display: inline-block;
  /* margin: 0 1vw; */
  transition: all 200ms ease-in;
  /* position: relative; */

  :hover {
    transition: all 400ms ease-in;
    transform:rotate();
      }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 4rem;
    transition: all 10ms ease-in;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/about">ABOUT</NavItem>
      <NavItem to="/work">WORK</NavItem>
      <NavItem to="/blog">BLOG</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
    </>
  )
}

export default NavbarLinks
