import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';
import styled from 'styled-components';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Navigation>
            <Logo />
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </Navigation>
    );
};

const Navigation = styled.nav`
    height: 7vh;
    display: flex;
    background: rgba(0, 0, 0, 0.9);

    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: 0 3vw;
    z-index: 2;
    align-self: center;

    @media (max-width: 768px) {
        position: sticky;
        height: 7vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`;
const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 10vw;

    @media (max-width: 768px) {
        display: flex;
    }
`;
const Navbox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;

        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 15vh;
        background: #eb3349;
        background: -webkit-linear-gradient(to left, #f45c43, #ea2e44);
        background: linear-gradient(to left, #f45c43, #ea2e44);
        transition: all 0.35s ease-in;
        top: 6vh;
        left: ${props => (props.open ? '-100%' : '0')};
    }
`;
const Hamburger = styled.div`
    background-color: red;
    width: 30px;
    height: 3px;
    transition: all 0.3s linear;
    align-self: center;
    position: relative;
    align-self: center;
    margin-right: -3rem;

    transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: white;
        content: '';
        position: absolute;
        transition: all 0.3s linear;
    }
    ::before {
        transform: ${props =>
            props.open
                ? 'rotate(-90deg) translate(-10px, 0px)'
                : 'rotate(0deg)'};
        top: -10px;
    }
    ::after {
        opacity: ${props => (props.open ? '0' : '1')};
        transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
        top: 10px;
    }
`;

export default Navbar;
