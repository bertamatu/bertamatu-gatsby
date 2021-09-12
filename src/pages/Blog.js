import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export const queryBlog = graphql`
    query BlogQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
            filter: { frontmatter: { type: { eq: "post" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        author
                        date
                        deploymentLink
                        githubLink
                        intro
                        slug
                        title
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
        }
    }
`;

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <MainContent>
                <div
                    style={{
                        marginTop: '100px',
                        textAlign: 'center',
                        color: 'red',
                        fontSize: '600',
                    }}
                >
                    BLOG IS UNDER CONSTRUCTION...
                </div>
                <Article>
                    {data.allMarkdownRemark.edges.map(post => (
                        <Post key={post.node.frontmatter.id}>
                            <Link to={post.node.frontmatter.slug}>
                                <section>
                                    <Image
                                        fluid={
                                            post.node.frontmatter.postImage
                                                .childImageSharp.fluid
                                        }
                                        alt="developers-setup"
                                    ></Image>
                                </section>
                                <section>
                                    <Title>{post.node.frontmatter.title}</Title>
                                    <ByDate>
                                        {post.node.frontmatter.date}{' '}
                                        <span> Posted by</span>
                                        {post.node.frontmatter.author}
                                    </ByDate>
                                    <Intro>{post.node.frontmatter.intro}</Intro>
                                    <ReadMore to={post.node.frontmatter.slug}>
                                        Read more...
                                    </ReadMore>
                                    <hr />
                                </section>
                            </Link>
                        </Post>
                    ))}
                </Article>
                <BlogMenu>
                    <h5>
                        HELLO! <small>/həˈləʊ,hɛˈləʊ/</small>
                    </h5>

                    <HelloMessage>
                        <blockquote>
                            “I have not failed. I've just found 10,000 ways that
                            won't work.” ― Thomas A. Edison
                        </blockquote>
                    </HelloMessage>
                    <PostsList>
                        {data.allMarkdownRemark.edges.map(posted => (
                            <li key={posted.node.frontmatter.id}>
                                {posted.node.frontmatter.date}
                                <br />
                                <PostItem to={posted.node.frontmatter.slug}>
                                    {posted.node.frontmatter.title}
                                </PostItem>
                            </li>
                        ))}
                    </PostsList>
                </BlogMenu>
            </MainContent>
        </Layout>
    );
};

export default BlogPage;

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100vh;
    width: 100vw;
    /* position: absolute; */
    /* top: 7vh; */
`;
const Article = styled.article`
    width: 50vw;
    display: flex;
    @media (max-width: 768px) {
        /* margin-top: 3rem; */
        margin-top: 78vh;

        display: flex;
        flex-direction: column;
    }
`;
const Image = styled(Img)`
    height: 30vh;
    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;
const Post = styled.section`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 20vw;
    margin: 7rem 1rem;
    align-self: center;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 80vw;
        height: 100%;
        margin: 0 auto;
        margin-left: 10vw;
    }
`;
const Title = styled.header`
    text-transform: uppercase;
    font-weight: 500;
    color: black;
    padding: 0.5rem 1rem;
`;
const ByDate = styled.p`
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    padding: 0 1rem;
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    margin-top: -1rem;
`;
const Intro = styled.p`
    text-align: justify;
    font-size: 0.8rem;
    padding: 0 1rem;
    margin: 0;
`;
const ReadMore = styled(Link)`
    text-decoration: none;
    color: rgb(255, 51, 51);
    font-size: 0.8rem;
    padding: 1rem;
    line-height: 1;
`;
const BlogMenu = styled.aside`
    position: fixed;
    right: 0;
    width: 30vw;
    height: 100vh;
    padding: 7rem 2rem;
    border-radius: 5px;
    @media (max-width: 768px) {
        display: none;
    }
`;
const HelloMessage = styled.small`
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 100;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const PostsList = styled.ul`
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.2;
    text-transform: uppercase;
    color: rgb(255, 51, 51);
`;
const PostItem = styled(Link)`
    color: black;
    text-decoration: none;
`;
