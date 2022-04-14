import React from 'react';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';

const Header = () => (
    <HeaderStyle>
        <Navbar />
    </HeaderStyle>
);

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    background-color: #fff;
`;

export default Header;
