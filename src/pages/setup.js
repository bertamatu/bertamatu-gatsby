import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import SetupItem from '../components/SetupItem';
import SetupData from '../data/setup.json';

const Setup = () => {
    return (
        <Layout>
            <Container>
                {SetupData.map(item => (
                    <SetupItem item={item} />
                ))}
            </Container>
        </Layout>
    );
};

export default Setup;

const Container = styled('div')`
    margin-top: 16vh;
    padding: 0 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`;
