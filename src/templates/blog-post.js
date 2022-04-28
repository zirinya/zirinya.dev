import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { title, slug, date } = post.frontmatter;
  return (
    <Layout pageTitle={title}>
      <article className="blog-post" id={slug}>
        <header>
          <h1>{title}</h1>
          <small>{date}</small>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        desc
      }
    }
  }
`;
