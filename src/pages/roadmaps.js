import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Roadmap = () => {

  return (
    <Layout>
      <Container>
        <Text>
         Let's transform your coding dreams into reality together!
        </Text>
      <a href='https://www.bertacodes.com/products/front-end-developer-roadmap'>
          <img 
            src='https://www.bertacodes.com/cdn/shop/files/Screenshot2024-03-09at15.52.47.png?v=1709992398&width=823' 
            style={{ height: '60%', maxHeight: '500px' }} 
            alt='bertacodes front-end developer roadmap'
          />
          </a>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  margin-top: 8vh;
  text-align: center;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  padding: 4vw;
    @media (max-width: 768px) {
      margin-top: 10vh;
  }
`;

const Text = styled.div`
margin-bottom: 2vh
`;

export default Roadmap;
