import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GoLogoGithub } from "react-icons/go"
import workGIF from "../images/gifs/giphy_work.gif"
import Img from "gatsby-image"

const WorkPage = styled(Layout)`
  width: 100vw;
  display: flex;
  justify-content: center;
`
const GithubContainer = styled.section`
  margin: 0 auto;
  margin-top: 25vh;
  text-align: center;
`
const GithubLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  /* padding-top: 9rem; */
`

const Work = ({ data }) => {
  return (
    <WorkPage>
      <section>
        {data.allMarkdownRemark.edges.map((project, index) => (
          <section key={index}>
            <Img
              style={{ height: 100, width: 200 }}
              fluid={project.node.frontmatter.postImage.childImageSharp.fluid}
              alt={project.node.frontmatter.postImageAlt}
            ></Img>
            <br />
            {project.node.frontmatter.title}
            <br />
            <a
              href={project.node.frontmatter.deploymentLink}
              target="_blank"
              rel="noreferrer"
            >
              Live Preview
            </a>

            <br />
            <a
              href={project.node.frontmatter.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <br />
            <Link to={project.node.frontmatter.slug}>READMORE</Link>
          </section>
        ))}
      </section>

      <GithubContainer>
        <GithubLink href="https://github.com/bertamatu" target="_blank">
          <GoLogoGithub
            style={{
              fontSize: 150,
            }}
          />
          <br />
          <img
            src={workGIF}
            alt="work"
            style={{
              height: 200,
            }}
          />
        </GithubLink>
      </GithubContainer>
    </WorkPage>
  )
}

export const data = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            title
            slug
            postImageAlt
            githubLink
            deploymentLink
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
    }
  }
`
export default Work
