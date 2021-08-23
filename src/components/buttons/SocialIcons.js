import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

const SocialIcons = () => {
    return (
        <section>
            <Icons
                href="https://instagram.com/berta.codes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <RiInstagramFill />
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
                style={{ fontSize: '27px' }}
            >
                <IoLogoYoutube />
            </Icons>
            <Icons
                href="https://twitter.com/bertacodes"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '27px' }}
            >
                <FaTwitterSquare />
            </Icons>
        </section>
    );
};

export default SocialIcons;

const Icons = styled.a`
    text-decoration: none;
    color: black;
    font-size: 26px;
    padding-left: 6px;
    align-content: center;
    :hover {
        color: #fc6c85;
        transition: 0.3s ease-in-out;
    }
`;
