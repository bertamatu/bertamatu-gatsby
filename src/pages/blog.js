import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';
import BlogCard from '../components/blog/BlogCard';

export const queryBlog = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
                gatsbyImageData(layout: FULL_WIDTH)
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
        <Article>
          {data.allMarkdownRemark.edges.map((post, index) => (
            <BlogCard
              post={post.node.frontmatter}
              key={post.node.frontmatter.intro}
            />
          ))}
        </Article>
        <BlogMenu>
          <PostsList>
            {data.allMarkdownRemark.edges.map(posted => (
              <li key={posted.node.frontmatter.slug}>
                {posted.node.frontmatter.date}
                <br />
                <PostItem to={posted.node.frontmatter.title}>
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
  padding-bottom: 20px;
`;

const Article = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100vw - 400px);
  padding-top: 56px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    justify-content: center;
  }
`;

const BlogMenu = styled.aside`
  transparency: 0.5;
  width: 400px;
  position: absolute;
  top: 46px;
  right: 0;
  height: inherit;
  padding: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PostsList = styled.ul`
  list-style: none;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--dark-gray);
  font-weight: 900;

  & li {
    padding-bottom: 20px;
    color: var(--red-color);
  }
`;

const PostItem = styled(Link)`
  color: black;
  text-decoration: none;
`;
