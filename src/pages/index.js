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
            <HomePageLogo />
            <Image
                src="https://media.giphy.com/media/5UutpfMIjPbZGI4van/source.gif"
                alt="bertacodes"
            />
            <TechIcons />
            <ConnectButton />
            <SocialIcons />
            <AdditionalText>z e r o t o m a s t e r y</AdditionalText>
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90%;
    width: 100%;
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Image = styled.img`
    height: 40vh;
    display: block;
    margin: 0 auto;
`;

const AdditionalText = styled.div`
/    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export default IndexPage;
