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
// import HomePageLogo from '../components/common/HomePageLogo';

const IndexPage = ({ data }) => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            {/* <HomePageLogo /> */}
            <FrontEndDev>
                <img
                    src="https://media.giphy.com/media/7BcL8GvcMgTyE/giphy.gif?cid=ecf05e477ngp52f81zm1x5y8tz4txcanu38e549jj98gybsg&rid=giphy.gif&ct=g"
                    alt="bertacodes"
                    style={{ borderRadius: '50%' }}
                />
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
                <br />
                <strong>zero to mastery</strong>
            </FrontEndDev>
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
`;
const FrontEndDev = styled.p`
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
    color: black;
`;
const Icons = styled.p`
    font-size: 20px;
    margin: 0;
    margin-top: -3.5rem;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 22px;
        margin-top: -80px;
    }
`;
export default IndexPage;
