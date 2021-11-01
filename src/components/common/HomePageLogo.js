import React from 'react';
import styled from 'styled-components';

const HomePageLogo = () => {
    return (
        <HomeLogo>
            <LogoText>
                {`<BERTA/>`}
            </LogoText>
        </HomeLogo>
    );
};

const HomeLogo = styled.div`
    z-index: 999;
    display: flex;
    justify-content: center;
`;

const LogoText = styled.div`
    /* background-image: url('https://media.giphy.com/media/1Aeg7GZ6tIor81AAIH/giphy.gif'); */
    /* background-image: url('https://media.giphy.com/media/NmZiWc4qnUDeDyswsN/giphy-downsized-large.gif'); */
    background-size: 25%;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    font-family: Ubuntu;
    font-weight: 900;
    font-size: 90px;
    line-height: 1;
    letter-spacing: -2px;
    text-align: center;
    width: 100%;
    color: black;

    /* text-shadow: -5px 2px 4px rgb(0 0 0 / 40%),
        2px -5px 6px rgb(255 255 255 / 18%); */
    @media (max-width: 768px) {
        background-size: 90%;
        font-size: 60px;
    }
`;

export default HomePageLogo;
