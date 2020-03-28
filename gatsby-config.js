module.exports = {
  siteMetadata: {
    title: `Form meets code`,
    siteUrl: `https://ntsketches.in`,
    description: `A blog about generative art and what programming brings to it.`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
