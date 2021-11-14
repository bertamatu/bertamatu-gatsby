import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const SocialIcons = () => {
    return (
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Icons
                href="https://instagram.com/berta.codes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagramSquare />
            </Icons>
            <Icons
                href="https://www.linkedin.com/in/bertam/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </Icons>
            <Icons
                href="https://github.com/bertamatu"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithubSquare />
            </Icons>

            <Icons
                href="https://www.youtube.com/channel/UCMqzzvA2OCepIrnvkK1sMEQ"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaYoutubeSquare />
            </Icons>
            <Icons
                href="https://twitter.com/bertacodes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitterSquare />
            </Icons>
            <Icons
                href="mailto:berta.codes.info@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize: '55px'}}
            >
                <IoIosMail />
            </Icons>
        </section>
    );
};

export default SocialIcons;

const Icons = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 38px;
    padding: 0 6px;
    align-content: center;
    :hover {
        color: #FA1E3F;
        transition: 0.3s ease-in-out;
    }
`;
