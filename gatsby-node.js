const path = require(`path`);
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const result = await graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
    );

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post) => {
        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
            },
        });
    });
};
const createNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    let slug;
    if (node.internal.type === "MarkdownRemark") {
        const fileNode = getNode(node.parent);
        const parsedFilePath = path.parse(fileNode.relativePath);

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
            slug = `/${node.frontmatter.slug}/`;
        } else {
            slug = `/${parsedFilePath.dir}/`;
        }
        createNodeField({
            name: "slug",
            node,
            value: slug,
        });
    }
};
exports.onCreateNode = createNode;

