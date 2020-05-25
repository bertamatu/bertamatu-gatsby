import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaGithub,
} from "react-icons/fa"
import { GrGatsbyjs, GrMysql } from "react-icons/gr"
import { IoLogoJavascript } from "react-icons/io"

const AboutPage = styled.main`
  height: 100vh;
  width: 100vw;
`
const AboutText = styled.article`
  margin: 0 auto;
  padding: 6rem 2rem 3rem 2rem;
  font-size: 0.7rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  @media (min-width: 768px) {
    padding-top: 10rem;
    width: 60vw;
  }
`
const Icons = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: red;
`
const About = () => {
  return (
    <AboutPage>
      <Layout>
        <AboutText>
          <header>
            <b>Hello, I'm Berta! Creative front-end developer.</b>
          </header>
          <hr />
          <br />
          <p>
            Because of unfulfilled potential about myself I decided to make a
            career shift from finance and accounting to IT development. I didn't
            choose it because of a decent salary and programming is not my hobby
            - it's my passion.
          </p>
          <p>
            <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
            <ul>
              <li>
                Energetic, flexible, highly motivated, positive team player;
              </li>
              <li>Eager to learn and open to new challenges;</li>
              <li>Having the potential to motivate and support others;</li>
            </ul>
          </p>
          <p>
            In 2020 January I finished a coding school - fullstack classes. I
            was one of the most driven students at the{" "}
            <Link
              href="https://bit.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baltic Institute of Technolgy.
            </Link>{" "}
            I was a self-taught front-end enthusiast, so I mentored my
            classmates and other students at coding school with our daily tasks
            and homework during scrum classes in the front-end module. At the
            coding school we also got familiar with OOP and Java fundamentals.
            My{" "}
            <Link
              href="https://github.com/bertamatu/springCrudApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              final project
            </Link>{" "}
            was web CRUD app, built with Spring Boot and MySQL.
          </p>
          <p>
            After getting my diploma I continued the learning process on my own,
            focusing on front-end development. Getting familiar with React Js
            and Gatsby Js at the moment.
          </p>
          <p>
            I am actively looking for a junior developer position. Willing to
            join a dynamic, innovative, and collaborative team.
            <br />
            <i>
              <b>Offers related to the internship are highly welcome!</b>
            </i>
          </p>
          Let's connect on{" "}
          <Link
            href="https://www.linkedin.com/in/bertam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </Link>
          .
          <br />
          <br />
          <Icons>
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <IoLogoJavascript />
            <FaReact />
            <GrGatsbyjs />
            <GrMysql />
            <FaGithub />
          </Icons>
        </AboutText>
      </Layout>
    </AboutPage>
  )
}

export default About
