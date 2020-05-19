import React from "react"
import Layout from "../components/layout"
import BlogTemplate from "../templates/blog-template"
// import { graphql } from "gatsby"
// import { Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <BlogTemplate />
      {/* <h1>BLOG POSTS</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h5>{post.node.frontmatter.title}</h5>
          <small>
            Posted by {post.node.frontmatter.author} on
            {post.node.frontmatter.date}
          </small>

          <br />
          <br />
          <Link to={post.node.frontmatter.slug}>Read more</Link>
          <br />
          <hr />
        </div>
      ))} */}
    </Layout>
  )
}

// export const data = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             author
//             date
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPage
