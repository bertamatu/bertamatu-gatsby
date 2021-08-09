import React from 'react';
import styled from 'styled-components';

const ConnectButton = () => {
    return (
        <>
            <Button
                href="https://www.linkedin.com/in/bertam/"
                target="_blank"
                rel="noopener noreferrer"
            >
                let's connect
            </Button>
        </>
    );
};

export default ConnectButton;

const Button = styled.a`
    text-decoration: none;
    background-color: black;
    padding: 4px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
    width: 140px;
    height: 34px;
    text-align: center;
    :hover {
        background-color: #fc6c85;
        transition: 0.3s ease-in-out;
    }
`;
