import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const BlogContainer = styled(Layout)`
  background-color: lightcoral;
`
const Image = styled(Img)`
  height: 40vh;
  margin-top: 5rem;
  position:relative;
`
const Post = styled.section`
  margin: 0 auto;
  margin-top: 6rem;
  padding: 0 1rem;
  width: 80vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const Title = styled.header`
  text-transform: uppercase;
  font-weight: 500;
`
const ByDate = styled.small`
  font-weight: 600;
  color: darkgray;
`
const Intro = styled.p`
  text-align: justify;
  font-size: 0.8rem;
`
const ReadMore = styled(Link)`
  text-decoration: none;
  color: coral;
  font-size: 0.9rem;
`

const BlogPage = ({ data }) => {
  return (
    <BlogContainer>
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
    </BlogContainer>
  )
}

export const data = graphql`
  query BlogIndexQuery {
    file(relativePath: { eq: "Blog_cover.jpeg" }) {
      absolutePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
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
