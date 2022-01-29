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
import {
    SiTypescript,
    SiJest,
    SiPostman,
    SiGit,
    SiCypress,
    SiTailwindcss,
    SiJira,
} from 'react-icons/si';

const TechIcons = () => {
    return (
        <Icons>
            <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <SiTailwindcss />
            <IoLogoJavascript />
            <FaReact />
            <GrGatsbyjs />
            <FaVuejs />
            <SiTypescript />
            <SiJest />
            <SiCypress />
            <FaDocker />
            <GrMysql />
            <SiPostman />
            <SiGit />
            <SiJira />
        </Icons>
    );
};

export default TechIcons;

const Icons = styled.div`
    font-size: 18px;
    color: black;
    padding-top: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
