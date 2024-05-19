import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/">HOME</NavItem>
            <NavItem to="/about">ABOUT</NavItem>
            <NavItem to="/roadmaps">ROADMAPS</NavItem>
            <NavItem to="/wecodeui">DISCORD</NavItem>
            {/* <NavItem to="/projects">PROJECTS</NavItem> */}
            {/* <NavItem to="/gallery">GALLERY</NavItem> */}
            {/* <NavItem to="/blog">BLOG</NavItem> */}
            <NavItem to="/setup">SETUP</NavItem>
            <NavItem to="/links">LINKS</NavItem>
            {/* <NavItem to="/support">SUPPORT</NavItem> */}
            <NavItem to="/contact">CONTACT</NavItem>
        </>
    );
};

export default NavbarLinks;

const NavItem = styled(Link)`
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    margin: 10px 10px;
    // transition: all 200ms ease-in;
    position: relative;
    font-size: 12px;
    font-weight: 900;
    color: var(--black-color);

    &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0;
        content: '';
        background: var(--red-color);
        height: 2px;
        transition: width 0.4s ease-in;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        margin-left: 60px;
        font-size: 24px;
        z-index: 3;
        align-self: baseline;
        font-weight: 100;

        &:hover {
            font-weight: 900;
            transition: font-weight 0.3s ease-in-out;
        }
    }
`;

