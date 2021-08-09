import React from 'react';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';
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

const Header = () => (
    <HeaderStyle>
        <Navbar />
        {/* <Logo /> */}
    </HeaderStyle>
);

export default Header;
