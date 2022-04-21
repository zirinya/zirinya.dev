module.exports = {
  siteMetadata: {
    title: `blog-zirinya`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `A fantastic new static site generator.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./components/layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "icon": "src/static/favicon.ico"
      },
    },
  ]
};