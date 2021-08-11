import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/About">ABOUT</NavItem>
            <NavItem to="/Projects">PROJECTS</NavItem>
            <NavItem to="/Gallery">GALLERY</NavItem>
            <NavItem to="/Blog">BLOG</NavItem>
            <NavItem to="/Links">LINKS</NavItem>
            <NavItem to="/Setup">SETUP</NavItem>
            <NavItem to="/Contact">CONTACT</NavItem>
        </>
    );
};

const NavItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: inline-block;
    white-space: nowrap;
    margin: 1vw 1vw;
    transition: all 200ms ease-in;
    position: relative;
    font-size: 0.7rem;
    font-family: Roboto;
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: '';
        color: transparent;
        background: #fc6c85;
        height: 1px;
        transition: all 0.4s ease-in;
    }
    :hover {
        ::after {
            width: 100%;
        }
    }
    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 4rem;
        z-index: 6;
        color: #000;
    }
`;

export default NavbarLinks;
