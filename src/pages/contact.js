import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import contactGIF from '../images/gifs/gif_contact.webp';

const Contact = ({ data }) => {
    return (
        <Layout>
            <ContactContainer>
                <img
                    src={contactGIF}
                    alt="plain"
                    style={{ height: 300, marginTop: 50 }}
                />
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
                <Icons
                    href="https://instagram.com/berta.codes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </Icons>
            </ContactContainer>
            <Footer />
        </Layout>
    );
};

const ContactContainer = styled.section`
    margin-top: 5%;
    text-align: center;
    overflow-y: hidden;
    overflow-x: hidden;
`;
const Icons = styled.a`
    text-decoration: none;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    padding: 1rem;
`;

export default Contact;
