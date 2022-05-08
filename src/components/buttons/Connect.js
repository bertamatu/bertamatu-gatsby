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
                let's get social
            </Button>
        </>
    );
};

export default ConnectButton;

const Button = styled.a`
    width: 302px;
    padding: 10px;
    text-decoration: none;
    background-color: #fa1e3f;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    letter-spacing: 1px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    :hover {
        transition: 0.3s ease-in-out;
        background-color: #000;
    }
`;
