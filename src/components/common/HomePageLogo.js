import React from 'react';
import styled from 'styled-components';

const HomePageLogo = () => {
    return (
        <HomeLogo>
            <LogoText>BERTA.CODES</LogoText>
        </HomeLogo>
    );
};

const HomeLogo = styled.div`
    z-index: 999;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LogoText = styled.div`
    background-image: url('https://media.giphy.com/media/l0MYwXxKiwW39Dwcw/giphy.gif?cid=ecf05e475aqktp84hju69ldezdfpo6zmuknp8fq33qjqk7si&rid=giphy.gif&ct=g');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    font-family: Roboto;
    font-weight: 900;
    font-size: 70px;
    line-height: 1;
    letter-spacing: -2px;
    width: 100vw;
    align-items: center;
    text-shadow: -5px 2px 4px rgb(0 0 0 / 40%),
        2px -5px 6px rgb(255 255 255 / 18%);
    @media (max-width: 768px) {
        background-size: 90%;
    }
`;

export default HomePageLogo;
