import React from "react"
import styled from "styled-components"
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { GrGatsbyjs } from "react-icons/gr"
import { SiTypescript, SiJest } from "react-icons/si"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"

const HomePage = styled.section`
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #eb3349;
  background: -webkit-linear-gradient(to left, #f45c43, #ea2e44);
  background: linear-gradient(to left, #f45c43, #ea2e44);
`
const FrontEndDev = styled.p`
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  margin: 0;
  padding-bottom: 1rem;
`
const Icons = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  margin-top: -0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  /* color: rgba(0, 0, 0, 1); */
`
const Buttons = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.a`
  text-decoration: none;
  background-color: black;
  padding: 0.5rem;
  border-radius: 5px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  font-size: 0.7rem;
  border: 0.2px dotted white;
  margin-bottom: 0.5rem;
`
const Name = styled.p`
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
  /* letter-spacing: 0.5rem; */
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
`

const IndexPage = ({ data }) => (
  <HomePage>
    <Layout>
      <Seo title="Home" />
      <HomePageLogo />
      <Name>BERTA MATULIAUSKIENE</Name>
      <FrontEndDev>FRONT-END SOFTWARE ENGINEER</FrontEndDev>
      <Icons>
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <FaBootstrap />
        <IoLogoJavascript />
        <FaReact />
        <GrGatsbyjs />
        <FaVuejs />
        <SiTypescript />
        <SiJest />
      </Icons>
      <Buttons>
        <Button href="/work" target="_blank">
          see my projects
        </Button>{" "}
        <Button
          href="https://www.linkedin.com/in/bertam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          let's connect
        </Button>
      </Buttons>
    </Layout>
  </HomePage>
)
export default IndexPage
