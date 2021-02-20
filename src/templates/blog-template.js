import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { TiArrowBack } from "react-icons/ti"
// import { GoPerson, GoCalendar } from "react-icons/go"
import Img from "gatsby-image"

const Container = styled(Layout)`
  border: 1px solid black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const Image = styled(Img)`
  border-radius: 5px;
  margin: 1rem 0 0.5rem 0;
  height: 40vh;
  -webkit-box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 27px 41px -21px rgba(0, 0, 0, 0.31);
  filter: grayscale(100%);
  /* @media (min-width: 768) {
  } */
`
const Post = styled.article`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  width: 80vw;
  margin: 0 auto;
  padding-top: 4.5rem;
  @media (min-width: 768px) {
    width: 40vw;
  }
`
const Title = styled.header`
  padding-top: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
`
const DateBy = styled.small`
  font-weight: 600;
  color: rgb(255, 51, 51);
  font-size: 0.6rem;
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
  font-size: 0.9rem;
  color: salmon;
`
export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <LinkBack to="/blog">
          <TiArrowBack />
          <br />
          Go back to blog page
        </LinkBack>
        <Image
          fluid={frontmatter.postImage.childImageSharp.fluid}
          alt="developers-setup"
        ></Image>
        <Title>{frontmatter.title}</Title>
        <section>
          <DateBy>
            {/* <GoCalendar /> */}-{frontmatter.date}-{/* <GoPerson />  */}
            <a
              href="https://www.instagram.com/berta.codes/"
              rel="noopener noreferrer"
            >
              {frontmatter.author}
            </a>
          </DateBy>
        </section>
        <hr />
        <Text dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        <LinkBack to="/blog">
          <TiArrowBack />
          <br />
          Go back to blog page
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
        author
        slug
        title
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
`
