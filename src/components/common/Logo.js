import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoContainer>
            <LogoDesign to="/">berta.codes</LogoDesign>
            <DescriptionText>
                self-taught front-end software engineer
            </DescriptionText>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    text-align: center;
    margin-left: 6px;
`;
const LogoDesign = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 3.2rem;
    letter-spacing: 2px;
    font-family: 'Yeseva One';
    text-transform: uppercase;
    :hover {
        color: #fc6c85;
        transition: 0.5s ease;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const DescriptionText = styled.p`
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin: 10px, 0;
    padding-bottom: 1rem;
    color: black;
    @media (max-width: 768px) {
        display: none;
    }
`;

export default Logo;
