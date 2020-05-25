import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const MainContent = styled.main`
  display: flex;
`
const Article = styled.article`
  margin: 0 auto;
  width: 70vw;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const BlogMenu = styled.aside`
  border: 0.4px solid rgba(0, 0, 0, 0.01);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 30vw;
  position: relative;
  right: 0;
  top: 4rem;
  margin-right: 3rem;
  padding: 3rem 2rem;
  /* text-align: justify; */
  -webkit-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    display: none;
  }
`
const HelloMessage = styled.small`
  font-size: 0.8rem;
  text-transform: uppercase;
  padding-top: 2rem;
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const PostsList = styled.ul`
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: left;
  margin-top: 2rem;
  color: rgb(255, 51, 51);
`
const PostItem = styled(Link)`
  color: black;
  text-decoration: none;
`
const Image = styled(Img)`
  margin-top: 1rem 0rem;
  filter: grayscale(100%);
`
const Post = styled.section`
  width: 85vw;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 4rem 2rem;
  padding: 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  @media (min-width: 768px) {
    width: 20vw;
    position: relative;
  }
`
const Title = styled.header`
  text-transform: uppercase;
  font-weight: 500;
  color: black;
  padding: 1rem 1rem;
`
const ByDate = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.9rem;
  padding: 1rem;
  font-weight: 200;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
`
const Intro = styled.p`
  text-align: justify;
  font-size: 0.7rem;
  padding: 0 1rem;
`
const ReadMore = styled(Link)`
  text-decoration: none;
  color: rgb(255, 51, 51);
  font-size: 0.9rem;
  padding: 1rem;
  line-height: 1;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <MainContent>
        <Article>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.id}>
              <Image
                fluid={post.node.frontmatter.postImage.childImageSharp.fluid}
                alt="developers-setup"
              ></Image>
              <Title>{post.node.frontmatter.title}</Title>
              <hr />

              <ByDate>
                {post.node.frontmatter.date} <span> Posted by</span>
                {post.node.frontmatter.author}
              </ByDate>
              <Intro>{post.node.frontmatter.intro}</Intro>
              <ReadMore to={post.node.frontmatter.slug}> Read more...</ReadMore>
            </Post>
          ))}
        </Article>
        <BlogMenu>
          <h5>HELLO</h5>
          <HelloMessage>
            <blockquote>
              “I have not failed. I've just found 10,000 ways that won't work.”
              ― Thomas A. Edison
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
                <br />
              </li>
            ))}
          </PostsList>
        </BlogMenu>
      </MainContent>
    </Layout>
  )
}

export const data = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            slug
            title
            intro
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
`
export default BlogPage
