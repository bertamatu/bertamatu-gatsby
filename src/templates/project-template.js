import React from "react"

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container>
      <Post>
        <LinkBack to="/work">
          <TiArrowBack />
          Go back to blog page
        </LinkBack>

        <Image
          fluid={frontmatter.postImage.childImageSharp.fluid}
          alt={frontmatter.postImageAlt}
        ></Image>
        <Title>{frontmatter.title}</Title>
        <section>
          <Date>{frontmatter.author}</Date>
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
