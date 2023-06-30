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
        fontSize: '12px',
        color: '#000',
        boxShadow:
            'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        width: '100%',
        border: '1px solid white',
        borderRadius: '4px',
        justifyContent: 'center',
        padding: `${isMobileView ? '0 30px' : '0 250px'}`,
    };

    const buttonStyle = {
        background: '#a6f7d3',
        borderRadius: '4px',
    };

    return (
        <section style={sectionStyle}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <CookieConsent
                location="bottom"
                buttonText="Accept and Close"
                cookieName="gatsby-gdpr-google-analytics"
                style={cookieConsentStyle}
                buttonStyle={buttonStyle}
                onAccept={() => {
                    initializeAndTrack(location);
                }}
            >
                <div style={{ textAlign: 'justify' }}>
                    We want to let you know that we use cookies on this website.
                    To agree, please click the "Accept" button. You can withdraw
                    your consent at any time by changing your browser settings.{' '}
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
