import React from 'react';
import Layout from '../components/Layout';
import SetupItem from '../components/SetupItem';
import SetupData from '../data/setup.json'

const Setup = () => {
    return (
        <Layout>
            {
                SetupData
                .map(item => {
                    return <SetupItem item={item}/>
                })
            }
        </Layout>
    );
};

export default Setup;
