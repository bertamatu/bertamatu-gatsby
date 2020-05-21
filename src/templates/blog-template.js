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
  -webkit-box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  @media (max-width: 768) {
    width: 80vw;
  }
`
const Post = styled.article`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  width: 80vw;
  margin: 0 auto;
  padding-top: 4.5rem;
  @media (min-width: 768px) {
    width: 50vw;
  }
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
  color: gray;
`
export default function BlogTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <LinkBack to="/blog">
          <GiReturnArrow />
          Go back to blog page
        </LinkBack>
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
