import React from "react"
import Navbar from "../components/navbar/Navbar"
import styled from "styled-components"

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
const Header = () => (
  <HeaderStyle>
    <Navbar />
  </HeaderStyle>
)
export default Header
