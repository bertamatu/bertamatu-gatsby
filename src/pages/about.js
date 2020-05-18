import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const AboutWrap = styled.main`
  max-width: 81vw;
  margin: 0 auto;
  /* padding: 0.9rem;
  position: relative;
  background: linear-gradient(to right, white, pink);
  padding: 2px; */
  margin-top: 20vh;
  border-radius: 5px;
`
const AboutContainer = styled.section`
  width: 80vw;
  border-radius: 5px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-color: rgba(255, 255, 255, 0.09);
  color: black;
  -webkit-box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    width: 50vw;
  }
`
const AboutText = styled.article`
  font-size: 0.8rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.2;
`

const About = () => {
  return (
    <Layout>
      <AboutWrap>
        <AboutContainer>
          <AboutText>
            <header>
              <b>Hello, I'm Berta! Creative front-end developer.</b>
            </header>
            <br/>
            <p>
              SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!
              <br />
              • Energetic, flexible, highly motivated, positive team player;
              <br />
              • Eager to learn and open to new challenges;
              <br />• Having the potential to motivate and support others;
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              molestiae dolore vel sit quibusdam libero, ab laboriosam
              architecto quisquam dolorem enim reiciendis sed, id nobis,
              adipisci officia cumque iure consequuntur?
            </p>
          </AboutText>
        </AboutContainer>
      </AboutWrap>
    </Layout>
  )
}

export default About
