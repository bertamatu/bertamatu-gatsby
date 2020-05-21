import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const BlogContainer = styled(Layout)``

const Logo = styled.p`
  font-size: 4.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
  letter-spacing: -17px;
  padding-top: 8rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.1);
  margin-left: -1rem;
  @media (min-width: 768px) {
    font-size: 7rem;
    letter-spacing: -30px;
  }
`
const MainContent = styled.main`
  display: flex;
`
const Article = styled.article`
  margin: 2rem 2rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2rem 3rem;
  }
`
const BlogMenu = styled.aside`
  border: 0.4px solid rgba(0, 0, 0, 0.01);
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #f3f3f3,
    #e7e7e7,
    #dcdcdc,
    #d0d0d0
  );
  border-radius: 5px;
  width: 50vw;
  position: relative;
  right: 0;
  top: 4rem;
  margin-right: 3rem;
  padding: 3rem 2rem;
  text-align: justify;

  -webkit-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 24px -8px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    display: none;
  }
`
const HelloMessage = styled.small`
  font-size: 0.7rem;
  padding-top: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const PostsList = styled.ul`
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.7rem;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: left;
  margin-top: 2rem;
  font-weight: 600;
  color: coral;
`
const PostItem = styled(Link)`
  color: black;
  text-decoration: none;
`
const Image = styled(Img)`
  height: 30vh;
  margin-top: 1rem 0rem;
`
const Post = styled.section`
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  margin-bottom: 2rem;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 24px -6px rgba(0, 0, 0, 0.24);
  @media (min-width: 768px) {
    width: 30vw;
    position: relative;
  }
`
const Title = styled.header`
  text-transform: uppercase;
  font-weight: 500;
  color: black;
`
const ByDate = styled.small`
  /* font-weight: 600; */
  color: darkgray;
  font-size: 0.8rem;
`
const Intro = styled.p`
  text-align: justify;
  font-size: 0.7rem;
`
const ReadMore = styled(Link)`
  text-decoration: none;
  color: coral;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`

const BlogPage = ({ data }) => {
  return (
    <BlogContainer>
      <Logo>
        BERTAMATU <span>blog</span>
      </Logo>
      <MainContent>
        <Article>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.id}>
              <Image
                fluid={data.file.childImageSharp.fluid}
                alt="developers-setup"
              ></Image>
              <Title>{post.node.frontmatter.title}</Title>
              <ByDate>
                {post.node.frontmatter.date} Posted by{" "}
                {post.node.frontmatter.author}
              </ByDate>
              <Intro>{post.node.frontmatter.intro}</Intro>
              <ReadMore to={post.node.frontmatter.slug}>Read more</ReadMore>
            </Post>
          ))}
        </Article>
        <BlogMenu>
          <h5>HELLO</h5>
          <HelloMessage>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            veritatis voluptatum. Debitis doloremque veritatis nemo sint?
            Blanditiis, inventore, maxime velit quaerat laboriosam iste
            laudantium totam temporibus sapiente numquam dolor deserunt?{" "}
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
    </BlogContainer>
  )
}

export const data = graphql`
  query BlogQuery {
    file(relativePath: { eq: "blog_post_photo.jpeg" }) {
      absolutePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
          }
        }
      }
    }
  }
`
export default BlogPage
