import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
const Home = ({ data }) => {
  return (
    <Layout pageTitle="Home | zirinya.dev">
      <div>
        <div>
          <br />
          <h2 className="topicHeading">
            Hello there,
            <br /> My name is <span>"Mayz"</span>
          </h2>
          <p>
            I am Coder who Creative and self-starting
            <br />
            Developer who freaking up on every level.
          </p>
          <Link to="/about" className="notesLink">
            More about me...
          </Link>
        </div>
      </div>
      <div>
        <h2 className="topicHeading">Latest Notes</h2>
        <hr />

        {data.allMarkdownRemark.nodes.map((post) => (
          <Link key={post.id} to={post.fields.slug} className="latestPost">
            <h4>{post.frontmatter.title}</h4>
            <small>{post.frontmatter.date}</small>
            <p>{post.frontmatter.desc}</p>
          </Link>
        ))}
        <Link to="/notes" className="notesLink">
          More note
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          desc
        }
        id
      }
    }
  }
`;
export default Home;
