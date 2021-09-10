/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ECPPM Conference",
    homePageBanner: require("./site-meta-data.json"),
    about: require("./site-about-data.json"),
    committee: require("./site-committee-data.json"),
    conferenceTopics: require("./site-conferenceTopics-data.json"),
    keyDates: require("./site-keyDates-data.json"),
    partners: require("./site-partners-data.json"),
    speakers: require("./site-speakers-data.json"),
    submissions: require("./site-submissions-data.json"),
    siteFooter: require("./site-footer-data.json"),
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
};
