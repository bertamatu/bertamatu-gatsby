import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"

const WorkContainer = styled.section`
  margin: 0 auto;
  margin-top: 30vh;
  margin-bottom: 40vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  width: 50vw;
  padding: 2rem;
  border-radius: 5px;
  -webkit-box-shadow: 0px 24px 92px -16px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 24px 92px -16px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 24px 92px -16px rgba(0, 0, 0, 0.57);
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
    <Layout>
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
    </Layout>
  )
}

export default Work
