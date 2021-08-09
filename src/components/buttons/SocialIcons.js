import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <section>
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
            <Icons
                href="https://www.youtube.com/channel/UCMqzzvA2OCepIrnvkK1sMEQ"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaYoutube />
            </Icons>
        </section>
    );
};

export default SocialIcons;

const Icons = styled.a`
    text-decoration: none;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    font-size: 26px;
    padding-left: 0.5rem;
`;
