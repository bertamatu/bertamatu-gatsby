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

const roadmapsLinks = links
    .map(link => {
        return link;
    })
    .filter(link => link.type.includes('roadmap'));

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

const Links = data => (
    <Layout>
        <LinksContainer>
            {/* <Picture
                alt="bertacodes"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEsbeAW_pIBXQ/profile-displayphoto-shrink_400_400/0/1630502878061?e=1669248000&v=beta&t=xt-iriLpKZKx1jizTVUbSwnXH8qmKjC32l5G-_s7D7s"
            /> */}
            <Youtube/>

            <iframe 
            width="340" 
            height="180" 
            src="https://www.youtube.com/embed/2Gdaj6lFVBs" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            />

            {personalLinks.map(link => {
                return (
                    <LinkButton
                        href={link.url}
                        target="_blank"
                        key={link.id}
                        // style={{ backgroundColor: 'rgb(250, 30, 63)' }}
                    >
                        {link.title}
                    </LinkButton>
                );
            })}

            {/* <LinkButton
                href="http://turing.com/s/l5apE8 "
                target="_blank"
                style={{ backgroundColor: '#fa1e3f' }}
            >
                Apply to remote software jobs in the US
            </LinkButton> */}
            <br />

            <SectionTitle>Developer roadmaps</SectionTitle>
            <Divider />
            {roadmapsLinks.map(link => {
                return (
                    <LinkButton href={link.url} target="_blank" key={link.id}>
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
        </LinksContainer>
    </Layout>
);

export default Links;

const LinksContainer = styled.section`
    max-width: 400px;
    width: 100%;
    padding-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    overflow-y: auto;
    font-size: 12px;
`;

// const Picture = styled.img`
//     border-radius: 50%;
//     height: 100px;
//     margin-bottom: 10px;
//     box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
//         rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
//         rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
// `;

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
