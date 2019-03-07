import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query POST_ARCHIVE_QUERY {
    allMarkdownRemark(limit: 5, filter: {
      fileAbsolutePath: {
        regex: "/posts/*.*\\.md$/"
      }
    }, sort: {
      order: DESC
      fields: [frontmatter___date, frontmatter___title]
    }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>From the Blog</h3>
          <ul>
            {allMarkdownRemark.edges.map((edge, index) => {
              const post = { ...edge.node.frontmatter }
              return (
                <li key={index}>
                  <Link to={`/posts${post.slug}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </>
    )}
  />
)

export default Archive
