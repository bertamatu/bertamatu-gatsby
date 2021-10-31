import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
// import SocialIcons from './../buttons/SocialIcons';
// import Footer from './../Footer';


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <Navigation>
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


                {/* TODO add this later */}
                {/* <Picture
                    alt="bertacodes"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEsbeAW_pIBXQ/profile-displayphoto-shrink_200_200/0/1630502878061?e=1636588800&v=beta&t=VuB_Izb3lblE9djluWl4KGJKbUF_27vpK_XT_VOrJZ0"
                />
                <br/>
                <NavbarLinks />
                <div style={{marginTop: '10vh', width: '100vw', textAlign: 'center'}}>
                    <SocialIcons />
                    <Footer />
                </div> */}

            </Navigation>
        </>
    );
};

const Navigation = styled.nav`
    height: 5vh;
    display: flex;
    position: relative;
    justify-content: center;
    text-transform: uppercase;
    padding: 5vh 3vw;
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
    padding: 0 7vw;

    @media (max-width: 768px) {
        display: flex;
    }
`;
const Navbox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 15vh;
        background: #fff;
        transition: all 0.4s ease-in;
        top: 0;
        left: ${props => (props.open ? '-100%' : '0')};
    }
`;
const Hamburger = styled.div`
    background-color: #000;
    width: 30px;
    height: 3px;
    transition: all 0.2s linear;
    align-self: center;
    position: relative;
    align-self: center;
    margin-right: 80vw;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

    ::before,
    ::after {
        width: 18px;
        height: 3px;
        background-color: #000;
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

// const Picture = styled.img`
//     border-radius: 50%;
//     height: 100px;
//     margin-bottom: 10px;
// `;

export default Navbar;
