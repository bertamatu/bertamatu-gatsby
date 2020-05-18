import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const AboutContainer = styled.section`
  width: 80vw;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 20vh;
  padding: 2rem;

  /* background-color: rgba(255, 255, 255, 0.8); */
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  -webkit-box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 52px 79px 11px rgba(0, 0, 0, 0.4);
`
const AboutText = styled.article`
  font-size: 0.8rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: justify;
  line-height: 1.2;
`

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <AboutText>
          <header>Hello, I'm Berta! Creative front-end developer.</header>
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
            molestiae dolore vel sit quibusdam libero, ab laboriosam architecto
            quisquam dolorem enim reiciendis sed, id nobis, adipisci officia
            cumque iure consequuntur?
          </p>
        </AboutText>
      </AboutContainer>
    </Layout>
  )
}

export default About
