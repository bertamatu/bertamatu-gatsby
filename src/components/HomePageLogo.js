import React from "react"
import styled from "styled-components"

const HomePageLogo = () => {
  return (
    <HomeLogo>
      <LogoText>BERTA</LogoText>
    </HomeLogo>
  )
}

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
  background-size: 33%;
  background-position: center;
  color: transparent;
  background-clip: border-box;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  font-size: 182px;
  line-height: 1;
  font-weight: 900;
  font-family: sans-serif;
  letter-spacing: -16px;
  margin-top: 30vh;
  width: 100vw;
  align-items: center;
  text-shadow: -6px 4px 6px rgb(0 0 0 / 64%),
    4px -5px 10px rgb(255 255 255 / 8%);
  @media (max-width: 768px) {
    letter-spacing: -10px;
    font-size: 8rem;
    background-size: 90%;
  }
`

export default HomePageLogo
