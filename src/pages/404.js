import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '200px',
            }}
        >
            404 - You just hit a route that doesn&#39;t exist... the sadness:(
        </div>
    </Layout>
);

export default NotFoundPage;
