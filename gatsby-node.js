const path = require("path");

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/postTemplate.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    });

  });

};