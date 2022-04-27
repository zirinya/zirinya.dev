import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const NotesPage = ({ data }) => {
  return (
    <Layout pageTitle="Notes">
      <h1>Notes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        dolorum, tempora vel reiciendis nostrum aut recusandae mollitia velit
        quibusdam tempore officiis facere alias. Hic facere sint enim, ipsam
        laudantium esse?
      </p>
      <div>
        {data.allMarkdownRemark.nodes.map((post) => (
          <Link key={post.fields.slug} to={post.fields.slug}>
            <div className="notestitlewrap">
              <h4 className="notesLinks">{post.frontmatter.title}</h4>
              <span>{post.frontmatter.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          desc
        }
      }
    }
  }
`;
export default NotesPage;
