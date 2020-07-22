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
  margin-top: 5vh;
  text-align: center;
`
const GithubLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
`
const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ProjectItem = styled.section``
const DeploymentLink = styled.a`
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
`
const Work = ({ data }) => {
  return (
    <WorkPage>
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

      <Projects>
        {data.allMarkdownRemark.edges.map((project, index) => (
          <ProjectItem key={index}>
            <Img
              style={{ height: 100, width: 200 }}
              fluid={project.node.frontmatter.postImage.childImageSharp.fluid}
              alt={project.node.frontmatter.postImageAlt}
            ></Img>
            <br />
            {project.node.frontmatter.title}
            <br />
            <DeploymentLink
              href={project.node.frontmatter.deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </DeploymentLink>

            <br />
            <a
              href={project.node.frontmatter.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <br />
            <Link to={project.node.frontmatter.slug}>READMORE</Link>
          </ProjectItem>
        ))}
      </Projects>
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
