import React, { useState, useEffect } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import SocialIcons from '../buttons/SocialIcons';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        if (!isMobile && navbarOpen) {
            setNavbarOpen(false);
        }
    }, [isMobile, navbarOpen]);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <Navigation>
            {isMobile ? (
                <Toggle onClick={toggleNavbar}>
                    {!navbarOpen ? <HamburgerMobileIcon /> : <CloseIcon />}
                    <NavContainer open={navbarOpen}>
                        <header>
                            <CloseIcon onClick={toggleNavbar} />
                        </header>
                        <NavbarLinks />
                        <Footer>
                            <SocialIcons />
                        </Footer>
                    </NavContainer>
                </Toggle>
            ) : (
                <NavbarLinks />
            )}
        </Navigation>
    );
};

export default Navbar;

const Navigation = styled.nav`
    z-index: 1;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    background-color: var(--light-gray);

    @media (max-width: 768px) {
        position: sticky;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
    }
`;

const Toggle = styled.div`
    display: none;
    height: 100%;
    width: 100vw;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

const NavContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background: var(--light-gray);
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
    top: 0;
    top: ${props => (props.open ? '0' : '-100%')};

    @media (max-width: 768px) {
        padding-top: 100px;
    }
`;

const SharedIconStyle = `
    color: var(--black-color);
    font-size: 26px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
`;

const HamburgerMobileIcon = styled(HiMenu)`
    ${SharedIconStyle}
`;

const CloseIcon = styled(CgClose)`
    ${SharedIconStyle}
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
`;
