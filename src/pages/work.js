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
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ItemContainer = styled.section`
  width: 80vw;
  height: auto;
  margin-top: 10vh;
  text-align: center;
  border: 1px dotted gray;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 20vw;
    margin: 10vh 0.5rem 1rem 0.5rem;
  }
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
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ProjectData = styled.section`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const DeploymentLink = styled.a`
  padding: 0.2rem;
  text-decoration: none;
  border-radius: 3px;
  color: white;
  background: red;
  font-size: 0.65rem;
`
const GithubLinkProject = styled.a`
  padding: 0.2rem;
  text-decoration: none;
  border-radius: 3px;
  color: white;
  background: black;
  font-size: 0.65rem;
`
const ProjectImage = styled(Img)`
  margin: 0 auto;
  border-radius: 50px 0 50px 0;
  margin-top: 1rem;
  border: 3px white solid;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
`

const ReadMore = styled(Link)`
  font-size: 0.7rem;
  color: red;
  text-decoration: none;
`
const Work = ({ data }) => {
  return (
    <WorkPage>
      <Projects>
        <ItemContainer>
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
        </ItemContainer>
        {data.allMarkdownRemark.edges.map((project, index) => (
          <ItemContainer key={index}>
            <a
              href={project.node.frontmatter.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectImage
                style={{ height: 242, width: 200 }}
                fluid={project.node.frontmatter.postImage.childImageSharp.fluid}
                alt={project.node.frontmatter.postImageAlt}
              ></ProjectImage>
            </a>

            <ProjectData>
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
              <GithubLinkProject
                href={project.node.frontmatter.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </GithubLinkProject>
              <br />
              <ReadMore to={project.node.frontmatter.slug}>
                READ MORE...
              </ReadMore>
            </ProjectData>
          </ItemContainer>
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
