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
        icon: "src/static/favicon.ico",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: `blog`,
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
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  desc: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 30,
                sort: { order: DESC, fields: [frontmatter___date] },
              
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "RSS Feed",
          },
        ],
      },
    },
  ],
};
