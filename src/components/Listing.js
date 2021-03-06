import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { LinkButton } from '../shared/styledComponents'

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMarkdownRemark(limit: 10, filter: {
      fileAbsolutePath: {
        regex: "/blog/*.*\\.md$/"
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
            path
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

const Post = styled.article``

const Listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={data => {
        return data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <h3>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h3>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <LinkButton to={node.frontmatter.path}>Read More</LinkButton>
          </Post>
        ))
      }}
    />
  )
}

export default Listing
