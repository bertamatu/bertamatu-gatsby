import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GiReturnArrow } from "react-icons/gi"
// import { GoPerson, GoCalendar } from "react-icons/go"
import Img from "gatsby-image"

const Container = styled(Layout)`
  background-color: white;
  color: black;
  border: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const Image = styled(Img)`
  border-radius: 5px;
  margin-bottom: 0.5rem;
  filter: grayscale(60%);
  -webkit-box-shadow: 6px 7px 39px 2px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 6px 7px 39px 2px rgba(0, 0, 0, 0.21);
  box-shadow: 6px 7px 39px 2px rgba(0, 0, 0, 0.21);
  @media (min-width: 768) {
    max-width: 50px;
  }
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: gray;
`
const DateBy = styled.small`
  font-weight: 600;
  color: coral;
  font-size: 0.7rem;
`
const Text = styled.p`
  padding-top: 1rem;
  font-size: 0.8rem;
  text-align: justify;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt="developers-setup"
        ></Image>
        <Title>{frontmatter.title}</Title>
        <section>
          <DateBy>
            {/* <GoCalendar /> */}-{frontmatter.date}-{/* <GoPerson />  */}
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
    file(relativePath: { eq: "grass.jpg" }) {
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
