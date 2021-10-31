import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <h1>NOT FOUND</h1>
        <div>You just hit a route that doesn&#39;t exist... the sadness:(</div>
    </Layout>
);

export default NotFoundPage;
