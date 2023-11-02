import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';
import ConnectButton from '../components/buttons/Connect';

const IndexPage = ({ data }) => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <HomePageLogo />
            <ConnectButton />
            <SocialIcons />
        </Layout>
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
`;

export default IndexPage;
