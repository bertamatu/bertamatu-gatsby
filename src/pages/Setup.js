import React from 'react';
import Layout from '../components/Layout';

const Setup = () => {
    return (
        <Layout>
            <div
                style={{
                    width: '100%',
                    fontSize: '14px',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    verticalAlign: 'center',
                    flexDirection: 'column',
                    fontWeight: '600',
                    paddingTop: '140px',
                    fontFamily: 'Roboto',
                    textTransform: 'uppercase',
                }}
            >
                <p
                    style={{
                        margin: '0 auto',
                        color: '#fc6c85',
                        textAlign: 'center',
                    }}
                >
                    Sorry for the dust!
                    <br />
                    The setup section is COMMING SOON!
                </p>
                <br />

                <iframe
                    src="https://open.spotify.com/embed/playlist/7pDnkIkcMzSU6r3Op51qeH"
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="bertacodes"
                    style={{ filter: 'grayscale(100%)', margin: '0 auto' }}
                />
            </div>
        </Layout>
    );
};

export default Setup;
