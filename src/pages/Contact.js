import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io'
import contactGIF from '../data/images/gifs/gif_contact.webp';

const Contact = ({ data }) => {
    return (
        <Layout>
            <ContactContainer>
                <img
                    src={contactGIF}
                    alt="berta codes"
                    style={{ height: 300, marginTop: 20, marginBottom: 0}}
                />
                <Icons
                    href="mailto:berta.codes.info@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 120, margin: '0 auto' }}
                >
                    <IoIosMail />
                </Icons>
                <h6>
                    <code>Let's talk!</code>
                </h6>
                <div>
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
                </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
