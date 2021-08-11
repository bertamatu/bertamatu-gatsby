import React from 'react';
import Layout from '../components/Layout';

const Setup = () => {
    return (
        <Layout>
            <div
                style={{
                    width: '100vw',
                    // height: '100vh',
                    fontSize: '14px',
                    position: 'absolute',
                    top: '20vh',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    verticalAlign: 'center',
                    flexDirection: 'column',
                    fontWeight: '900',
                    paddingTop: '140px',
                }}
            >
                <p style={{ margin: '0 auto' }}>... UNDER CONSTRUCTION ...</p>
                <img
                    style={{
                        height: '250px',
                        width: '250px',
                        margin: '0 auto',
                    }}
                    src="https://media.giphy.com/media/DS89v1NqpzCqA/giphy.gif"
                    alt="soon"
                />
            </div>
        </Layout>
    );
};

export default Setup;
