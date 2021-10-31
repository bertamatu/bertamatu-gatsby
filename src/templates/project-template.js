import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';
import Img from 'gatsby-image';

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
                author
                deploymentLink
                githubLink
                postImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export default function ProjectTemplate({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Container>
            <Image
                fluid={frontmatter.postImage.childImageSharp.fluid}
                alt={frontmatter.postImageAlt}
            ></Image>
            <br />
            <h5>{frontmatter.title}</h5>
            <div>{frontmatter.author}</div>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            <LinkBack to="/Projects">
                <TiArrowBack />
                Go back to work page
            </LinkBack>
        </Container>
    );
}

const Container = styled.section`
    width: 80vw;
    margin: 0 auto;
    margin-top: 7vh;
    padding: 2rem;
    border-radius: 0 50px 0 50px;
    border: 10px solid white;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    text-align: center;
    background: rgba(211, 211, 211, 0.1);
    font-size: 0.8rem;
    @media (min-width: 768px) {
        width: 40vw;
        height: 90vh;
    }
`;
const Image = styled(Img)`
    width: 50%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-right: 1rem;
    border-radius: 50px 0 50px 0;
    border: 3px white solid;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
    @media (min-width: 768px) {
        float: left;
        height: 90%;
    }
`;
const LinkBack = styled(Link)`
    text-decoration: none;
    color: red;
`;
