import React from 'react';
import Layout from '../components/Layout';
import Posts from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styled from 'styled-components';

const MainContent = styled.main`
    width: 100vw;
    position: absolute;
    top: 35%;
    z-index: -1;
`;

const GalleryPage = () => {
    return (
        <Layout>
            <MainContent>
                <Posts token={process.env.GATSBY_POSTS} counter="12" />
            </MainContent>
        </Layout>
    );
};

export default GalleryPage;
