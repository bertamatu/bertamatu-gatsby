import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import data from '../data/data.json';
import Youtube from '../components/buttons/Youtube';

const links = data.links;

const javascriptLinks = links
    .map(link => {
        return link;
    })
    .filter(link => link.type.includes('javascript'));

const personalLinks = links
    .map(link => {
        return link;
    })
    .filter(link => link.type.includes('personal'));

const mustReadLinks = links
    .map(link => {
        return link;
    })
    .filter(link => link.type.includes('mustread'));

const Links = () => (
    <Layout>
        <LinksContainer>
          <Youtube/>
          <iframe 
          width="300" 
          height="180" 
          src="https://www.youtube.com/embed/2Gdaj6lFVBs" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          <SectionTitle>Berta.codes</SectionTitle>
          <Divider />
          {personalLinks.map(link => {
              return (
                  <LinkButton
                      href={link.url}
                      target="_blank"
                      key={link.id}
                      style={{ background: '#C0C0C0'}}
                  >
                      {link.title}
                  </LinkButton>
              );
          })}
          <br />         
          <SectionTitle>Javascript</SectionTitle>
          <Divider />
          {javascriptLinks.map(link => {
              return (
                  <LinkButton href={link.url} target="_blank" key={link.id}>
                      {link.title}
                  </LinkButton>
              );
          })}
          <br />
          <SectionTitle>must read</SectionTitle>
          <Divider />
          {mustReadLinks.map(link => {
              return (
                  <LinkButton href={link.url} target="_blank" key={link.id}>
                      {link.title}
                  </LinkButton>
              );
          })}
          <br />
        </LinksContainer>
    </Layout>
);

export default Links;

const LinksContainer = styled.section`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    overflow-y: auto;
    font-size: 12px;
`;

const SectionTitle = styled.b`
    color: #ff0033;
    text-transform: uppercase;
    font-size: 16px;
`;

const LinkButton = styled.a`
    max-width: 400px;
    width: 95%;
    height: 50px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    background: rgb(32 31 31 / 10%);
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    transition: all 300ms ease-in-out;
    font-weight: bold;
    &:hover {
      background: rgb(32 31 31 / 20%);
      color: white;
    }
`;

const Divider = styled.hr`
    width: 100%;
    margin-bottom: 10px;
    padding: 0;
`;
