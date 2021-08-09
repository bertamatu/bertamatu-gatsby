import React from 'react';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';
import ConnectButton from './buttons/Connect';
import SocialIcons from './buttons/SocialIcons';
import Logo from './common/Logo';

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    height: 200px;
    background-color: #fff;
`;

const HeaderItems = styled.section`
    position: absolute;
    top: 8vh;
    display: flex;
    justify-content: space-around;
    width: calc(100% - 30px);
`;

const Header = () => (
    <HeaderStyle>
        <HeaderItems>
            <ConnectButton />
            <Logo />
            <SocialIcons />
        </HeaderItems>
        <Navbar />
    </HeaderStyle>
);

export default Header;
