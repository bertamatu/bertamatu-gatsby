import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import data from '../data/data.json';
import SocialIcons from '../components/buttons/SocialIcons';

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
            <Picture
                alt="bertacodes"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEsbeAW_pIBXQ/profile-displayphoto-shrink_200_200/0/1630502878061?e=1642636800&v=beta&t=gYfP5phLVl7xTpRPeFJPJQrB3cVrBPw3Jl7xuFnGhWk"
            />
            <SocialIcons />
            {personalLinks.map(link => {
                return (
                    <LinkButton href={link.url} target="_blank" key={link.id}>
                        {link.title}
                    </LinkButton>
                );
            })}
            <br />
            <SectionTitle>MY SETUP</SectionTitle>
            <LinkButton
                href="https://nexstand.eu?aff=39"
                target="_blank"
                rel="noopener noreferrer"
            >
                Laptop stand
            </LinkButton>
            <LinkButton
                href="https://vissles.com/?ref=jkty8so55j"
                target="_blank"
                rel="noopener noreferrer"
            >
                Mechanical RGB Keyboard
            </LinkButton>
            <LinkButton
                href="https://www.autonomous.ai/office-chairs/ergonomic-chair?utm_source=Influencer_Affiliate&utm_medium=Instagram&utm_campaign=Growth&utm_content=BERTA04"
                target="_blank"
                rel="noopener noreferrer"
            >
                ErgoChair Pro Autonomous
            </LinkButton>
            <LinkButton
                href="https://barner.pxf.io/c/2964139/1081324/12120?partnerpropertyid=2812707"
                target="_blank"
                rel="noopener noreferrer"
            >
                Blue Light glasses | Black Noir
            </LinkButton>
            <br />
            <SectionTitle>Developer roadmaps</SectionTitle>
            {roadmapsLinks.map(link => {
                return (
                    <LinkButton href={link.url} target="_blank" key={link.id}>
                        {link.title}
                    </LinkButton>
                );
            })}
            <br />
            <SectionTitle>Javascript</SectionTitle>
            {javascriptLinks.map(link => {
                return (
                    <LinkButton href={link.url} target="_blank" key={link.id}>
                        {link.title}
                    </LinkButton>
                );
            })}
            <br />
            <SectionTitle>must read</SectionTitle>
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Picture = styled.img`
    border-radius: 50%;
    height: 100px;
    margin-bottom: 10px;
`;

const SectionTitle = styled.b`
    color: #FA1E3F;
    text-transform: uppercase;
    font-size: 15px;
`;

const LinkButton = styled.a`
    max-width: 400px;
    width: 95%;
    height: 50px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    background: #000;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    transition: all 300ms ease-in-out;

    &:hover {
        background: rgb(32 31 31 / 20%);
        color: black;
    }
`;
