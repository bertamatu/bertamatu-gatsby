import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/About">ABOUT</NavItem>
            <NavItem to="/Projects">PROJECTS</NavItem>
            {/* <NavItem to="/Gallery">GALLERY</NavItem> */}
            {/* <NavItem to="/Blog">BLOG</NavItem> */}
            <NavItem to="/Links">LINKS</NavItem>
            {/* <NavItem to="/Setup">SETUP</NavItem> */}
            <NavItem to="/Contact">CONTACT</NavItem>
        </>
    );
};

export default NavbarLinks;

const NavItem = styled(Link)`
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    margin: 1vw 1vw;
    transition: all 200ms ease-in;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    color: white;
    font-family: Ubuntu;
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
        transition: all 0.2s ease-in;
        ::after {
            width: 100%;
        }
    }
    @media (max-width: 768px) {
        padding: 8px 40px;
        margin-left: 25px;
        font-size: 30px;
        z-index: 6;
        align-self: baseline;
        font-weight: 400;
        font-family: -apple-system, Roboto, Ubuntu, Cantarell, 'Open Sans', sans-serif;

        :hover {
        font-weight: 900;
        transition: all 0.3s ease-in-out;
        }
    }
`;
