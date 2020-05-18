import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn, faEnvelope } from "react-icons/fa"

const ContactContainer = styled.section``

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <a
          href="https://www.linkedin.com/in/bertam/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/bertamatu" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:info.berta@gmail.com">
          <faEnvelope />
        </a>
        <a href="tel:+37062612836"></a>
      </ContactContainer>
    </Layout>
  )
}

export default Contact
