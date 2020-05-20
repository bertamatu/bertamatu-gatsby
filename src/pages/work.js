import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"

const WorkPage = styled(Layout)`
  background-image: linear-gradient(
    to left top,
    #6a2323,
    #874c5a,
    #9b788b,
    #b0a4b3,
    #d0d0d0
  );
`
const WorkContainer = styled.section`
  margin: 0 auto;
  margin-top: 30vh;
  margin-bottom: 40vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 20vw;
    height: 30vh;
  }
`
const GithubLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
`

const Work = () => {
  return (
    <WorkPage>
      <WorkContainer>
        <GithubLink href="https://github.com/bertamatu" target="_blank">
          Visit my Github
          <br />
          <FaGithub
            style={{
              fontSize: 100,
            }}
          />
        </GithubLink>
      </WorkContainer>
    </WorkPage>
  )
}

export default Work
