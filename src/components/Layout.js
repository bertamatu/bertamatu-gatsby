import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import './layout.css';

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

    return (
        <section style={{ marginTop: '200px' }}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
        </section>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
