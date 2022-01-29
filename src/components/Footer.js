import React from 'react';
import styled from 'styled-components';

const footer = () => {
    return (
        <Footer>
            <FooterText>STAY CURIOUS</FooterText>
            <FooterDate>© {new Date().getFullYear()} BERTA CODES</FooterDate>
        </Footer>
    );
};

const Footer = styled.footer`
    height: 4vh;
    color: white;
    font-size: 0.6rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const FooterText = styled.footer`
    position: absolute;
    left: 2rem;
    letter-spacing: 12px;
    color: black;
`;
const FooterDate = styled.section`
    position: absolute;
    right: 3vw;
    color: black;
`;

export default footer;
