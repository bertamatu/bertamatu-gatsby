import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';
import TechIcons from '../components/common/TechIcons';
import ConnectButton from '../components/buttons/Connect';
import Flowers from '../data/images/flowersBckg.png'

const IndexPage = () => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <HomePageLogo />
            <TechIcons />
            <ConnectButton />
            <SocialIcons />
            <AdditionalText>z e r o t o m a s t e r y</AdditionalText>
        </Layout>
        <Image
          src={Flowers}
          alt="bertacodes"
        />
    </HomePage>
);

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
`;

const Image = styled.img`
    height: auto;
    width: 100%
    display: block;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    z-index: -1;
    @media (max-width: 768px) {
      min-width:100vw
  }
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
