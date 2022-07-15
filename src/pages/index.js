import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SocialIcons from '../components/buttons/SocialIcons';
import HomePageLogo from '../components/common/HomePageLogo';
import ConnectButton from '../components/buttons/Connect';
// import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => (
    <HomePage>
        <Layout>
            <Image>
                {/* <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    alt="bertacodes"
                /> */}
                <img
                    src="https://media.giphy.com/media/uB86ZyWQsnFSGYe2sA/giphy.gif"
                    alt="bertacodes"
                    style={{filter: "hue-rotate(100deg)", margin: "0"}}
                />
            </Image>
            <Seo title="Home" />
            <HomePageLogo />
            <ConnectButton />
            <SocialIcons />
        </Layout>
    </HomePage>
);

// export const data = graphql`
//     query BackgroundImage {
//         file(relativePath: { eq: "flws.png" }) {
//             childImageSharp {
//                 gatsbyImageData(layout: FULL_WIDTH)
//             }
//         }
//     }
// `;

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

const Image = styled.div`
    max-width: 300px;
    margin: 0 auto;
    // box-shadow: rgba(0, 0, 0, 0.45) 20px 25px 0 -20px;
    // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export default IndexPage;
