import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const AboutWrap = styled.main`
  margin-top: 20vh;
`
const AboutContainer = styled.section`
  margin: 0 auto;
  width: 80vw;
  color: black;
  @media (min-width: 768px) {
    width: 50vw;
  }
`
const AboutText = styled.article`
  font-size: 0.8rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
            <br />
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
