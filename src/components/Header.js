import React from 'react';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';
import ConnectButton from './buttons/Connect';
// import Logo from './navbar/Logo';

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 200px;
    position: fixed;
    background-color: #fff;
`;

const HeaderItems = styled.section`
    display: flex;
    position: absolute;
    top: 35%;
    width: 100%;
    margin: 0 20px;
`;

const Header = () => (
    <HeaderStyle>
        <Navbar />
        <HeaderItems>
            <ConnectButton />
            {/* <Logo /> */}
        </HeaderItems>
    </HeaderStyle>
);

export default Header;
