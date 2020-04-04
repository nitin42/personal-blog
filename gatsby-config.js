module.exports = {
  siteMetadata: {
    title: `Form meets code`,
    siteUrl: `https://ntsketches.in`,
    description: `A blog about generative art and what programming brings to it.`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [require("remark-slug")],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `playground`,
        path: `${__dirname}/src/pages/playground`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
