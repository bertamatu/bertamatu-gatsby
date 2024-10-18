import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import '../style/layout.css';
import CookieConsent from 'react-cookie-consent';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import GlobalStyles from '../style/GlobalStyles';
import { Helmet } from 'react-helmet';

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
    marginTop: '10vh',
  };

  const cookieConsentStyle = {
    background: 'rgb(244 244 244)',
    fontSize: '16px',
    color: '#000',
    width: '100%',
    border: '1px solid white',
    borderRadius: '4px',
    justifyContent: 'center',
    padding: `${isMobileView ? '0 30px' : '0 250px'}`,
  };

  const buttonStyle = {
    background: '#000',
    color: '#fff',
    borderRadius: '4px',
    padding: '16px',
    fontWeight: '900',
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>BERTA.CODES</title>
        <meta name="description" content="Berta Matuliauskiene's portfolio." />
        <meta
          name="keywords"
          content="bertacodes, berta.codes, berta matuliauskiene, wecodeui"
        />
        <meta charset="UTF-8" />
        <meta name="author" content="Berta Matuliauskiene" />
      </Helmet>
      <GlobalStyles />
      <section style={sectionStyle}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <CookieConsent
          name="Accept cookies"
          id="rcc-confirm-button"
          aria-label="Accept cookies"
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
            We want to let you know that we use cookies on this website. To
            agree, please click the "Accept" button. You can withdraw your
            consent at any time by changing your browser settings.{' '}
            <a
              href="https://www.iubenda.com/privacy-policy/96553161/cookie-policy"
              target="_blank"
              rel="noreferrer"
              name="Cookie Policy"
              aria-label="Cookie Policy"
            >
              Cookie Policy.
            </a>
          </div>
        </CookieConsent>
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
