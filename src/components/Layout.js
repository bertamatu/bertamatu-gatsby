import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import '../style/layout.css';
import CookieConsent from 'react-cookie-consent';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        link
                        name
                    }
                }
            }
        }
    `);

    const location = useLocation();
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        marginTop: '5vh',
    };

    const cookieConsentStyle = {
        backgroundColor: '#e3e3e3',
        fontSize: '0.7rem',
        color: '#000',
        transform: 'translateY(-20%)',
        boxShadow:
            'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        width: '100%',
        border: '1px solid white',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `${isMobileView ? '0 30px' : '0 100px'}`,
    };

    const buttonStyle = {
        background: '#a6f7d3',
        borderRadius: '4px',
        fontWeight: 'bold',
    };

    const declineButtonStyle = {
        backgroundColor: 'transparent',
        borderRadius: '4px',
        color: '#919191',
    };

    return (
        <section style={sectionStyle}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Reject"
                cookieName="gatsby-gdpr-google-analytics"
                enableDeclineButton
                expires={150}
                style={cookieConsentStyle}
                buttonStyle={buttonStyle}
                declineButtonStyle={declineButtonStyle}
                onAccept={() => {
                    initializeAndTrack(location);
                }}
            >
                <div style={{ textAlign: 'justify' }}>
                    I'm thrilled to have you here at{' '}
                    <strong>Berta Codes</strong>! By clicking{' '}
                    <strong>'Accept'</strong>, you're giving me the green light
                    to use cookies and work my magic in creating a personalized
                    experience just for you!{' '}
                    <a
                        style={{ color: '#4287db' }}
                        href="https://www.iubenda.com/privacy-policy/96553161/cookie-policy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Cookie Policy.
                    </a>
                </div>
            </CookieConsent>
        </section>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
