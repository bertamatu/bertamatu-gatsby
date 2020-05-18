import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"

const WorkContainer = styled.section`
  margin: 0 auto;
  margin-top: 30vh;
  text-align: center;
`

const GithubLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
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
