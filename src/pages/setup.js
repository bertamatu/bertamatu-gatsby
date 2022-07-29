import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Setup = () => {
    return (
        <Layout>
            <Container>
                {/* {SetupData.map(item => <SetupItem item={item} />)} */}
                <code>
                    I'm sorry, I don't provide any information about the setup
                    at the moment.
                    <br />
                    <br />
                    But maybe you would like to connect with me on{' '}
                    <a
                        href="https://www.linkedin.com/in/bertam/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    ?
                    <br />
                    <br />
                    Have a fantastic day!:)
                </code>
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
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`;
