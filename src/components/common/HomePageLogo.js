import React from 'react';
import styled from 'styled-components';

const HomePageLogo = () => {
    return (
        <HomeLogo>
            <LogoText>
                {`<BERTA/>`}
            </LogoText>
            <Description>Front-end Software Engineer</Description>
        </HomeLogo>
    );
};

const Description = styled.div`
    margin: 0 auto;
    font-family: 'Ubuntu';
    text-transform: uppercase;
    margin-top: 10px;
    letter-spacing: 6px;
    @media (max-width: 768px) {
      letter-spacing: 2px;
      font-size: 13px;
    }
    ` 

const HomeLogo = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
`;

const LogoText = styled.div`
    /* background-image: url('https://media.giphy.com/media/1Aeg7GZ6tIor81AAIH/giphy.gif'); */
    /* background-image: url('https://media.giphy.com/media/l41lNx6qN1EB1jh9S/giphy-downsized.gif'); */
    /* background-image: url('https://media.giphy.com/media/3o6ZsVGl3vuG5g0Kic/giphy-downsized.gif'); */
    background-size: 23%;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    font-family: Ubuntu;
    font-weight: 900;
    font-size: 100px;
    line-height: 1;
    text-align: center;
    color: black;
    text-shadow: -5px 2px 4px rgb(0 0 0 / 40%),
        2px -5px 6px rgb(255 255 255 / 18%);
    @media (max-width: 768px) {
        background-size: 90%;
        font-size: 50px;
    }
`;

export default HomePageLogo;
