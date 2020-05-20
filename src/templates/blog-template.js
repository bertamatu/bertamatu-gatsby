import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GiReturnArrow } from "react-icons/gi"
import { GoPerson, GoCalendar } from "react-icons/go"
import Img from "gatsby-image"

const Container = styled(Layout)`
  background-color: white;
  color: black;
  border: 1px solid black;
`
const Post = styled.article`
  margin: 4rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 1rem;
  text-align: center;
`
const Title = styled.header`
  padding-top: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: roboto;
  color: gray;
`
const DateBy = styled.small`
  font-weight: 600;
  color: coral;
  padding-bottom: 5rem;
  font-size: 0.6rem;
  /* ::before {
    content: "";
  } */
`
const Text = styled.p`
  padding-top: 2rem;
  font-size: 0.8rem;
  text-align: justify;
  font-family: roboto;
`
const LinkBack = styled(Link)`
  text-decoration: none;
  font-size: 0.5rem;
`

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="developers-setup"
        ></Img>
        <Title>{frontmatter.title}</Title>
        <section>
          <DateBy>
            <GoCalendar />
            {frontmatter.date}
            <GoPerson />
            {frontmatter.author}
          </DateBy>
        </section>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
        <LinkBack to="/blog">
          <GiReturnArrow />
          Go back to blog page
        </LinkBack>
      </Post>
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    file(relativePath: { eq: "black_leaves.jpeg" }) {
      absolutePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
