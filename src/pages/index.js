import React from "react"
import styled from "styled-components"
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaVuejs,
  FaDocker,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { GrGatsbyjs, GrMysql } from "react-icons/gr"
import { SiTypescript, SiJest, SiPostman } from "react-icons/si"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageLogo from "../components/HomePageLogo"

const IndexPage = ({ data }) => (
  <HomePage>
    <Layout>
      <Seo title="Home" />
      <HomePageLogo />
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
        <FaDocker />
        <GrMysql />
        <SiPostman />
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
  color: white;
`
const Icons = styled.p`
  font-size: 24px;
  margin: 0;
  margin-top: -0.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: -16px;
  }
`
const Buttons = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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
export default IndexPage
