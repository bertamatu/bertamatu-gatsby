import React from 'react';
import styled from 'styled-components';
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaSass,
    FaReact,
    FaVuejs,
    FaDocker,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GrGatsbyjs, GrMysql } from 'react-icons/gr';
import { SiTypescript, SiJest, SiPostman, SiGit } from 'react-icons/si';

const TechIcons = () => {

    return (
        <Icons>
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <IoLogoJavascript />
            <FaReact />
            <GrGatsbyjs />
            <FaVuejs />
            <SiTypescript />
            <SiJest />
            <FaDocker />
            <GrMysql />
            <SiPostman />
            <SiGit />
        </Icons>
    )
}

export default TechIcons;

const Icons = styled.div`
    font-size: 32px;
    color: black;
    padding: 0;
    margin: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;