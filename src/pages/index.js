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
                    src="https://media.giphy.com/media/7BcL8GvcMgTyE/giphy.gif?cid=ecf05e477ngp52f81zm1x5y8tz4txcanu38e549jj98gybsg&rid=giphy.gif&ct=g"
                    alt="bertacodes. Learning to code."
                />
                {/* <HomePageLogo /> */}
                <div
                    style={{
                        fontSize: '40px',
                        marginBottom: '10px',
                        color: '#fff',
                        fontWeight: '900',
                    }}
                >
                    BERTA.codes
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
                <div style={{ color: '#fff', fontSize: '16px' }}>
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
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: black;
`;
const FrontEndDev = styled.p`
    font-family: Roboto;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
`;
const Image = styled.img`
    border-radius: 50%;
    height: 400px;
    margin-top: 5vh;
    transform: rotate(47deg);
    @media (max-width: 768px) {
        margin-top: 6vh;
    }
`;
const Icons = styled.p`
    font-size: 20px;
    color: #fff;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`;
export default IndexPage;
