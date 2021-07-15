const path = require(`path`);
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Photo Blog`,
    author: `Louis Edwards`,
    description: `Hi! I’m Louis and I am professional photographer since 2001. I’m writing about cameras, design and photographer stuff`,
    siteUrl: process.env.SITE_URL,
    image: `/static/homepage.png`,
    twitterUsername: `louis_edwards_photo`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src/assets/images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `content`),
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
