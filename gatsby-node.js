const path = require("path");

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/postTemplate.js`);

  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    });

  });

};