import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Wecodeui = () => {
    return (
      <Layout>
        <Container>
          <a href="https://discord.gg/8jTngJUYMk"  rel='noopener noreferrer' target='_blank'> 
            <img src="https://www.wecodeui.com/cdn/shop/files/7_570e8c5f-193f-4ac9-8432-dbd9c701694b.png?v=1713623944&width=140" alt="wecodeui" />
          </a>
          <h1><code>Welcome to WeCodeUI!</code></h1>
           <Code>
           <br />
            Greetings, Front-end explorer!<br />
            <br />
            You've found yourself at the starting line of something truly special! 
            Here at <strong>WeCodeUI</strong>, we're laying the foundation for an incredible community.
            <br />
            <br />
            <strong>Our main vision</strong> is to be as close as possible to the daily routine of a Front-end Developer, especially for self-taught individuals who are looking for their first official dev job. 
            We want to provide you with the discipline, tools, resources, and support you need to grow your skills and knowledge.
            <br />
            <br />
            <strong>
              It's a space where learning meets fun, where curiosity meets answers, and where strangers meet teammates.<br />
            </strong>
            <br />
            Don't hesitate!<br />
            We can't wait to meet you!
            <br />
            <br />
            <a href="https://discord.gg/8jTngJUYMk" target='_blank' rel='noopener noreferrer'>
              Click here to join our Discord server with a free invite!
            </a>
            <br />
            <br />
            <hr />
            <FooterText>
              <strong>* * *</strong>
              <br />
              The founder behind this idea is me,{' '}
              <a href="https://instagram.com/berta.codes" target='_blank' rel='noopener noreferrer'>
                Berta.codes
              </a>.
              I am a self-taught developer who switched careers from finance to tech in 2020! 
              I have some experiences to share to make your journey less of a bumpy ride! If you want to make your journey even more fun, you may get my roadmap{' '}
              <a href="https://www.wecodeui.com/products/front-end-developer-roadmap" target='_blank' rel='noopener noreferrer'>
                here
              </a>
              .
            </FooterText>
          </Code>
        </Container>
      </Layout>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const Code = styled.code`
    text-align: justify;
    padding:  0 40px 10px 40px;
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
`;

const FooterText = styled.p`
    text-align: justify;
    font-size: 12px;
`;

export default Wecodeui;
