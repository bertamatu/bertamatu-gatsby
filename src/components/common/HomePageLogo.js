import React from 'react';
import styled from 'styled-components';

const HomePageLogo = () => {
    return (
        <HomeLogo>
            <LogoText>Berta</LogoText>
            <Description>Software Engineer</Description>
        </HomeLogo>
    );
};

const Description = styled.div`
    margin: 0 auto;
    text-transform: uppercase;
    letter-spacing: 11px;
    padding-left: 11px;
    font-size: 11px;
    padding-bottom: 16px;
    @media (max-width: 768px) {
        font-size: 11px;
        margin: 0 auto;
        padding-left: 11px;
    }
`;

const HomeLogo = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -10px;
`;

const LogoText = styled.div`
    font-family: none;
    /* background-image: url('https://media.giphy.com/media/1Aeg7GZ6tIor81AAIH/giphy.gif'); */
    /* background-image: url('https://media.giphy.com/media/l41lNx6qN1EB1jh9S/giphy-downsized.gif'); */
    // background-image: url('https://media.giphy.com/media/3o6ZsVGl3vuG5g0Kic/giphy-downsized.gif'); */
    background-size: 23%;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    font-weight: 900;
    font-size: 128px;
    line-height: 1;
    text-align: center;
    color: black;
    text-shadow: -4px 2px 4px rgb(0 0 0 / 40%),
        2px -5px 4px rgb(255 255 255 / 18%);
    padding-top: 10px;

    -webkit-animation: tracking-in-expand 3s cubic-bezier(0.215, 0.61, 0.355, 1)
        both;
    animation: tracking-in-expand 3s cubic-bezier(0.215, 0.61, 0.355, 1) both;

    @-webkit-keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes tracking-in-expand {
        0% {
            letter-spacing: -0.5em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`;

export default HomePageLogo;
