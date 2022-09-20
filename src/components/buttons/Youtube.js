import React from 'react';
import styled from 'styled-components';
import {FaYoutube} from 'react-icons/fa';

const Youtube = () => {
  return (
    <Container>
          <Icon
                href="https://www.youtube.com/c/bertacodes"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaYoutube /> 
                <Title>YouTube</Title>
            </Icon>
    </Container>
  )
}

export default Youtube;

const Container = styled.div`
width: auto;
height: 30px;
display: flex;
justify-content: center;
margin: 18px;
`;

const Icon = styled.a`
display: flex;
justify-content: center;
color: red;
font-size: 32px;
text-decoration: none;
align-items: center;
`;

const Title = styled.span`
color: black;
font-size: 24px;
font-family: 'Oswald', sans-serif;
font-weight: 600;
margin-left: 1px;
`;