import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

import styled from "styled-components"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const ContactContainer = styled.section`
  margin-top: 40vh;
  text-align: center;
`

const Icons = styled.a`
  text-decoration: none;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  padding: 1rem;
`

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <Icons
          href="https://www.linkedin.com/in/bertam/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </Icons>
        <Icons
          href="https://github.com/bertamatu"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Icons>
        <Icons href="mailto:info.berta@gmail.com">
          <FaEnvelope />
        </Icons>
        <Icons href="tel:+37062612836">
          <FaPhoneAlt />
        </Icons>
      </ContactContainer>
      <Footer />
    </Layout>
  )
}

export default Contact
