import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMarkdownRemark(limit: 10, filter: {
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
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={data => {
        return data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <h2>
              <Link to={`/posts${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
          </Post>
        ))
      }}
    />
  )
}

export default Listing
