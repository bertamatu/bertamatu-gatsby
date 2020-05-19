import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { BsArrowCounterclockwise } from "react-icons/bs"

const Container = styled(Layout)`
  background-color: white;
  color: black;
`
const Post = styled.article`
  margin: 4rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 1rem;
`
const Title = styled.header`
  padding-top: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: roboto;
  color: gray;
`
const Date = styled.small`
  font-weight: 600;
  color: coral;
  padding-bottom: 5rem;
  font-size: 0.7rem;
`
const Text = styled.p`
  padding-top: 2rem;
  font-size: 0.8rem;
  text-align: justify;
  font-family: roboto;
`
const LinkBack = styled(Link)`
  text-decoration: none;
  font-size: 0.6rem;
  color: gray;
`

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <LinkBack to="/blog">
          Go back to blog page <BsArrowCounterclockwise />
        </LinkBack>
        <Title>{frontmatter.title}</Title>
        <Date>
          {frontmatter.date} by {frontmatter.author}
        </Date>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
        <LinkBack to="/blog">
          Go back to blog page <BsArrowCounterclockwise />
        </LinkBack>
      </Post>
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        author
        slug
        title
      }
    }
  }
`
