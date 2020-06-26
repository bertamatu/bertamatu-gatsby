import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import contactGIF from "../images/gifs/gif_contact.webp"

const ContactContainer = styled.section`
  margin-top: 18vh;
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

const Contact = ({ data }) => {
  return (
    <Layout>
      <ContactContainer>
        <img src={contactGIF} alt="plain" style={{ height: 250 }} />
        <h6>
          <code>Let's talk!</code>
        </h6>
        <Icons
          href="https://www.linkedin.com/in/bertam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </Icons>
        <Icons
          href="https://github.com/bertamatu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Icons>
        {/* <Icons href="mailto:">
          <FaEnvelope />
        </Icons>
        <Icons href="tel:">
          <FaPhoneAlt />
        </Icons> */}
      </ContactContainer>
      <Footer />
    </Layout>
  )
}

export default Contact
