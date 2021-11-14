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
                let's connect and talk
            </Button>
        </>
    );
};

export default ConnectButton;

const Button = styled.a`
    width: 302px;
    padding: 10px;
    text-decoration: none;
    background-color: black;
    color: #fff;
    font-family: Ubuntu, Roboto;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: #fc6c85;
        transition: 0.3s ease-in-out;
    }
`;
