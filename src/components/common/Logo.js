import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Logo = () => {
    return <LogoDesign to="/">@berta.codes</LogoDesign>;
};

const LogoDesign = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 2px;
    font-family: -apple-system, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    :hover {
        font-size: 20px;
        transition: 0.3s ease-in-out;
    }
    @media (max-width: 768px) {
        padding-left: 1.5rem;
        font-size: 12px;
        font-weight: 400;
    }
`;

export default Logo;
