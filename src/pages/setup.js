import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import SetupItem from '../components/SetupItem';
import SetupData from '../data/setup.json';
import { FaAmazon } from 'react-icons/fa';
import { Link } from 'gatsby';
import { darkerBoxShadow } from '../style/GlobalStyles';

const AMAZON_URL = 'https://www.amazon.com/shop/berta.codes'

const Setup = () => {
    return (
        <Layout>
            <InfoContent>
                <section>
                    <strong>Happy to see you here!</strong> The items in the list below are ones that I genuinely love and use in my daily life, 
                    except the plant, although it does look cute! My goal is to inspire you with items that reflect my own taste and help you 
                    create a stunning setup. <strong>Enjoy!</strong>"
                </section>
                    <LinkText to={AMAZON_URL} target='_blank'>
                        <AmazonIcon />
                        BERTA CODES' WISHLIST ON AMAZON
                    </LinkText>
            </InfoContent>
            <Container>
                {SetupData.map(item => (
                    <SetupItem item={item} />
                ))}
            </Container>
        </Layout>
    );
};

export default Setup;

const InfoContent = styled('section')`
display: flex;
flex-direction: column;
padding: 0 36%;
font-size: 15px;
text-align: justify;
margin-top: 9vh;
@media (max-width: 768px) {
    padding: 0 8%;
    margin-top: 10vh;
    font-size: 14px;
    }
`;

const LinkText = styled(Link)`
color: #FFF;
font-size: 13px;
display: flex;
align-items: center;
margin-top: 20px;
margin: 0 auto;
text-decoration: none;
border: 1px solid var(--dark-gray);;
border-radius: 6px;
padding: 12px;
margin-top: 30px;
font-weight: 900;
background-color: var(--dark-gray-color);
${darkerBoxShadow};
`;

const AmazonIcon = styled(FaAmazon)`
color: #ffa724;
font-size: 24px;
padding-right: 5px;
`;

const Container = styled('div')`
    margin-top: 2vh;
    padding: 0 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`;
