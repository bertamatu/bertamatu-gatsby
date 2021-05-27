import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { FaLinkedin } from "react-icons/fa"
// import { GrGatsbyjs, GrMysql } from "react-icons/gr"
// import { IoLogoJavascript } from "react-icons/io"

const AboutPage = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  &:last-child {
    margin-bottom: 30px;
  }
`
const AboutText = styled.article`
  margin: 0 auto;
  font-size: 0.7rem;
  padding: 4rem 2rem 3rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: justify;
  @media (min-width: 768px) {
    padding-top: 15%;
    width: 55vw;
  }
`
const Icons = styled.p`
  color: black;
  color: rgba(0, 0, 0, 0.02);
  @media (max-width: 768px) {
    margin-top: -30rem;
    margin-right: -10rem;
    font-size: 30rem;
    text-align: right;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: red;
`
const LinkedIn = styled(FaLinkedin)`
  font-size: 3rem;
  margin-bottom: -0.2rem;
  margin-right: 1rem;
  color: #0e76a8;
`
const About = () => {
  return (
    <AboutPage>
      <Layout>
        <AboutText>
          <header>
            <Link
              href="https://www.linkedin.com/in/bertam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <LinkedIn />
            </Link>

            <div
              class="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="bertam"
            >
              <a
                class="LI-simple-link"
                href="https://lt.linkedin.com/in/bertam?trk=profile-badge"
              >
                Berta Matuliauskienė
              </a>
            </div>

            

            <b>Hello, I'm Berta! Creative front-end developer.</b>
          </header>
          <hr />
          <p>
            Because of my unfulfilled potential, I decided to make a career
            shift from finance and accounting to front-end development. I didn't
            choose it because of a decent salary and programming is not just one
            of my hobbies - it's my passion.
          </p>
          <div>
            <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
            <ul>
              <li>
                Energetic, flexible, highly motivated, positive team player;
              </li>
              <li>Eager to learn and open to new challenges;</li>
              <li>Having the potential to motivate and support others;</li>
            </ul>
          </div>
          <p>
            I finished full-stack studies in a{" "}
            <Link
              href="https://bit.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baltic Institute of Technology
            </Link>{" "}
            in 2020 January - was one of the most driven students. I was a
            self-taught front-end enthusiast, so I mentored my classmates and
            other students at coding school with our daily tasks and homework
            during scrum classes in the front-end module. We also got familiar
            with OOP and Java fundamentals. My{" "}
            <Link
              href="https://github.com/bertamatu/springCrudApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              final project
            </Link>{" "}
            was a web CRUD app, built with Spring Boot and MySQL. I enjoyed
            working on the front-end part the most, so I decided to focus on it
            after getting my diploma.
          </p>
          <p>
            I got my first front-end developer job in 2020 August. Spent there 6
            months working with Vue Js.
            <br />
            In 2021 March I joined another company to get more experience in
            React Js and TypeScript.
            <br />
            <a
              href="https://www.linkedin.com/in/bertam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More...
            </a>
          </p>
          <img
            src="https://www.codewars.com/users/emberta/badges/large"
            alt="@berta.codes codewars"
          />

          <Icons>
            {/* <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <IoLogoJavascript />
            <FaReact />
            <GrGatsbyjs />
            <GrMysql />
            <FaGithub /> */}
          </Icons>
        </AboutText>
      </Layout>
    </AboutPage>
  )
}

export default About
