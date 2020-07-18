import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Layout from "../components/layout"
// import styled from "styled-components"
import { TiArrowBack } from "react-icons/ti"
import Img from "gatsby-image"

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds post data
  const { frontmatter, html } = markdownRemark
  return (
    <main style={{ backgroundColor: "green" }}>
      <section>
        <Link to="/work">
          <TiArrowBack />
          Go back to work page
        </Link>

        <Img
          fluid={frontmatter.postImage.childImageSharp.fluid}
          alt={frontmatter.postImageAlt}
        ></Img>
        <p>{frontmatter.title}</p>
        <section>
          <p>{frontmatter.author}</p>
        </section>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
        <hr />
        <Link to="/work">
          <TiArrowBack />
          Go back to work page
        </Link>
      </section>
    </main>
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
