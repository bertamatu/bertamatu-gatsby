import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';
// import TechIcons from '../components/common/TechIcons';
import ConnectButton from '../components/buttons/Connect';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


const IndexPage = ({data}) => (
    <HomePage>
        <Layout>
            <Seo title="Home" />
            <HomePageLogo />
            {/* <TechIcons /> */}
            <ConnectButton />
            <SocialIcons />
            {/* <AdditionalText>z e r o t o m a s t e r y</AdditionalText> */}
        </Layout>
        <Image>
          <Img fluid={data.file.childImageSharp.fluid} alt="bertacodes" />
        </Image>
    </HomePage>
);

export const data = graphql`
  query BackgroundImage {
    file(relativePath: {eq: "flowersBckg.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const HomePage = styled.section`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15vh;
`;

const Image = styled.div`
    width: 100%
    z-index: -1;
    position: relative;
    bottom: -5vh;
    @media (max-width: 868px) {
      display: none;
  }
`;

// const AdditionalText = styled.div`
//     font-size: 16px;
//     text-align: center;
//     text-transform: uppercase;
//     @media (max-width: 768px) {
//         font-size: 12px;
//     }
// `;

export default IndexPage;
