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
`

const LogoText = styled.div`
  background-image: url(https://media.giphy.com/media/3o6ZsVGl3vuG5g0Kic/giphy.gif);
  background-size: cover;
  background-position: center;
  color: transparent;
  background-clip: border-box;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  font-size: 10vw;
  line-height: 1;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  letter-spacing: -25px;
  margin-top: 30vh;
  width: 100vw;
  align-items: center;

  @media (max-width: 768px) {
    letter-spacing: -10px;
    font-size: 4rem;
  }
`

const HomePageLogo = () => {
  return (
    <HomeLogo>
      <LogoText>BERTAMATU</LogoText>
    </HomeLogo>
  )
}

export default HomePageLogo
