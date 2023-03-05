exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = require.resolve(
        `./src/templates/blog-template.js`
    );
    const projectTemplate = require.resolve(
        `./src/templates/project-template.js`
    );

    const result = await graphql(`{
  allMarkdownRemark(sort: {frontmatter: {date: ASC}}, limit: 100) {
    edges {
      node {
        frontmatter {
          slug
          type
        }
      }
    }
  }
}`);
    if (result.errors) {
        reporter.panicOnBuild(
            `gatsby-node.js | Error while running GraphQL query.`
        );
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.type === 'post') {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug,
                },
            });
        } else {
            createPage({
                path: node.frontmatter.slug,
                component: projectTemplate,
                context: {
                    slug: node.frontmatter.slug,
                },
            });
        }
    });
};
