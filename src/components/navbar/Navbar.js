import React, { useState, useEffect } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import SocialIcons from '../buttons/SocialIcons';

const isBrowser = typeof window !== "undefined";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(isBrowser ? window.innerWidth <= 768 : false);

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (!isMobile && navbarOpen) {
          setNavbarOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [navbarOpen, isMobile]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Navigation>
      <Toggle onClick={toggleNavbar}>
        {isMobile ? (
          navbarOpen ? <CloseIcon /> : <HamburgerMobileIcon />
        ) : null}
        <NavContainer open={navbarOpen && isMobile}>
          {isMobile && (
            <header>
              <CloseIcon onClick={toggleNavbar} />
            </header>
          )}
          <NavbarLinks />
          {isMobile && (
            <Footer>
              <SocialIcons />
            </Footer>
          )}
        </NavContainer>
      </Toggle>
      {!isMobile && <NavbarLinks />}
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
  display: flex;
  align-items: center;
  height: 100%;
  width: 100vw;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
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
