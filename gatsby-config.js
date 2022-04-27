module.exports = {
  siteMetadata: {
    title: `blog-zirinya`,
    siteUrl: `https://zirinya0.dev`,
    description: `notes sth`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "icon": "src/static/favicon.ico"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {

        path: `${__dirname}/blog/`,
        name: `blog`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ]
};