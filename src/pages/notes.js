import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
const NotesPage = ({ data }) => {
  return (
    <Layout pageTitle="Notes">
      <h2 className="topicHeading">Notes</h2>
      <p>This is note page which it what i wanna write it</p>
      <div>
        {data.allMarkdownRemark.nodes.map((post) => (
          <Link key={post.id} to={post.fields.slug} className="notesLink">
            <div className="notestitlewrap">
              <p>{post.frontmatter.title}</p>
              <p>{post.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
      }
    }
  }
`;
export default NotesPage;
