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
import { SiTypescript, SiJest, SiPostman } from 'react-icons/si';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';

const IndexPage = ({ data }) => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <FrontEndDev>
                <HomePageLogo/>
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
                </Icons>
                <Image
                    src='https://media.giphy.com/media/3oeXavC4abOohpScXJ/giphy.gif'
                    alt="bertacodes. Learning to code."
                />
                <SocialIcons />
                <AdditionalText> zerotomastery </AdditionalText>
            </FrontEndDev>
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90vh;
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const FrontEndDev = styled.div`
    font-family: Roboto;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
`;

const Image = styled.img`
    height: 50vh;
`;

const Icons = styled.div`
    font-size: 32px;
    color: black;
    padding: 0;
    margin: 10px;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

const AdditionalText = styled.div`
   color: black,;
   font-size: 16px; 
   letter-spacing: 60px;
   text-align: center;
   margin-top: 10px;
   @media (max-width: 768px) {
        font-size: 12px;
        letter-spacing: 10px;
    }
`;

export default IndexPage;
