import React from "react"
import styled from "styled-components"

const HomeLogo = styled.div`
  z-index: 999;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 80vh; */
  padding-top: 30vh;
`

const LogoText = styled.div`
  background-image: url(https://media.giphy.com/media/3o6ZsVGl3vuG5g0Kic/giphy.gif);
  background-size: cover;
  background-position: center;
  color: transparent;
  background-clip: border-box;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 120px;
  line-height: 0.75;
  margin: 10px 0;
  padding-left: 1vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const HomePageLogo = () => {
  return (
    <HomeLogo>
      <LogoText>
        BERTA
        <br />
        <span>MATU</span>
      </LogoText>
    </HomeLogo>
  )
}

export default HomePageLogo
