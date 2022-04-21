import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../../components/layout'

const makeitPurple = {
  color: "#B984DF",
  paddingTop:"8px"
}

const blogpageWrapper = {
  paddingLeft: "14px",
  marginTop: "8px",
  textDecoration:"underline"
}

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h4>Blogs</h4>
      <div style={blogpageWrapper}>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h6 style={makeitPurple}>
                <Link to={`${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h6>
            </article>
          ))
        }</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
// export default BlogPage