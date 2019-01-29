import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul>
          {post.frontmatter.tags.map(function(tag, index){
            return <li key={ index }>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}
              </Link>
            </li>;
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags 
      }
    }
  }
`