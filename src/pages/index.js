import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';
import TechIcons from '../components/common/TechIcons';
import ConnectButton from '../components/buttons/Connect';

const IndexPage = () => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <HomePageLogo/>
            <TechIcons />
            <Image
                src='https://media.giphy.com/media/5UutpfMIjPbZGI4van/source.gif'
                alt="bertacodes"
            />
            <ConnectButton />
            <SocialIcons />
            <AdditionalText> zerotomastery </AdditionalText>
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Image = styled.img`
    height: 50vh;
    display: block;
    margin: 0 auto;
`;

const AdditionalText = styled.div`
   color: black,;
   font-size: 16px; 
   letter-spacing: 30px;
   text-align: center;
   margin-top: 10px;
   margin-left: 30px;
   text-transform: uppercase;
   font-family: Ubuntu;
   @media (max-width: 768px) {
        font-size: 12px;
        letter-spacing: 10px;
    }
`;

export default IndexPage;
