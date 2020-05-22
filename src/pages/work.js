import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { GoLogoGithub } from "react-icons/go"
import workGIF from "../images/gifs/giphy_work.gif"

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
  margin-top: 25vh;
  text-align: center;
`
const GithubLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  /* padding-top: 9rem; */
`

const Work = () => {
  return (
    <WorkPage>
      <WorkContainer>
        <GithubLink href="https://github.com/bertamatu" target="_blank">
          <GoLogoGithub
            style={{
              fontSize: 150,
            }}
          />
          <br />
          <img
            src={workGIF}
            alt="work"
            style={{
              height: 200,
            }}
          />
        </GithubLink>
      </WorkContainer>
    </WorkPage>
  )
}
export default Work
