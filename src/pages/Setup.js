import React from 'react';
import Layout from '../components/Layout';
import SetupItem from '../components/SetupItem';
import SetupData from '../data/setup.json'
import styled from 'styled-components'

const Setup = () => {
    return (
        <Layout>
            <Container>
                {
                    SetupData
                        .map(item => {
                            return <SetupItem item={item}/>
                        })
                }
            </Container>
        </Layout>
    );
};

export default Setup;

const Container = styled('div')`
margin-top: 11vh;
display: flex;
flex-direction: column;
justify-content: center;
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`
