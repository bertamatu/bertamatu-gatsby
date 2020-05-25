import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const MainContent = styled.main`
  display: flex;
  position: absolute;
`
const Article = styled.article`
  width: 70vw;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }
`
const Image = styled(Img)`
  filter: grayscale(100%);
  height: 30vh;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
const Post = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 20vw;
  margin: 7rem 1rem;
  align-self: center;
  @media (max-width: 768px) {
    width: 80vw;
    height: 100%;
    margin: 0 auto;
    margin-left: 10vw;
  }
`
const Title = styled.header`
  text-transform: uppercase;
  font-weight: 500;
  color: black;
  padding: 0.5rem 1rem;
`
const ByDate = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.8rem;
  padding: 0 1rem;
  font-weight: 200;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  margin-top: -1rem;
`
const Intro = styled.p`
  text-align: justify;
  font-size: 0.8rem;
  padding: 0 1rem;
  margin: 0;
`
const ReadMore = styled(Link)`
  text-decoration: none;
  color: rgb(255, 51, 51);
  font-size: 0.8rem;
  padding: 1rem;
  line-height: 1;
`

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
`
const HelloMessage = styled.small`
  font-size: 0.8rem;
  text-transform: uppercase;
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
  line-height: 1.2;
  text-transform: uppercase;
  color: rgb(255, 51, 51);
`
const PostItem = styled(Link)`
  color: black;
  text-decoration: none;
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <MainContent>
        <Article>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.id}>
              <section>
                <Image
                  fluid={post.node.frontmatter.postImage.childImageSharp.fluid}
                  alt="developers-setup"
                ></Image>
              </section>
              <section>
                <Title>{post.node.frontmatter.title}</Title>
                <ByDate>
                  {post.node.frontmatter.date} <span> Posted by</span>
                  {post.node.frontmatter.author}
                </ByDate>
                <Intro>{post.node.frontmatter.intro}</Intro>
                <ReadMore to={post.node.frontmatter.slug}>
                  {" "}
                  Read more...
                </ReadMore>
                <hr />
              </section>
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
