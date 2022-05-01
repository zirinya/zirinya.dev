import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Giscus from "../components/comment"
const NotesPost = ({ data }) => {
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
        <Giscus />
      </article> 
    </Layout>
  );
};

export default NotesPost;
export const pageQuery = graphql`
  query NotesPost($slug: String) {
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
      }
    }
  }
`;
