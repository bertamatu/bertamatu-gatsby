// import { Link } from "gatsby"
import React from "react"
import Navbar from "../components/navbar/Navbar"
import styled from "styled-components"

const HeaderStyle = styled.header`
  background-color: #000;
`
const Header = () => (
  <HeaderStyle>
    <Navbar />
  </HeaderStyle>
)
export default Header
