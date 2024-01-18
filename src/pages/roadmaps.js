import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Roadmaps = (props) => {

  return (
    <Layout>
      <Container>
        <Text>
          Exciting news for all aspiring Front-end developers! 
          <br /><br />
          I am thrilled to announce the grand opening of my e-shop at <a href="http://www.bertacodes.com" target="_blank" rel="noreferrer">www.bertacodes.com</a>.<br/>
          <br />
          It is never too late to commence a learning journey, and I am here to facilitate your path. With a passion for Front-end development honed over approximately 3.5 years, I am excited to share my insights and expertise with you.
          <br /><br />
          <strong>Presenting My Awesome Guide: React js/TypeScript/Jest and More!</strong><br />
          Dive into the world of Front-end development through my comprehensive guide, encompassing React js, TypeScript, Jest, and the foundational aspects of HTML, CSS, and JS. Acquire valuable insights into additional tools and methodologies that will empower you in your coding journey.
          <br /><br />
          <strong>Guide Launch Date: February 1, 2024</strong><br />
          Mark your calendars! The eagerly awaited guide will be live on February 1, 2024. Prepare to enhance your skills and expedite your journey towards becoming a proficient Front-end developer.
          <br /><br />
          <strong>Why Opt for My Guides?</strong><br />
          As an experienced Front-end developer, I comprehend the challenges associated with initiating a career in this dynamic field. My guides are meticulously crafted to facilitate your transition into your first Front-end development role, enabling you to navigate challenges with confidence and minimizing stress along the way.
          <br /><br />
          <strong>Subscribe to the Newsletter</strong><br />
          Stay informed and be among the first to access the guide! Subscribe to my e-shop newsletter for timely updates, exclusive content, and special offers. Do not miss this opportunity to elevate your Front-end development skills.
          <br /><br />
          Thank you for your support and enthusiasm!
          <br /><br />
          Visit  <a href="http://www.bertacodes.com" target="_blank" rel="noreferrer">www.bertacodes.com</a> to explore, learn, and thrive in the world of Front-end development!
        </Text>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  margin-top: 5%;
  text-align: center;
`;

const Text = styled.article`
    margin: 80px auto;
    font-size: 13px;
    color: black;
    text-align: justify;
    padding: 0 50px;
    width: 100%;
    @media (min-width: 768px) {
        width: 55vw;
        font-size: 14px;
    }
`;

export default Roadmaps;
