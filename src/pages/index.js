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
// import HomePageLogo from '../components/common/HomePageLogo';

const IndexPage = ({ data }) => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <FrontEndDev>
                <Image
                    src="https://media.giphy.com/media/uUIwmTkTtkHN4sSVPx/giphy.gif"
                    alt="bertacodes. Learning to code."
                />
                <div
                    style={{
                        fontSize: '82px',
                        marginBottom: '30px',
                        fontWeight: '900',
                        fontFamily: 'Roboto',
                        color: 'lightgrey',
                    }}
                >
                    BERTA
                    <span
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                            fontSize: '9px',
                            fontWeight: '900',
                            position: 'relative',
                            bottom: '-5px',
                            color: 'black',
                        }}
                    >
                        codes
                    </span>
                </div>
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
                <div style={{ color: 'black', fontSize: '16px' }}>
                    zero to mastery
                </div>
                <SocialIcons />
            </FrontEndDev>
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 98vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: white;
`;
const FrontEndDev = styled.div`
    font-family: Roboto;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
`;
const Image = styled.img`
    border-radius: 50%;
    height: 400px;
    margin-top: 7vh;
    filter: invert(100);
    transform: rotate(72deg);
    @media (max-width: 768px) {
        margin-top: 8vh;
    }
`;
const Icons = styled.div`
    font-size: 20px;
    color: black;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`;
export default IndexPage;
