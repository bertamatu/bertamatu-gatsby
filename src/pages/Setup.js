import React from 'react';
import Layout from '../components/Layout';

const Setup = () => {
    return (
        <Layout>
            <div
                style={{
                    width: '100vw',
                    fontSize: '24px',
                    position: 'absolute',
                    top: '20vh',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    verticalAlign: 'center',
                    flexDirection: 'column',
                    fontWeight: '900',
                    paddingTop: '140px',
                    fontFamily: 'Roboto',
                }}
            >
                <p
                    style={{
                        margin: '0 auto',
                        color: 'salmon',
                        textAlign: 'center',
                    }}
                >
                    Sorry for the dust!
                    <br />
                    The setup section is COMMING SOON!
                    <h6>
                        ... in the meantime, you could share your favorite music
                        with me by adding songs to this playlist :)
                    </h6>
                </p>
                <br />

                <iframe
                    src="https://open.spotify.com/embed/playlist/7pDnkIkcMzSU6r3Op51qeH"
                    width="300"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="bertacodes"
                    style={{ filter: 'grayscale(100%)', margin: '0 auto' }}
                />

                {/* <iframe
                    src="https://open.spotify.com/embed/playlist/2ZiQSPtyue1RmH6mjXLnWj"
                    width="300"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="bertacodes"
                    style={{ filter: 'grayscale(100%)', margin: '0 auto' }}
                ></iframe> */}
            </div>
        </Layout>
    );
};

export default Setup;
