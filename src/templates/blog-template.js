import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
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
  margin-bottom: 0.5rem;
  height: 30vh;
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
  font-size: 0.6rem;
  color: gray;
  padding: 1rem;
`

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <LinkBack to="/blog">
          <TiArrowBack />
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
            {frontmatter.author}
          </DateBy>
        </section>
        <hr />
        <Text dangerouslySetInnerHTML={{ __html: html }} />
        <hr />

        <LinkBack to="/blog">
          <TiArrowBack />
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
        date
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
