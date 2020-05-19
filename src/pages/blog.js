import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled(Layout)``
const Post = styled.section`
  margin: 0 auto;
  margin-top: 6rem;
  padding: 0 1rem;
  width: 80vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const ReadMore = styled(Link)`
  text-decoration: none;
  color: coral;
  font-size: 0.9rem;
`

const BlogPage = ({ data }) => {
  return (
    <Container>
      {data.allMarkdownRemark.edges.map(post => (
        <Post key={post.node.frontmatter.id}>
          <h5>{post.node.frontmatter.title}</h5>
          <small>
            Posted by {post.node.frontmatter.author} on
            {post.node.frontmatter.date}
          </small>
          <br />
          <ReadMore to={post.node.frontmatter.slug}>Read more</ReadMore>
        </Post>
      ))}
    </Container>
  )
}

export const data = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            slug
            title
          }
        }
      }
    }
  }
`

export default BlogPage
