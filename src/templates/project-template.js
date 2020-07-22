import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { TiArrowBack } from "react-icons/ti"
import Img from "gatsby-image"

const Container = styled.section`
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  margin-top: 7vh;
  border-radius: 0 50px 0 50px;
  border: 10px solid white;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  text-align: center;
  background: rgba(211, 211, 211, 0.1);
  font-size: 0.8rem;
  @media (min-width: 768px) {
    width: 40vw;
  }
`
const Image = styled(Img)`
  height: 150px;
  width: 150px;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 50px 0 50px 0;
  border: 3px white solid;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  /* @media (min-width: 768px) {
    width: 200px;
    height: 350px;
    float: left;
    margin: 5rem 2rem 0 2rem;
  } */
`
const LinkBack = styled(Link)`
  text-decoration: none;
  color: red;
`

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <LinkBack to="/work">
        <TiArrowBack />
        Go back to work page
      </LinkBack>

      <Image
        fluid={frontmatter.postImage.childImageSharp.fluid}
        alt={frontmatter.postImageAlt}
      ></Image>

      <p>{frontmatter.title}</p>
      {/* <p>{frontmatter.author}</p> */}
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
      {/* <LinkBack to="/work">
        <TiArrowBack />
        Go back to work page
      </LinkBack> */}
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        author
        deploymentLink
        githubLink
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
